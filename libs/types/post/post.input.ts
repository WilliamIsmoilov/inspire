import { PostStatus, PostType } from "../../enums/post.enum";
import { Direction } from "../../enums/common.enum";


export interface PostInput{
    postType: PostType
    postMedia: string[]
    postTitle: string
    postDesc?: string
    memberId?: string;
}


export interface LikedMost{
    start: number
    end: number
}

export interface PISearch{
    memberId?: string;
    postType?: PostType
    likedMost?: LikedMost
    postTitle?: string

}


export interface PostInquery{
    page: number;
    limit: number;
    sort?: string;
    direction?: Direction;
    search: PISearch 
}



export interface ALPISearch{
    postStatus?: PostStatus
    postType?: PostType
}


export interface AllPostsInquery{
    page: number 
    limit: number
    sort?: string
    direction?: Direction
    search: ALPISearch
}



export interface OrdinaryInquiry{
    page: number;
    limit: number
}