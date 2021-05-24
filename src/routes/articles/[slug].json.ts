import { articles } from '$lib/api';

import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
  const { slug } = params;
  let body;
  let status = 200;
  try {
    if (slug) {
      body = { articles: await articles.get(slug) };
    } else {
      throw new Error('Missing slug');
    }
  } catch (e) {
    body = e;
    status = 500;
  }
  return {
    status,
    body
  };
};
