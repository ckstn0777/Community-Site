// 클라이언트 단에서 auth.guard.ts로 잘못된 접근을 막을 수는 있지만, 뚫릴수도 있음
// 따라서 서버에다가 토큰을 보내서 토큰 검사를 해 실제 글을 쓸 수 있는 기능을 제한해둠.
// forward proxy 기능도 동일.
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', "Bearer " + authToken)
    });
    // 헤더에 토큰을 추가해서 요청
    return next.handle(authRequest);
  }
}
