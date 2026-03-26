import { Icon } from "@iconify/react";
import useDeviceDetect from "../hooks/useDeviceDetect"
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Fab,
  Box,
  Typography,
  Stack
} from "@mui/material";
import { useRouter } from "next/router";




const Footer = () => {
    const device = useDeviceDetect()
    const router = useRouter()

    if(device === 'mobile'){
        return('MOBILE HOME')
    } else{
        return(
            
            <Stack flexDirection={'row'} justifyContent={'space-between'} className="footer-container" >
                <Stack className="nav-btn">
                  <Icon icon="lucide:home" width="26" />
                  <Typography className="nav-text">
                    Home
                  </Typography>
                </Stack>

                <Stack className="nav-btn">
                    <Icon icon="fluent:image-copy-28-regular" width="26"  />
                    <Typography className="nav-text">Post</Typography>
                </Stack>

                <Box className="add-btn">
                <Icon icon="lucide:plus" width="32" height="32" className="add-icon" />
                </Box>

                <Stack className="nav-btn">
                    <Icon icon="boxicons:community-filled" width="26"  />
                    <Typography className="nav-text">Community</Typography>
                </Stack>

                <Stack className="nav-btn">
                    <Icon icon="gg:profile" width="26"/>
                    <Typography className="nav-text">Profile</Typography>
                </Stack>
           </Stack>
            
           
        )
    }
}

export default Footer