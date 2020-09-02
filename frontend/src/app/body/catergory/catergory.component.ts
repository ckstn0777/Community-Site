import { Component } from '@angular/core';
import { CatergoryService } from './catergory.service';

@Component({
  selector: 'app-catergory',
  templateUrl: './catergory.component.html',
  styleUrls: ['./catergory.component.css']
})
export class CatergoryComponent {
  constructor(private catergoryService: CatergoryService) {

  }
  // 스크롤 복원과 무한 스크롤간의 문제 해결법...
  // 1. 네이버나 이런 단순 사이트 같은 경우에는 스크롤 복원만 고려해주면 이전 스크롤 복원하는 거는 쉬움.
  // 인스타그램 경우에는 이미지 위주라서... 이미지는 캐시에 저장하고, 스크롤 이동시에는 스크롤 주위에 약간의 데이터 태그만 보여줌.
  // 위, 아래는 마진, 패딩으로 채움. 실제 데이터 태그는 부분적이고 유동적임.
  // 신기한건... 이런 데이터들은 어디에 저장되는 걸까??
  // 스크롤 위치는 session에 페이지 마다 저장됨. 이걸 이용해서 다시 페이지 접속시 해당페이지로 이동할 수 있는 거임.
  // 서버와 통신에서 불러오는 거는 처음 불러올때만.. 이후에는 안 불러오던데? 서버와 통신을 안함.
  onScrollDown() {
    this.catergoryService.onScrollDownEvent.next();
  }
}
