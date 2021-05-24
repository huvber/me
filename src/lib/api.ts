import { PageToArticle } from './notion-parser';
import type { Article } from './types';

const ENDPOINT = `https://api.notion.com/v1`;

const NOTION_TABLE = `912c492f934d4b9ea215de1c1f74b041`;

const NOTION_API_KEY = `secret_Nz002hrwR3OCZTBWKPwbtrcOWtB553beVQ5oSIjiSL0`;

const request = async (
  resource: string,
  options: Omit<RequestInit, 'body'> & { body?: unknown }
) => {
  const res = await fetch(`${ENDPOINT}/${resource}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2021-05-13',
      'Content-Type': 'application/json',
      ...(options.headers ? options.headers : {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  if (res.status == 200) {
    return await res.json();
  }
  throw new Error(await res.text());
};

export const articles = {
  list: async (): Promise<Article[]> => {
    const response = await request(`databases/${NOTION_TABLE}/query`, {
      method: 'POST',
      body: {}
    });
    if (response) return response.results.map(PageToArticle);
  },
  get: async (id: string): Promise<any> => ({})
};
