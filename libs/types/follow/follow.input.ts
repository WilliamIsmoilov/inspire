
interface FollowSearch{

    followingId?: string
    followerId?: string
}


export interface FollowInquery{
    page: number;
    limit: number;
    search: FollowSearch
}