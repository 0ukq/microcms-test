import { client, Endpoints, getBlogPost } from '@/libs/microcms';
import BlogDetail from './BlogDetail';

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

  return <BlogDetail data={post} />;
}
