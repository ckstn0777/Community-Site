import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pages: number;
  searchInput: string;
  posts: Post[] = [];
  isLoding: boolean;
  isFinish: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostService) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.posts = [];
      this.pages = 1;
      this.isLoding = this.isFinish = false;

      this.searchInput = params['searchInput'];

      this.postsService.getSearchPost(this.searchInput, this.pages)
      .subscribe((searchPost) => { // 방송국이라고 보면 됨.
        this.isLoding = false;
        this.posts = this.posts.concat(searchPost.posts);

        this.posts.forEach((post) => {
          post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
/*
          const rgxp = new RegExp(this.searchInput, 'g');
          const repl = '<span class="marker">' + this.searchInput + '</span>';
          post.title = post.title.replace(this.searchInput, repl);
*/
          post.title = post.title.replace(new RegExp(this.searchInput, "gi"), match => {
            return '<span class="marker">' + match + '</span>';
          });
          post.curtContent = post.curtContent.replace(new RegExp(this.searchInput, "gi"), match => {
            return '<span class="marker">' + match + '</span>';
          });
        });

      });
    });
  }

  onScrollDown() {
    this.isLoding = true;
    this.pages++;
    this.postsService.getSearchPost(this.searchInput, this.pages)
      .subscribe((searchPost) => { // 방송국이라고 보면 됨.
        if (searchPost.posts.length === 0) {
          this.isFinish = true;
        }
        this.isLoding = false;
        this.posts = this.posts.concat(searchPost.posts);

        this.posts.forEach((post) => {
          post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
/*
          const rgxp = new RegExp(this.searchInput, 'g');
          const repl = '<span class="marker">' + this.searchInput + '</span>';
          post.title = post.title.replace(this.searchInput, repl);
*/
          post.title = post.title.replace(new RegExp(this.searchInput, "gi"), match => {
            return '<span class="marker">' + match + '</span>';
          });
          post.curtContent = post.curtContent.replace(new RegExp(this.searchInput, "gi"), match => {
            return '<span class="marker">' + match + '</span>';
          });
        });
      });
  }
}
