import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../shared/post.service';
import { environment } from '../../../environments/environment';
import { ParamMap, ActivatedRoute, Router, Data } from '@angular/router';
import { Nav } from 'src/app/body/nav/nav.model';
import { Post } from '../../shared/post.model';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

const BACKED_URL = environment.BACKED_URL;

@Component({
  selector: 'app-mypage-post',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy {
  content: any;
  catergory: any;
  currentCatergory: string;
  config: any;
  imagePath: Array<string>;
  realImagePath: string;

  post: Post;
  postForm: FormGroup;
  private mode = 'create';
  private postId: string;

  public recentToken: string = '';
  private singleExecutionSubscription: Subscription;

  constructor(private postService: PostService, public route: ActivatedRoute, private router: Router,
    private recaptchaV3Service: ReCaptchaV3Service) {
    const nav = new Nav();
    this.catergory = nav.catergory;

    this.currentCatergory = this.route.snapshot.queryParams.catergory;
  }

  ngOnInit() {
    // summernote 초기 속성 정의
    this.config = {
      placeholder: '',
      tabsize: 2,
      height: '500px',
      uploadImagePath: BACKED_URL + '/post/image',
      toolbar: [
          ['misc', ['codeview', 'undo', 'redo']],
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
          ['fontsize', ['fontname', 'fontsize', 'color']],
          ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
          ['insert', ['table', 'picture', 'link', 'video', 'hr']]
      ],
      fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
    };

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) { // 게시글 id가 url에 존재한다면 이것은 게시글 modify모드라는 소리임.
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        // 그 게시글에 값을 불러와서 form을 그에 맞게 초기화시켜줌.

        this.postService.getEachPost(this.postId).subscribe(postData => {
            this.post = postData.post;
            this.postForm.setValue({
              'title': this.post.title,
              'catergory': this.post.catergory,
              'content': this.post.content
            });


        });
      } else { // 그게 아니라면 게시글을 새로 생성한다는 의미.
        this.mode = 'create';
        this.postId = null;
      }
    });

    this.postForm = new FormGroup({
      title : new FormControl(null, {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]}),
      catergory : new FormControl(this.currentCatergory, {validators: [Validators.required]}),
      content: new FormControl(null, {validators: [Validators.required]})
    });
  }

  /* 게시글 업데이트 시마다 content저장
  myEventHanlder(state: any) {
    this.content = state;
  }
  */
  // 이미지 경로 얻기
  /*
  getImagePath(imagePath) {
    this.imagePath.push(imagePath);
  }
*/

  // 대표이미지 설정 지원은 안되는듯함.
  // content에서 img src 값을 뽑아내는 방법밖에는 없을듯...
  onNgSubmit() {
    if (this.postForm.invalid) {
      return;
    }

    this.singleExecutionSubscription = this.recaptchaV3Service.execute('post')
      .subscribe((token) => {
        this.recentToken = token;

        const rex = /<img[^>]+src="([^">]+)/g; // 이미지 src추출 정규식

        this.imagePath = rex.exec(this.postForm.value.content);

        if (this.imagePath === null) {
          this.realImagePath = null;
        } else {
          this.realImagePath = this.imagePath[1];
        }

        if (this.mode === 'create') {
          // console.log(this.postForm.value.title, this.postForm.value.catergory, this.postForm.value.content, this.imagePath[0]);
          this.postService.addPost(
            this.postForm.value.title,
            this.postForm.value.catergory,
            this.postForm.value.content,
            this.realImagePath,
            this.recentToken);
        } else {
          this.postService.updatePost(
            this.postId,
            this.postForm.value.title,
            this.postForm.value.content,
            this.realImagePath);
          }
      });
/*
    if (this.imagePath[0] === null) {
      console.log('???');
      // this.imagePath[0] = null;
    } else {
      // this.imagePath[0] = this.imagePath[1];
    }
  */
    //  중요한 사실이 뭔지알아? rex.exec 일회용이야...
  }

  ngOnDestroy() {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }

}
