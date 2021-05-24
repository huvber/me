import type {
  NotionPage,
  NotionProperty,
  NotionPropertyCreatedTime,
  NotionPropertyMultiSelect,
  NotionPropertySelect,
  NotionPropertyTitle
} from './notion-types';
import type { Article } from './types';

export const PageToArticle = (page: NotionPage): Article => {
  const result: Article = {
    id: page.id,
    createdTime: new Date(page.created_time),
    lastEditedTime: new Date(page.last_edited_time)
  };
  for (const property in page.properties) {
    result[property] = parse(page.properties[property]);
  }
  return result;
};

const parse = (property: NotionProperty) => {
  switch (property.type) {
    case 'select':
      return (property as NotionPropertySelect).select.name;
    case 'created_time':
      return new Date((property as NotionPropertyCreatedTime).created_time);
    case 'multi_select':
      return (property as NotionPropertyMultiSelect).multi_select.map(({ name }) => name);
    case 'title':
      return (property as NotionPropertyTitle).title?.[0]?.plain_text;
  }
};
