import { Component, Inject, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { Subscription, SubscriptionLike } from 'rxjs';
import { CatergoryService } from './catergory/catergory.service';

interface ScrollPositionRestore {
  event: Event;
  positions: { [K: number]: number };
  trigger: 'imperative' | 'popstate' | 'hashchange';
  idToRestore: number;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit, OnDestroy {
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private routerEvent: Subscription;
  private loactionEvent: SubscriptionLike;

  constructor(private router: Router, private location: Location, private catergoryService: CatergoryService) {}

  ngAfterViewInit() {
    this.loactionEvent = this.location.subscribe((ev: PopStateEvent) => { // 뒤로가기에만 호출되는듯?
      // console.log('location : ' + ev.url);
      this.lastPoppedUrl = ev.url;
      this.loactionEvent.unsubscribe();
    });

    this.routerEvent = this.router.events.subscribe((ev: any) => {
        if (ev instanceof NavigationStart) {
            // console.log('NavigationStart : ' + ev.url + ', ' + this.lastPoppedUrl);
            if (ev.url !== this.lastPoppedUrl) {
              this.catergoryService.setyScrollStack(window.scrollY);
            }
        } else if (ev instanceof NavigationEnd) {
            // console.log('NavigationEnd : ' + ev.url + ', ' + this.lastPoppedUrl);
            if (ev.url === this.lastPoppedUrl) { // 이전 url과 같으면.. 그니까 되돌아가는거면 복원
                this.lastPoppedUrl = undefined;
                // this.catergoryService.getyScrollStack();
                // console.log('복원 : ' + this.catergoryService.getyScrollStack());
                window.scrollTo(0,  this.catergoryService.getyScrollStack());
            } else { // 아니라면 탑
              window.scrollTo(0, 0);
            }
            this.routerEvent.unsubscribe();
        }
    });
  }

  ngOnInit() {

  }


  onNgSubmit(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.router.navigate(['/search'], { queryParams: { searchInput: searchForm.value.searchInput } });
  }

  ngOnDestroy() {

  }
}
