import { useRouter } from "next/router"
import useDeviceDetect from "../../hooks/useDeviceDetect"
import { ChangeEvent, useEffect, useState } from "react"
import { PostInquery } from "../../types/post/post.input"
import { Post } from "../../types/post/post"
import { Direction } from "../../enums/common.enum"
import { Box, Button, Menu, MenuItem, Stack } from "@mui/material"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AllPostCard from "./AllPostCard"
import { any } from "three/src/nodes/math/MathNode"
import { Member } from '../../types/member/member';
import { useQuery } from "@apollo/client"
import {  GET_POSTS } from "../../../apollo/user/query"
import { T } from "../../types/common"

const defaultInput = {
    sort: 'createdAt',
    direction: 'DESC',
    search:{
        
    }
}

interface AllPostProps{
    initialInput: PostInquery
}


const AllPost = ({initialInput = defaultInput, ...props}: any) => {
    const device = useDeviceDetect()
    const router = useRouter()
    const [searchFilter, setSearchFilter] = useState<PostInquery>(
        router?.query?.input ? JSON.parse(router?.query?.input as string) : initialInput,
    );
    const [posts, setPosts] = useState<Post[]>([])
    const [total, setTotal] = useState<number>(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [sortingOpen, setSortingOpen] = useState(false);
    const [filterSortName, setFilterSortName] = useState('New');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [member, setMember] = useState<Member[]>([])

    const {
        loading: getPostsLoading,
        data: getPostsData,
        error: getPostsError,
        refetch: getPostsRefetch
    } = useQuery(GET_POSTS, {
        fetchPolicy: 'network-only',
        variables: {input: searchFilter},
        notifyOnNetworkStatusChange: true,
        onCompleted: (data: T) => {
            setPosts(data?.getPosts.list)
        }
    })

    /** LIFE CYCLE */
    useEffect(() => {
        if(router.query.input){
            const inputObj = JSON.parse(router?.query?.input as string)
            setSearchFilter(inputObj)
        }
    }, [router])


    useEffect(() => {
        console.log('searchFilter:', searchFilter)
    }, [searchFilter])

    const handlePaginationChange = async (event: ChangeEvent<unknown>, value: number) => {
        searchFilter.page = value;
        await router.push(
            `/?input=${JSON.stringify(searchFilter)}`,
            `/?input=${JSON.stringify(searchFilter)}`,
            {
                scroll: false
            }
        );
        setCurrentPage(value)
    }

    const sortingClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
        setSortingOpen(true)
    }

    const sortingCloseHandler = (e: React.MouseEvent<HTMLElement>) => {
        setSortingOpen(false)
        setAnchorEl(null)
    }

    const sortingHandler = (e: React.MouseEvent<HTMLElement>) => {
        switch (e.currentTarget.id){
            case 'new':
                setSearchFilter({...searchFilter, sort: 'createdAt', direction: Direction.DESC})
                setFilterSortName('New')
                break

            case 'view':
                setSearchFilter({...searchFilter, sort: 'postViews', direction: Direction.DESC})
                setFilterSortName('View')
                break

            case 'like':
                setSearchFilter({...searchFilter, sort:'postLikes', direction: Direction.DESC})
                setFilterSortName('Like')
        }
        setSortingOpen(false)
        setAnchorEl(null)
    }

    if(device === 'mobile'){
        return <h1>Post Mobile</h1>
    }else{
        return (
            <div id="post-list-page" style={{position: 'relative'}}>
                <div className="container">
                    <Box component={'div'} className="right">
                        <span>Sort by</span>
                        <div>
                            <Button onClick={sortingClickHandler} endIcon={<KeyboardArrowDownRoundedIcon />}>
                               {filterSortName}
                            </Button>
                            <Menu anchorEl={anchorEl} open={sortingOpen} onClose={sortingCloseHandler} sx={{padding: '5px'}}>
                                <MenuItem 
                                onClick={sortingHandler}
                                id="new"
                                disableRipple
                                sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                                >
                                    New
                                </MenuItem>

                                <MenuItem
                                onClick={sortingHandler}
                                id="view"
                                disableRipple
                                sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                                >
                                    View
                                </MenuItem>

                                <MenuItem
                                onClick={sortingHandler}
                                id="like"
                                disableRipple
                                sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
                                >
                                    Like
                                </MenuItem>
                            </Menu>
                        </div>
                    </Box>


                    <Stack className="post-page">
                        <Stack className="main-config">
                        <Stack className="list-config">
                            {posts?.length === 0 ? (
                                <div className="no-data">
                                    <img src='/img/icons/icoAlert.svg' alt="svg image" />
                                    <p>No Properties</p>
                                </div>
                            ): (
                                posts.map((posts: Post) => {
                                    return(<AllPostCard key={posts._id} post={posts} member={member}/>)
                                })
                            )}
                            
                        </Stack>
                        </Stack>

                    </Stack>

                </div>

            </div>
        )
    }
}


export default AllPost