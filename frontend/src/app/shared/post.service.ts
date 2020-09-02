import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from './post.model';
import { environment } from '../../environments/environment';
import { Reply } from '../post/reply.model';

const BACKED_URL = environment.BACKED_URL;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = []; // 개별 게시글

  private postsUpdated = new Subject<Post[]>();
  public popularPostUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private location: Location) {}

  // 상태변화리스너 생성(게시글이 업데이트되면 알려줘야...)
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  // 인기 게시글 조회
  getPopularPosts(catergory: string) {
    const queryParams = `?catergory=${catergory}`;
    this.http.get<{posts: Post[]}>(BACKED_URL + '/post/popular' + queryParams)
      .subscribe((popularData) => {
        this.popularPostUpdated.next(popularData.posts);
      });
  }

  // 개별 게시글 조회
  getEachPost(postNo: string) {
    console.log('dd');
    return this.http.get<{post: Post}>(BACKED_URL + '/post/postEach/' + postNo);
  }

  // 게시글 저장하기
  addPost(title: string, catergory: string, content: string, imagePath: string, token: string) {
    let writer = this.authService.getUserData().userNickname;
    const postData = {
      title: title,
      writer: writer,
      catergory: catergory,
      content: content,
      imagePath: imagePath,
      token : token
    };
    // 게시글 정보를 서버에 전송
    this.http.post(BACKED_URL + '/post', postData)
      .subscribe(() => { // 정상적으로 넘어오면
        alert('Saved successfully');
        this.postsUpdated.next(this.posts);
        this.location.back();
        // this.router.navigate(['/']);
      });
  }

  // 게시글 삭제
  deletePost(postNo: string) {
    const result = confirm('Are you sure you want to delete it?');
    if (result) {
      this.http.delete(BACKED_URL + '/post/' + postNo)
      .subscribe(() => {
        alert('Deleted successfully');
        this.router.navigate(['/']);
      });
    } else {
      alert('Canceled');
    }
  }

  // 게시글 수정
  updatePost(postNo: string, title: string, content: string, imagePath: string) {
    const postData = {
      title: title,
      content: content,
      imagePath: imagePath
    };
    this.http.put(BACKED_URL + '/post/' + postNo, postData)
      .subscribe(() => {
        alert('Modified successfully');
        this.router.navigate(['/']);
      });
  }

  // 댓글 저장하기
  addReply(postNo: string, nickname: string, reply: string, token: string) {
    const postData = {
      postNo: postNo,
      nickname: nickname,
      reply: reply,
      token: token
    };
    return this.http.post<{replyNo: number}>(BACKED_URL + '/reply', postData);
  }

  // 댓글 불러오기
  getReply(postNo: string, pages: number) {
    const queryParams = `?postNo=${postNo}&pages=${pages}`;
    return this.http.get<{reply: Reply[]}>(BACKED_URL + '/reply' + queryParams);
  }

  // 덧글 저장하기
  addRReply(postNo: string, nickname: string, reply: string, parent: number, token: string) {
    const postData = {
      postNo: postNo,
      nickname: nickname,
      reply: reply,
      parent: parent, // 부모 댓글번호 추가!!
      token: token
    };
    return this.http.post<{replyNo: number}>(BACKED_URL + '/reply/reply', postData);
  }

  // 덧글 조회하기
  getRReply(postNo: string, parent: number, pages: number) {
    const queryParams = `?postNo=${postNo}&parent=${parent}&pages=${pages}`;

    return this.http.get<{reply: Reply[]}>(BACKED_URL + '/reply/reply' + queryParams);
  }

  // 사용자 검색
  getSearchPost(searchInput: string, pages: number) {
    const queryParams = `?search=${searchInput}&pages=${pages}`;
    // 백엔드 통신
    return this.http.get<{posts: Post[]}>(BACKED_URL + '/post/search' + queryParams);
  }

  // 내 게시글 조회
  getMyPosts(nickname: string, pages: number) {
    const queryParams = `?nickname=${nickname}&pages=${pages}`;
    // 백엔드 통신
    return this.http.get<{posts: Post[]}>(BACKED_URL + '/post/mypost' + queryParams);
  }

  // 댓.답글 삭제
  deleteReply(postNo: string, replyNo: number, parent?: number) {
    const queryParams = `?postNo=${postNo}&replyNo=${replyNo}&parent=${parent}`;
    return this.http.delete(BACKED_URL + '/reply/reply' + queryParams);
  }
}
