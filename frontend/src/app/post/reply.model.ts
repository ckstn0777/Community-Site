export interface Reply {
  post_no: number; // 게시글 번호
  reply_no: number;
  writer: string;
  content: string;
  reply_date: Date;
  count: number;
  reply_view: boolean;
}
