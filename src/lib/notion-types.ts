export type NotionPage = {
  id: string;
  object?: 'page';
  created_time: string;
  last_edited_time: string;
  properties: { [propertyName: string]: NotionProperty };
};

export type NotionPropertyType = 'select' | 'created_time' | 'multi_select' | 'title';

export type NotionProperty = {
  id: string;
  type: NotionPropertyType;
  [content: string]: unknown;
};

export type NotionPropertySelect = NotionProperty & {
  type: 'select';
  select: {
    id: string;
    name: string;
    color: string;
  };
};

export type NotionPropertyCreatedTime = NotionProperty & {
  type: 'created_time';
  created_time: string;
};

export type NotionPropertyMultiSelect = NotionProperty & {
  type: 'multi_select';
  multi_select: { name: string }[];
};

type TitleObj = {
  plain_text: string;
};
export type NotionPropertyTitle = NotionProperty & {
  type: 'title';
  title: TitleObj[];
};
