// for testing: 
export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostsStoreState {
  items: IPost[] | null;
  error: any;
  loading: boolean;
}