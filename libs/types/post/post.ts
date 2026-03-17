import { PostStatus, PostType } from "../../enums/post.enum";
import { Member, TotaLCounter } from "../member/member";
import { MeLiked } from "../like/like";



export interface Post{
    _id: string;
    postType: PostType;
    postStatus: PostStatus
    postTitle: string
    postViews: number
    postLikes: number
    postComments: number
    postRank: number
    postMedia: string[]
    postDesc?: string
    memberId: string
    createdAt: Date
    updatedAt: Date;
    memberData?: Member;
    meLiked?: MeLiked[]
}


export interface Posts{
    list: Post[]
    metaCounter?: TotaLCounter[]
}