import { Member, TotaLCounter } from "../member/member";
import { BoardArticleCategory, BoardArticleStatus } from "../../enums/board-article.enum";
import { MeLiked } from "../like/like";


export interface BoardArticle {
	_id: string;
	articleCategory: BoardArticleCategory;
	articleStatus: BoardArticleStatus;
	articleTitle: string;
	articleContent: string;
	articleImage?: string;
	articleViews: number;
	articleLikes: number;
	articleComments: number;
	memberId: string;
	createdAt: Date;
	updatedAt: Date;
	/** from aggregation **/
	memberData?: Member;
	/** likes from aggregation */
	meLiked?: MeLiked[]
}



export interface BoardArticles {
	list: BoardArticle[];
	metaCounter?: TotaLCounter[];
}

