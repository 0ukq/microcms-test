import BlogDetail from '@/app/blog/[id]/BlogDetail';
import { getBlogPost } from '@/libs/microcms';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ draftKey: string | undefined; contentId: string }>;
};

export default async function page(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const contentId = params.id;
  const { draftKey } = searchParams;

  const post = await getBlogPost(contentId, draftKey ? { draftKey } : undefined);

  if (!post) {
    notFound();
  }

  return <BlogDetail data={post} />;
}
