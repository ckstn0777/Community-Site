import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Nav } from '../body/nav/nav.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
  avatar: string;

  @ViewChild('snav', {static: false}) snav: MatSidenav;

  filerNav: Array<string>;
  mobileQuery: MediaQueryList;
  adminEmail : string[] = [];

  // 인증 여부 판단
  userIsAuthenticated = false;
  userData: any;

  catergory: any;

  private authoListenerSubs: Subscription;

  private _mobileQueryListener: () => void;

  private userAuthoritySub: Subscription;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService,
    private postsService: PostService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 576px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    const nav = new Nav();
    this.catergory = nav.catergory;

    // 인증여부가져옴
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.userData = this.authService.getUserData();

    // 상태변화감시
    this.authoListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userData = this.authService.getUserData();
      });


    this.userAuthoritySub = this.authService.userAuthority.subscribe(adminemail => {
        this.adminEmail = adminemail.email;

        console.log(this.adminEmail[0]);
        // console.log(this.adminEmail[0].email);

    });
  }

  onLogout() {
    this.authService.logout();
  }

  onNgSubmit(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.router.navigate(['/search'], { queryParams: { searchInput: searchForm.value.searchInput } });
  }

  sidenavClose() {
    this.snav.close();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.authoListenerSubs.unsubscribe();
  }



  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
