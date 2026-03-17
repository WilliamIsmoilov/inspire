import { MemberStatus, MemberType, MemberAuthType } from '../../enums/member.enum';
import { MeLiked } from "../like/like";
import { MeFollowed } from "../follow/follow";


export interface Member{
    _id: string;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberAuthType: MemberAuthType;
    memberPhone: string
    memberNick: string
    memberPassword?: string
    memberFullName?: string
    memberImage: string
    memberDesc?: string
    memberPosts: number
    memberArticles: number
    memberFollowers: number
    memberFollowings: number
    memberPoints: number
    memberLikes: number
    memberViews: number
    memberComments: number
    memberRank: number
    memberWarnings: number
    memberBlocks: number
    deletedAt?: Date
    createdAt: Date
    memberStories: number
    accessToken?: string

    /** like **/
    //from aggregation
    meLiked?: MeLiked[];
    meFollowed?: MeFollowed[];

}


export interface TotaLCounter{
    total?: number
}

export interface Members{
    list: Member[];
    metaCounter?: TotaLCounter[]
}