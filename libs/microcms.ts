import { Blog, BlogPosts } from '@/types/api';
import { createClient, MicroCMSQueries } from 'microcms-js-sdk';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  retry: true,
});

export enum Endpoints {
  BLOG = 'blog',
}

export const getBlogPosts = async (queries?: MicroCMSQueries): Promise<BlogPosts[]> => {
  const data = await client.get({
    endpoint: Endpoints.BLOG,
    queries: {
      limit: 99,
      ...queries,
    },
  });
  return data.contents;
};

export const getBlogPost = async (id: string): Promise<Blog> => {
  const data = await client.get({
    endpoint: `${Endpoints.BLOG}/${id}`,
  });
  return data;
};
