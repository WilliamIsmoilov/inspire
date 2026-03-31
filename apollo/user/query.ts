import { gql } from "@apollo/client";

export const GET_POSTS = gql`
query GetPosts($input: PostInquery!) {
    getPosts(input: $input) {
        list {
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
        metaCounter {
            total
        }
    }
}
`;