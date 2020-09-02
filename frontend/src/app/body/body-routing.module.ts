import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatergoryComponent } from './catergory/catergory.component';
import { BodyComponent } from './body.component';
import { PostListComponent } from '../post/post-list/post-list.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'catergory',
    component: BodyComponent,
    children: [
      { path: ':postId', component: CatergoryComponent }
    ]
  },
  {
    path: 'catergory',
    component: BodyComponent,
    children: [
      { path: ':postId/:post_no', component: PostListComponent }
    ], // 라우터를 이용해 동적 데이터 전달
    // runGuardsAndResolvers: 'paramsChange'
  },
  {
    path: 'user',
    component: BodyComponent,
    children: [
      { path: ':kinds', component: UserComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'search',
    component: BodyComponent,
    children: [
      { path: '', component: SearchComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule {

}
