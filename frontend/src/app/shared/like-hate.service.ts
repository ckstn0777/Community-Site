import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LikeHate } from './LikeHate.model';
import { Subject } from 'rxjs';

const BACKED_URL = environment.BACKED_URL;

@Injectable({
  providedIn: 'root'
})
export class LikeHateService {
  private likeHateUpdated = new Subject<LikeHate>();


  constructor(private http: HttpClient) {}

  getlikeHateUpdatedUpdateListener() {
    return this.likeHateUpdated.asObservable();
  }


  // 공감 비공감 처리하기
  setLikeCount(postNo: string, nickname: string, like: number) {
    const postData = {
      postNo: postNo,
      nickname: nickname,
      like: like
    };
    this.http.post(BACKED_URL + '/post/like', postData)
      .subscribe(() => {
        this.getLikeHateCount(postNo, nickname);
      });
  }

  // 공감 비공감 불러오기
  getLikeHateCount(postNo: string, nickname: string) {
    const queryParams = `?postNo=${postNo}&nickname=${nickname}`;
    this.http.get<{likeHate: LikeHate}>(BACKED_URL + '/post/like' + queryParams)
      .subscribe((likeData) => {
        this.likeHateUpdated.next(likeData.likeHate);
      });
  }
}
