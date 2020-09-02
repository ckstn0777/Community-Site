import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Nav } from '../../nav/nav.model';

@Component({
  selector: 'app-catergory-popular',
  templateUrl: './catergory-popular.component.html',
  styleUrls: ['./catergory-popular.component.css']
})
export class CatergoryPopularComponent implements OnInit, OnDestroy {
  private popularPostSub: Subscription;
  catergoryName: string;
  catergory: any;
  popularPost: Post[];
  isAuth: boolean;

  constructor(private route: ActivatedRoute, private postService: PostService, private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.getIsAuth();
    const nav = new Nav();

    // 현재 카테고리를 url를 통해 알아내는 코드
    this.route.params.subscribe((param: Params) => {
      this.catergoryName = param.postId;
      this.catergory = nav.catergory.filter((catergory) => {
        return catergory.fileNav === this.catergoryName;
      });

      this.postService.getPopularPosts(this.catergoryName); // 알아낸 카테고리를 통해 이 카테고리에 인기글을 요청
    });

    // 이 카테고리에 인기글을 요청한 결과
    this.popularPostSub = this.postService.popularPostUpdated
      .subscribe((posts) => {
        this.popularPost = posts;
        this.popularPost.forEach((post) => {
          post.content = post.content.replace(/(<([^>]+)>)/ig, "");
        });
      });
  }

  ngOnDestroy() {
    this.popularPostSub.unsubscribe();
  }
}

