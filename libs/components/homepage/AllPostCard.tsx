import { useRouter } from "next/router";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import { Member } from "../../types/member/member";
import { Post } from "../../types/post/post"
import { useReactiveVar } from "@apollo/client";
import { userVar } from "../../../apollo/store";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import {Icon} from "@iconify/react";
import { NEXT_PUBLIC_API_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface AllPostCard{
    post: Post;
    member: Member;
}


const AllPostCard = (props: AllPostCard) => {
    const {post, member} = props
    const device = useDeviceDetect()
    const router = useRouter()
    const user = useReactiveVar(userVar);


    if(device === 'mobile'){
        <Stack>
            <div>Hello Card</div>
        </Stack>
    }else{
        return(
        <Stack className="post-main">
        <Stack className="post-card">
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} className="post-header">
                <Stack direction={'row'} spacing={1.5} alignItems={"center"}>
                    <Avatar 
                       src={post?.memberData?.memberImage ? `${NEXT_PUBLIC_API_URL}/${post?.memberData?.memberImage}` : '/img/profile/defaultUser.svg'}
                       sx={{ borderRadius: '50%'}}
                    />

                    <Box>
                        <Typography className="username">{post?.memberData?.memberNick}</Typography>
                        <Typography className="post-time">
                            
                        </Typography>
                    </Box>
                </Stack>
            <IconButton>
                <Icon icon="lucide:more-horizontal" />
            </IconButton>
            </Stack>
        </Stack>

      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      style={{height: '100%', width: '100%'}}
      >
            {post?.postMedia?.map((img, index) => (
                <SwiperSlide key={index}>
            <Box className='post-image-wrap' component={'div'}>
            <img 
              src={`${NEXT_PUBLIC_API_URL}/${img}`}
              alt="post"
              className="post-image"
            />
            </Box>
            </SwiperSlide>
            ))}
        </Swiper>
        <Box className='post-content'>
            <Typography className="post-text">
              {post?.postDesc}
            </Typography>

            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Stack direction={"row"} spacing={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={0.5} className="act-btn like">
                        <Icon icon="lucide:heart" width="22" />
                        <Typography className="count">{post?.postLikes}</Typography>
                    </Stack>

                    <Stack direction={"row"} alignItems={"center"} spacing={0.5} className="act-btn">
                        <Icon icon="lucide:message-circle" width="22" />
                        <Typography className="count">{post?.postComments}</Typography>
                    </Stack>

                    <IconButton className="act-icon">
                        <Icon icon="lucide:send" width="22" />
                    </IconButton>

                </Stack>

            </Stack>

        </Box>
        </Stack>
        )    
}
}

export default AllPostCard