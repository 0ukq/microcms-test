import { getBlogPosts } from '@/libs/microcms';
import Link from 'next/link';

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main>
      <h1 className="text-3xl font-bold">ブログ記事一覧</h1>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>コンテンツがありません。</p>
      )}
    </main>
  );
}
