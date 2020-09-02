export interface Post {
  post_no: number; // 게시글 번호
  title: string; // 제목
  writer: string; // 작성자
  avatar: string; // 작성자 아바타
  content: string; // 내용
  curtContent: string; // 요약
  views: number; // 조회수
  likes: number; // 공감수
  catergory: string;
  post_date: Date; // 작성일자
  img_path: string; // 대표이미지 경로
  reply_cnt: number;
}
