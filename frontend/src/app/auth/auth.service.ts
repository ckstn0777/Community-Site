import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.module';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const BACKED_URL = environment.BACKED_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new Subject<boolean>();
  private token: string;
  private tokenTimer: any;
  private isAuthenticated = false;

  private userId: string;
  private nickname: string;
  private avatar: string;

  userAuthority = new Subject<any>();


  constructor(private http: HttpClient, private router: Router) {}

  // 상태변화리스너 생성
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserData() {
    return {
      userId: this.userId,
      userNickname: this.nickname,
      avatar: this.avatar
    };
  }
  // 사용자 인증여부 반환
  getIsAuth() {
    return this.isAuthenticated;
  }

  // 토큰 반환
  getToken() {
    return this.token;
  }

  // 처음 화면 로딩할때 실행되는 함수 -> 토큰 재설정
  autoAuthUser() {
    // 로컬 저장소에 저장되어있는 정보를 불러온다
    const authInformation = this.getAuthData();
    if (!authInformation) { // 정보가 없다면 그냥 패스
      return;
    }
    // 토큰 유효성 검사
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.nickname = authInformation.nickname;
      this.avatar = authInformation.avatar;

      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  // 로그인 처리
  login(email: string, password: string, token: string) {
    // 형식틀을 정형화시킴
    const postData = {
      email: email,
      password: password,
      token : token
    };
    // 로그인 정보를 서버에 보냄
    this.http.post<{token: string, expiresIn: number, userId: string, nickname: string, avatar: string}>(BACKED_URL + '/user/login', postData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;

        // 토큰 검사
        if (token) {
          const expiresInDuration = response.expiresIn;
          // 토큰 유효시간이 되면 자동 로그아웃되도록! 토큰은 메모리에만 저장되기때문에
          // reload하면 로그아웃되보리는 문제가 발생함
          this.setAuthTimer(expiresInDuration);

          this.userId = response.userId;
          this.nickname = response.nickname;
          this.avatar = response.avatar;
          console.log(this.avatar);

          this.isAuthenticated = true;

          // local storage는 브라우저가 관리하는 저장소. 거기다가 저장해줘야 reload하거나
          // 껏다가 켜도 유지가 됨
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000); // 실제 종료시간 측정
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate, this.userId, this.nickname, this.avatar);

          this.authStatusListener.next(true);
          this.router.navigate(['/']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  // 회원가입 처리
  createUser(email: string, password: string, firstName: string, lastName: string, nickName: string, gender: string, token: string) {
    const authCreateData = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      nickName: nickName,
      gender: gender,
      token: token
    };
    this.http.post(BACKED_URL + '/user/signup', authCreateData)
      .subscribe(() => {
        // 회원가입 성공적이면 메인페이지로 이동
        alert('Please authenticate with the e-mail you used to sign up.');
        this.router.navigate(['/']);
      }, error => {
        // 에러발생
        this.authStatusListener.next(false);
      });
  }

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  // 토큰 유효시간이 되면 자동으로 로그아웃 되도록..
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
      alert('Automatically logged out over time.');
    }, duration * 1000); // ms단위이기 때문에
  }

  // 로컬저장소에 저장하는 메소드
  private saveAuthData(token: string, expirationDate: Date, userId: string, nickname: string, avatar: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('avatar', avatar);
  }

  // 로그아웃시 로컬저장소에 삭제하는 메소드
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('nickname');
    localStorage.removeItem('avatar');
  }

  // 로컬저장소에 저장한걸 불러오는 메소드
  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const userId = localStorage.getItem('userId');
    const nickname = localStorage.getItem('nickname');
    const avatar = localStorage.getItem('avatar');

    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
      nickname: nickname,
      avatar: avatar
    }
  }

  // 회원정보 요청
  getUserAccount() {
    const queryParams = `?email=${this.getUserData().userId}`;
    // 로그인 정보를 서버에 보냄
    return this.http.get<{first_name: string, last_name: string, gender: string, avatar: string}>(BACKED_URL +
      '/user/search' + queryParams);
  }

  // 회원정보 수정
  setUserAccount(password: string, imagePath: File | string, nickname: string) {
    let postData: any | FormData;
      // 이미지 객체인 경우 -> form 형식 전달
    if(typeof(imagePath) === 'object') {
      postData = new FormData();
      postData.append("email", this.getAuthData().userId);
      postData.append("password", password);
      postData.append("image", imagePath);
      postData.append("nickname", nickname);
    } else { // 이미지 경로인 경우 -> json형식 전달
      postData = {email: this.getAuthData().userId ,password: password, image: imagePath, nickname: nickname};
    }
    this.http.put<{message: string, imagePath: string}>(BACKED_URL + '/user', postData)
        .subscribe(() => {
            alert('Member information has been modified successfully. Please log in again.');
            this.logout();
            this.router.navigate(['/']);
        });
  }

  // 비번 리셋을 위한 확인 이메일
  confirmUser(email: string) {
    console.log('이거 진짜 2번 보내지는거냐?');
    this.http.get<{message: string}>(BACKED_URL + '/user/confirm?email=' + email)
      .subscribe(() => {

      });
  }

  passwordReset(email: string, key: string, password: string) {
    const postData = {
      email: email,
      key: key,
      password: password,
    };
    console.log(postData);
    // 게시글 정보를 서버에 전송
    this.http.post(BACKED_URL + '/user/passwordReset', postData)
      .subscribe(() => { // 정상적으로 넘어오면
        alert('Password setting is complete. Please sign in again.');
        this.router.navigate(['/login']);
      });
  }

  getUserAuthority() {
    this.http.get<{email: string[]}>(BACKED_URL + '/user/authority')
        .subscribe((email) => {

          this.userAuthority.next(email);
          // console.log(email);
    });
}
}
