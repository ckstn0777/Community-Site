import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/shared/post.model';

const BACKED_URL = environment.BACKED_URL;

@Injectable({
  providedIn: 'root'
})
export class MainPostService {

  constructor(private http: HttpClient) {}

  // 인기 게시글 조회
  getPopularPosts() {
    return this.http.get<{posts: Post[]}>(BACKED_URL + '/post/main-popular');
  }

  // 최신 게시글 조회
  getNewlyPosts() {
    return this.http.get<{posts: Post[]}>(BACKED_URL + '/post/main-newly');
  }
}
