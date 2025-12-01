import { client, Endpoints, getBlogPost } from '@/libs/microcms';
import dayjs from 'dayjs';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const ids = await client.getAllContentIds({ endpoint: Endpoints.BLOG });
  return ids.map(id => ({ id: id }));
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post = await getBlogPost(id);

  const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

  return (
    <main>
      <h1>{post.title}</h1>
      <div>{formattedDate}</div>
      <div>カテゴリー：{post.category && post.category.name}</div>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
