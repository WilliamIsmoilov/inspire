import { MemberStatus, MemberType } from "../../enums/member.enum";


export interface MemberUpdate {
    _id: string;
    memberType?:  MemberType;
    memberStatus?: MemberStatus;
    memberPhone?: string;
    memberNick?: string
    memberPassword?: string;
    memberFullName?: string;
    memberImage?: string
    memberDesc?: string
    deleteAt?: Date;
}