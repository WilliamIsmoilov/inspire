import { LikeGroup } from '../../enums/like.enum';


export interface MeLiked {
	memberId: string;
	likeRefId: string;
	myFavourite: boolean;
}

export interface Like {
	_id: string;
	likeGroup: LikeGroup;
	likeRefId: string;
	memberId: string;
	createdAt: Date;
	updatedAt: Date;
}



