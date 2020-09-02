import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PopularPostComponent } from './popular-post/popular-post.component';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from '../body-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NewPostComponent,
    PopularPostComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class HomeModule {}
