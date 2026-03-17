import { CommentGroup, CommentStatus } from '../../enums/comment.enum';
import { Member, TotaLCounter } from '../member/member';


export interface Comment {
	_id: string;
	commentStatus: CommentStatus;
	commentGroup: CommentGroup;
	commentContent: string;
	commentRefId: string;
	memberId: string;
	createdAt: Date;
	updatedAt: Date;
	commentLikes: number
	/** from aggregation **/
	memberData?: Member;
}


export interface Comments {
	list: Comment[];
	metaCounter?: TotaLCounter[];
}
