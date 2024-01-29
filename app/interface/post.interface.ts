interface IColumnHeader {
  Header: string;
  accessor: string;
}

type Columns = IColumnHeader[];

export const PostColumnInterFace: Columns = [
  {
    Header: "TITLE",
    accessor: "title",
  },
  {
    Header: "BODY",
    accessor: "body",
  },
];

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


