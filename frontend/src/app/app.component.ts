import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { GoogleAnalyticsEventsService } from './google-analytics-events-service';
declare var ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  href: string;
  isView: boolean;
  mobileQuery: MediaQueryList;

  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    media: MediaMatcher, private authService: AuthService) {
    this.isView = true;
    this.mobileQuery = media.matchMedia('(min-width: 576px)');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
  submitEvent() { // event fired from home.component.html element (button, link, ... )
    this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }



  ngOnInit() {
    this.authService.autoAuthUser();
  }

  // 로그인, 회원가입일때는 전체화면을 위한...
  ngDoCheck() {
    this.href = this.router.url;

    if (this.href === '/login' || this.href === '/signup') {
      this.isView = false;
    } else {
      this.isView = true;
    }
  }
}
