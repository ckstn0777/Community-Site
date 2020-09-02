import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { Post } from '../../shared/post.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { Reply } from '../reply.model';
import { LikeHateService } from 'src/app/shared/like-hate.service';
import { LikeHate } from 'src/app/shared/LikeHate.model';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  private likeHateSub: Subscription;
  likeHate: LikeHate;
  isLike: Boolean = false;
  isHate: Boolean = false;
  postNo: string;
  post: Post;
  replys: Reply[]; // 댓글
  rreplys: Reply[]; // 덧글
  userNickname: string;
  pages: number;
  addButton: Boolean;

  public recentToken: string = '';
  private singleExecutionSubscription: Subscription;

  private replySub: Subscription;
  private rreplySub: Subscription;

  constructor(private router: Router, private postService: PostService,
              private authService: AuthService, private likeHateService: LikeHateService, private recaptchaV3Service: ReCaptchaV3Service) {}

  ngOnInit() {
    this.pages = 1;
    this.addButton = false;

    this.userNickname = this.authService.getUserData().userNickname;
    this.postNo = this.router.url.split('/')[3];

    this.postService.getEachPost(this.postNo)
    .subscribe((postData) => {
      this.post = postData.post;

      if (this.post.reply_cnt > this.pages * 10) {
        this.addButton = true;
      }
    });

    this.likeHateService.getLikeHateCount(this.postNo, this.userNickname);
    this.likeHateSub = this.likeHateService.getlikeHateUpdatedUpdateListener()
      .subscribe((likeHate) => {
        this.likeHate = likeHate;
        if (this.userNickname !== undefined) {
          if (this.likeHate.mylike === 'Y') {
            this.isLike = true;
          } else {
            this.isLike = false;
          }
          if (this.likeHate.myhate === 'Y') {
            this.isHate = true;
          } else {
            this.isHate = false;
          }
        }
      });

    // 초기 댓글 호출 시.
    this.replys = [];
    this.postService.getReply(this.postNo, this.pages)
      .pipe(map((replyData) => {
        return replyData.reply.map(reply => {
          return {
            post_no: reply.post_no,
            reply_no: reply.reply_no,
            writer: reply.writer,
            content: reply.content,
            reply_date: reply.reply_date,
            count: reply.count - 1,
            reply_view: false
          };
        });
    }))
    .subscribe((transformedReply) => { // 정상적으로 넘어오면
      this.replys = this.replys.concat(transformedReply);

      if (this.post.reply_cnt > this.pages * 10) {
        this.addButton = true;
      } else {
        this.addButton = false;
      }
    });
  }

  // 댓글 저장
  onNgReplySubmit(replyForm: NgForm) {
    // 로그인하지 않은 사용자는 댓글 못씀
    if (!this.authService.getIsAuth()) {
      alert('login ahead!');
      return;
    }
    // 댓글에 아무것도 안쓰면 저장못함
    if (replyForm.invalid) {
      return;
    }

    const content = replyForm.value.reply;
    this.singleExecutionSubscription = this.recaptchaV3Service.execute('reply')
      .subscribe((token) => {
        this.recentToken = token;

        this.postService.addReply(this.postNo, this.authService.getUserData().userNickname,
        content, this.recentToken).subscribe((replyNo) => { // 정상적으로 넘어오면
          this.replys.push({
            post_no: this.post.post_no,
            reply_no: replyNo.replyNo,
            writer: this.userNickname,
            content: content,
            reply_date: new Date(),
            count: 0,
            reply_view: false
          });
        });
        replyForm.reset();
      });


  }

  // 덧글 저장
  onNgRReplySubmit(replyForm: NgForm, replyParentNo: number) {
    if (!this.authService.getIsAuth()) {
      alert('login ahead!');
      return; // 로그인하지 않은 사용자는 댓글 못씀
    }
    if (replyForm.invalid) {
      return; // 댓글에 아무것도 안쓰면 저장못함
    }
    const content = replyForm.value.rreply;

    this.singleExecutionSubscription = this.recaptchaV3Service.execute('reply')
      .subscribe((token) => {
        this.recentToken = token;

        this.postService.addRReply(this.postNo, this.authService.getUserData().userNickname,
        replyForm.value.rreply, replyParentNo, this.recentToken)
        .subscribe((replyNo) => { // 정상적으로 넘어오면
          this.rreplys.push({
            post_no: this.post.post_no,
            reply_no: replyNo.replyNo,
            writer: this.userNickname,
            content: content,
            reply_date: new Date(),
            count: 0,
            reply_view: false
          });
        });
      replyForm.reset();
    });
  }

  // 덧글 보기 선택
  selectItem(replyNo: number) {
    this.replys.forEach((replys) => {
      if (replys.reply_no === replyNo) {
        replys.reply_view = !replys.reply_view;
       }

      if (replys.reply_view === true) {
        if (replys.reply_no === replyNo) {

        }
        else {
          replys.reply_view = false;
        }
      }
    });
    this.rreplySub = this.postService.getRReply(this.postNo, replyNo, 1)
      .subscribe((replys) => {
        this.rreplys = replys.reply;
      });
  }
  // 더보기 버튼 클릭시
  onloadReply() {
    this.pages++;
    this.postService.getReply(this.postNo, this.pages)
      .pipe(map((replyData) => {
        return replyData.reply.map(reply => {
          return {
            post_no: reply.post_no,
            reply_no: reply.reply_no,
            writer: reply.writer,
            content: reply.content,
            reply_date: reply.reply_date,
            count: reply.count - 1,
            reply_view: false
          };
        });
    }))
    .subscribe((transformedReply) => { // 정상적으로 넘어오면
      this.replys = this.replys.concat(transformedReply);

      if (this.post.reply_cnt > this.pages * 10) {
        this.addButton = true;
      } else {
        this.addButton = false;
      }
    });
  }

  // 게시글 삭제
  onDelete(postNo) {
    this.postService.deletePost(postNo);
  }

  // 좋아요, 싫어요
  onVote(likeHate: number) {
    this.likeHateService.setLikeCount(this.postNo, this.userNickname, likeHate);
  }

  // 댓, 답글 삭제
  onReplyDelete(idx: number, replyNo: number, parent?: number) {
    const result = confirm('Are you sure you want to delete the comments?');
    if (result) {
      this.postService.deleteReply(this.postNo, replyNo, parent).subscribe(() => {
        if (!parent) { // 댓글일때
          this.replys.splice(idx , 1);
        } else { // 답글일때
          this.rreplys.splice(idx, 1);
        }
      });
    } else {

    }
  }

  ngOnDestroy() {
    this.likeHateSub.unsubscribe();

    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }

  }
}
