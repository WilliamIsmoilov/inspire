import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation Login($input: LoginInput!) {
		login(input: $input) {
			_id
			memberType
			memberStatus
			memberAuthType
			memberPhone
			memberNick
			memberFullName
			memberImage
			memberAddress
			memberDesc
			memberWarnings
			memberBlocks
			memberProperties
			memberRank
			memberPoints
			memberLikes
			memberViews
			deletedAt
			createdAt
			updatedAt
			accessToken
		}
	}
`;


export const SIGN_UP = gql`
	mutation Signup($input: MemberInput!) {
		signup(input: $input) {
			_id
			memberType
			memberStatus
			memberAuthType
			memberPhone
			memberNick
			memberFullName
			memberImage
			memberAddress
			memberDesc
			memberWarnings
			memberBlocks
			memberProperties
			memberRank
			memberArticles
			memberPoints
			memberLikes
			memberViews
			deletedAt
			createdAt
			updatedAt
			accessToken
		}
	}
`;

export  const LIKE_POST = gql`
mutation LikeTargetPost($input: String!) {
    likeTargetPost(postId: $input) {
        _id
        postType
        postStatus
        postTitle
        postViews
        postLikes
        postComments
        postRank
        postMedia
        postDesc
        memberId
        createdAt
        updatedAt
        accessToken
        memberData {
            _id
            memberType
            memberStatus
            memberAuthType
            memberPhone
            memberNick
            memberFullName
            memberImage
            memberDesc
            memberPosts
            memberArticles
            memberFollowers
            memberFollowings
            memberPoints
            memberLikes
            memberViews
            memberComments
            memberRank
            memberWarnings
            memberBlocks
            deletedAt
            createdAt
            memberStories
            accessToken
        }
        meLiked {
            memberId
            likeRefId
            myFavourite
        }
    }
}
`; 