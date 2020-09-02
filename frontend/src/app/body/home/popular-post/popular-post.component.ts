import { Component, OnInit } from '@angular/core';
import { MainPostService } from '../main-post.service';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-popular-post',
  templateUrl: './popular-post.component.html',
  styleUrls: ['./popular-post.component.css']
})
export class PopularPostComponent implements OnInit{
  popularPost: Post[];
  constructor(private mainPostService: MainPostService) {}

  ngOnInit() {
    this.mainPostService.getPopularPosts()
      .subscribe((postData) => {
        this.popularPost = postData.posts;

        this.popularPost.forEach((post) => {
          post.curtContent = post.content.replace(/(<([^>]+)>)/ig, "");
        });
      });
  }

}
