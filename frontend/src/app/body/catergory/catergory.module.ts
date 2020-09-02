import { NgModule } from '@angular/core';
import { CatergoryComponent } from './catergory.component';
import { CatergoryNewlyComponent } from './new-post/catergory-newly.component';
import { CatergoryPopularComponent } from './popular-post/catergory-popular.component';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from '../body-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    CatergoryComponent,
    CatergoryNewlyComponent,
    CatergoryPopularComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    AngularMaterialModule,
    InfiniteScrollModule
  ]
})
export class CatergoryModule {}
