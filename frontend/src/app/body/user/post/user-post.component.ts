import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  pages: number;
  posts: Post[] = [];
  nickname: string;
  isLoding: boolean;
  isFinish: boolean = false;

  constructor(private authService: AuthService, private postsService: PostService) {
    this.nickname = this.authService.getUserData().userNickname;
  }

  ngOnInit() {
    this.posts = [];
    this.pages = 1;
    this.isLoding = this.isFinish = false;
    this.postsService.getMyPosts(this.nickname, this.pages)
      .subscribe((myPost) => {
        this.isLoding = false;
        this.posts = this.posts.concat(myPost.posts);

        this.posts.forEach((post) => {
          post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
        });
      });
  }

  onScrollDown() {
    this.isLoding = true;
    this.pages++;
    this.postsService.getMyPosts(this.nickname, this.pages)
      .subscribe((myPost) => { // 방송국이라고 보면 됨.
        this.isLoding = false;
        this.posts = this.posts.concat(myPost.posts);

        this.posts.forEach((post) => {
          post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
        });
      });
  }
}
