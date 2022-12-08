export interface IPostForm {
    name: string;
    description: string;
}

export interface Post extends IPostForm {
    id: number;
}