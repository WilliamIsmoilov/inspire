import { useRouter } from "next/router";
import useDeviceDetect from "../../hooks/useDeviceDetect"
import { useReactiveVar } from "@apollo/client";
import { userVar } from "../../../apollo/store";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { NEXT_PUBLIC_API_URL } from "../../config";
import { useState } from "react";
import { FollowInquery } from "../../types/follow/follow.input";

interface MemberFollowingsProps {
    initialInput: FollowInquery;
    redirectToMemberPageHandler: any;
    likeMemberHandler: any
}

const defaultInput = {
    search: {}
}

const Story = (props: MemberFollowingsProps) => {
const {initialInput = defaultInput, redirectToMemberPageHandler, likeMemberHandler} = props

    const device = useDeviceDetect();
    const router = useRouter()
    const user = useReactiveVar(userVar)
    const [memberFollowings, setMemberFollowings] = useState<FollowInquery>(initialInput)

    if(device === 'mobile'){
        return <div>Story</div>
    }else{
        return(
            <Stack width={'100%'} className="story">
                <Stack className="profile">
                    <Box component={'div'} className="profile-img">
                        <Avatar 
                          src={user?.memberImage ? `${NEXT_PUBLIC_API_URL}/${user?.memberImage}` : 'img/profile/defaultUser.svg'}
                          alt="profile image"
                           style={{width: "54px", height: '54px', padding: '2px', border: '2px dashed #ccc'}}
                        />
                    </Box>
                    <div className="add-str">.add story</div>
                    <Stack  className="user-info">
                        <Typography className="user-name">{user?.memberNick}</Typography>

                    </Stack>
                </Stack>

                <Stack direction={'row'} spacing={2} className="users-account">
                    <Box component={'div'} className="user-profile">
                        <Box>
                            <Avatar 
                            src={user?.memberImage ? `${NEXT_PUBLIC_API_URL}/${user?.memberImage}` : 'img/profile/defaultUser.svg'}
                            style={{width: '54px', height: '54px'}}
                            />
                        </Box>
                    </Box>
                    <span className="name">Alex</span>

                </Stack>

            </Stack>
        )
    }
}

export default Story



        // <div class="py-4 overflow-x-auto no-scrollbar flex gap-4 px-6 border-b border-border/40">
        //     <!-- User Story -->
        //     <div class="flex flex-col items-center gap-2 shrink-0">
        //         <div class="relative">
        //             <img src="https://i.pravatar.cc/150?u=me" class="w-16 h-16 rounded-full object-cover p-0.5 border-2 border-dashed border-muted" />
        //             <div class="absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full border-2 border-background flex items-center justify-center">
        //                 <iconify-icon icon="lucide:plus" width="12" height="12" class="text-white"></iconify-icon>
        //             </div>
        //         </div>
        //         <span class="text-[10px] font-medium text-muted-foreground">Your Story</span>
        //     </div>
        //     <!-- Dynamic Stories -->
        //     <div class="flex flex-col items-center gap-2 shrink-0 animate-[fadeIn_0.5s_ease-out]">
        //         <div class="p-0.5 rounded-full bg-gradient-to-tr from-primary via-accent to-primary shadow-sm">
        //             <div class="p-0.5 bg-background rounded-full">
        //                 <img src="https://i.pravatar.cc/150?u=alex" class="w-16 h-16 rounded-full object-cover" />
        //             </div>
        //         </div>
        //         <span class="text-[10px] font-medium text-foreground">Alex</span>
        //     </div>
        //     <div class="flex flex-col items-center gap-2 shrink-0">
        //         <div class="p-0.5 rounded-full bg-gradient-to-tr from-primary via-accent to-primary shadow-sm">
        //             <div class="p-0.5 bg-background rounded-full">
        //                 <img src="https://i.pravatar.cc/150?u=sarah" class="w-16 h-16 rounded-full object-cover" />
        //             </div>
        //         </div>
        //         <span class="text-[10px] font-medium text-foreground">Sarah</span>
        //     </div>
        //     <div class="flex flex-col items-center gap-2 shrink-0">
        //         <div class="p-0.5 rounded-full bg-gradient-to-tr from-primary via-accent to-primary shadow-sm">
        //             <div class="p-0.5 bg-background rounded-full">
        //                 <img src="https://i.pravatar.cc/150?u=james" class="w-16 h-16 rounded-full object-cover" />
        //             </div>
        //         </div>
        //         <span class="text-[10px] font-medium text-foreground">James</span>
        //     </div>
        //     <div class="flex flex-col items-center gap-2 shrink-0 opacity-50">
        //         <div class="p-0.5 rounded-full border border-border">
        //             <div class="p-0.5 bg-background rounded-full">
        //                 <img src="https://i.pravatar.cc/150?u=maya" class="w-16 h-16 rounded-full object-cover grayscale" />
        //             </div>
        //         </div>
        //         <span class="text-[10px] font-medium text-muted-foreground">Maya</span>
        //     </div>
        // </div>