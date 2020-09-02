import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { NavComponent } from './nav/nav.component';
import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserComponent } from './user/user.component';
import { UserSettingComponent } from './user/setting/user-setting.component';
import { UserPostComponent } from './user/post/user-post.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { CatergoryModule } from './catergory/catergory.module';

@NgModule({
  declarations: [
    BodyComponent,
    NavComponent,
    UserComponent,
    UserSettingComponent,
    UserPostComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    CatergoryModule,
    AngularMaterialModule,
    BodyRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BodyModule {}
