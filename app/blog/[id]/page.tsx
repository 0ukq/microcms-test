import { client, Endpoints, getBlogPost } from '@/libs/microcms';
import BlogDetail from './BlogDetail';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const ids = await client.getAllContentIds({ endpoint: Endpoints.BLOG });

  if (ids.length === 0) {
    return [{ id: '' }];
  }
  return ids.map(id => ({ id: id }));
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const post = await getBlogPost(id);
  if (!post) {
    notFound();
  }

  return <BlogDetail data={post} />;
}
