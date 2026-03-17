import { PostStatus, PostType } from "../../enums/post.enum";


export interface PostUpdate{
    _id: string;
    postType?: PostType;
    postStatus?: PostStatus
    postTitle?: string
    postDesc?: string
}