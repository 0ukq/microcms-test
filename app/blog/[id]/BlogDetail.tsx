import { Blog } from '@/types/api';
import dayjs from 'dayjs';

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
    </main>
  );
}
