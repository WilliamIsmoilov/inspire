import { Member } from "../member/member";
import { MediaType } from "../../enums/Media.enum";
import { MeLiked } from "../like/like";

export interface Story{
    _id: string;
    story: string
    expiresAt?: Date 
    storyLikes: number
    storyComments: number
    storyViews: number
    storyDesc: string
    memberData?: Member
    memberId: string
    accessToken?: string
    meLiked?: MeLiked[];
}



export interface StoryInput{
    story: string
    storyDesc?: string
    memberId?: string;
}