import { Subject } from 'rxjs';
import { Post } from 'src/app/shared/post.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const BACKED_URL = environment.BACKED_URL;

@Injectable({
  providedIn: 'root'
})
export class CatergoryService {
  onScrollDownEvent = new Subject<void>();
  postsChanged = new Subject<{change: boolean, posts: Post[], pages: number, finish: boolean}>();
  private finish: boolean;
  private pages: number;
  private router: string;
  private posts: Post[] = [];
  private yScrollStack: number[] = [];

  constructor(private http: HttpClient) {}

  // 스크롤 저장
  setyScrollStack(yScroll: number) {
    console.log('스크롤 저장 : ' + yScroll);
    this.yScrollStack.push(yScroll);
  }

  // 스크롤 불러오기
  getyScrollStack() {
    console.log('스크롤 호출 : ');
    return this.yScrollStack.pop();
  }

  // 게시글 리스트 불러오기(5개씩)
  getPosts(catergory: string, pages: number, router?: string) {
    if (this.router === router && router !== undefined) { // 라우터에 변화가 없다면 기존 posts를 전달
        this.postsChanged.next({
          change: false,
          posts: this.posts.slice(),
          pages: this.pages,
          finish: this.finish
        });
    }
    else if (router === undefined) { // 단순히 스크롤 다운에 경우
      this.pages = pages;
      const queryParams = `?catergory=${catergory}&pages=${this.pages}`;

      this.http.get<{posts: Post[]}>(BACKED_URL + '/post' + queryParams)
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            post_no: post.post_no,
            title: post.title,
            writer: post.writer,
            avatar: post.avatar,
            content: post.content,
            curtContent: post.content.replace(/(<([^>]+)>)/ig, ""),
            likes: post.likes,
            views: post.views,
            catergory: post.catergory,
            post_date: post.post_date,
            img_path : post.img_path,
            reply_cnt: null
          };
        });
      })).subscribe((transformedPosts) => {
        if (transformedPosts.length === 0) {
          this.finish = true;
        }
        this.posts.push(...transformedPosts);
        this.postsChanged.next({
            change: false,
            posts: this.posts.slice(),
            pages: this.pages,
            finish: this.finish
        });
        // return true;
      });
    }
    else if (this.router !== router) { // 카테고리가 바뀐경우
      this.posts = [];
      this.pages = 1;
      this.finish = false;
      this.router = router;

      const queryParams = `?catergory=${catergory}&pages=${this.pages}`;

      this.http.get<{posts: Post[]}>(BACKED_URL + '/post' + queryParams)
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            post_no: post.post_no,
            title: post.title,
            writer: post.writer,
            avatar: post.avatar,
            content: post.content,
            curtContent: post.content.replace(/(<([^>]+)>)/ig, ""),
            likes: post.likes,
            views: post.views,
            catergory: post.catergory,
            post_date: post.post_date,
            img_path : post.img_path,
            reply_cnt: null
          };
        });
      })).subscribe((transformedPosts) => {
        this.posts.push(...transformedPosts);
        this.postsChanged.next({
            change: true,
            posts: this.posts.slice(),
            pages: this.pages,
            finish: this.finish
        });
        // return true;
      });
    }
  }
}
