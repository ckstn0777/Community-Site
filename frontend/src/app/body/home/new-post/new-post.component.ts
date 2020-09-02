import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/post.model';
import { MainPostService } from '../main-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit{
  newlyPost: Post[];
  constructor(private mainPostService: MainPostService) {}

  ngOnInit() {
    this.mainPostService.getNewlyPosts()
      .subscribe((postData) => {
        this.newlyPost = postData.posts;

        this.newlyPost.forEach((post) => {
          post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
        });
      });
  }
}
