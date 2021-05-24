import { articles } from '$lib/api';

import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  let body;
  let status = 200;
  try {
    body = await articles.list();
  } catch (e) {
    body = e;
    status = 500;
  }
  return {
    status,
    body
  };
};
