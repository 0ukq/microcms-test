import { Blog } from '@/types/api';
import dayjs from 'dayjs';
import Link from 'next/link';

type BlogDetailProps = {
  data: Blog;
};

export default function BlogDetail({ data }: BlogDetailProps) {
  const formattedDate = dayjs(data.publishedAt).format('YY.MM.DD');

  return (
    <main>
      <h1>{data.title}</h1>
      <div>{formattedDate}</div>
      <div>カテゴリー：{data.category && data.category.name}</div>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
      <div>
        <Link href="/">TOPに戻る</Link>
      </div>
    </main>
  );
}
