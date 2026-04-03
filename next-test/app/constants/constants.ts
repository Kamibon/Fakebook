export const url = "https://jsonplaceholder.typicode.com/";

export type User = {
  id: Number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: Number;
      ng: Number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type Post = {
  userId: Number;
  id: Number;
  title: string;
  body: string;
};

export type Photo = {
  albumId: Number;
  id: Number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
