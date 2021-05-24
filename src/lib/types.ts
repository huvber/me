export type Obj = {
  id: string;
  createdTime: Date;
  lastEditedTime: Date;
};

export type Article = Obj & {
  title?: string;
  tags?: string[];
  content?: string;
};
