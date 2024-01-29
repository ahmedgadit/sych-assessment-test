import { Post } from "../interface/post.interface";

export const getPosts = async (): Promise<Post[]> => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const items = (await resp.json()) as Post[];
  const result = items.map((x)=> { return {
      ...x, 
      'title':x.title.length > 40 ? x.title.substring(0,40) +'....' : x.title,
      'body': x.body.length > 40 ? x.body.substring(0,150) +'....' : x.body
    }
  });
  return [...result];
};
