import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/shared/post.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Nav } from '../../nav/nav.model';
import { LikeHateService } from 'src/app/shared/like-hate.service';
import { CatergoryService } from '../catergory.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catergory-newly',
  templateUrl: './catergory-newly.component.html',
  styleUrls: ['./catergory-newly.component.css']
})
export class CatergoryNewlyComponent implements OnInit, OnDestroy {
  pages: number;
  isLoding: boolean;
  isFinish: boolean = false;
  votes: number;
  voteUpColor = 'black';
  voteDownColor = 'black';

  catergory: any;
  catergoryName: string;

  posts: Post[] = [];
  private scrollDownEvent: Subscription;
  private postsChangedEvent: Subscription;

  constructor(private postsService: PostService, private route: ActivatedRoute,
    private authService: AuthService, private likeHateService: LikeHateService, private catergoryService: CatergoryService) { }

  ngOnInit() {
    const nav = new Nav();
    this.pages = 1;

    this.postsChangedEvent = this.catergoryService.postsChanged.subscribe((postData) => {
      this.isLoding = false;

      if (postData.change === true) { // 처음부터 리셋
        this.pages = postData.pages;
        this.posts = postData.posts;
        this.isFinish = false;

        window.scrollTo(0, 0);
      } else { // 그전꺼 불러오기
        this.pages = postData.pages;
        this.posts = postData.posts;

        if (postData.finish === true) {
          this.isFinish = true;
        }
      }
    });

    // url이 바뀔때마다 처리 -> 카테고리 정보를 얻어옴
    this.route.params.subscribe((params: Params) => {
      this.catergoryName = params.postId; // 현경로

      this.catergory = nav.catergory.filter((catergory) => {
        return catergory.fileNav === this.catergoryName;
      });

      this.isLoding = true;
      this.isFinish = false;

      // 해당 카테고리에 맞는 포스트를 요청
      this.catergoryService.getPosts(this.catergoryName, this.pages, params.postId);
    });

    // scrollDownEvnet발생시...
    this.scrollDownEvent = this.catergoryService.onScrollDownEvent.subscribe(() => {
      this.isLoding = true;
      this.pages++;

      this.catergoryService.getPosts(this.catergoryName, this.pages);
    });


  }

  // 공감수 +1 증가
  increase(postNo: string) {
    // 공감수는 그냥 누르자마다 표면상 1증가시키면 되는거고,
    // 뒷처리는 해줘야지. (로그인 여부도 확인하고))
    if (!this.authService.getIsAuth()) {
      alert('login ahead!!');
      return;
    }
    // 내가 눌렀는지 여부도 판단해야하는데...? 하하하하하...ㅡㅡ

    this.posts.forEach(post => {
      if (post.post_no === Number(postNo)) {
        post.likes++;
      }
    });
    this.voteUpColor = 'lightblue';
    this.voteDownColor = 'black';

    this.likeHateService.setLikeCount(postNo, this.authService.getUserData().userNickname, 1);
  }
  // 공감수 -1 감소
  decrease(postNo: string) {
    if (!this.authService.getIsAuth()) {
      alert('login ahead!!');
      return;
    }
    this.posts.forEach(post => {
      if (post.post_no === Number(postNo)) {
        post.likes--;
      }
    });
    this.voteUpColor = 'black';
    this.voteDownColor = 'lightblue';
    this.likeHateService.setLikeCount(postNo, this.authService.getUserData().userNickname, -1);
  }

  ngOnDestroy() {
    this.scrollDownEvent.unsubscribe();
    this.postsChangedEvent.unsubscribe();
  }
}
