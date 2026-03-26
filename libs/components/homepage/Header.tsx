import { Box, Stack } from "@mui/material"
import useDeviceDetect from "../../hooks/useDeviceDetect"
import { Icon } from '@iconify/react';

const Header = () => {
    const device = useDeviceDetect()

    if(device === 'mobile'){
        return <div>Header</div>
    }else{
        return(
            <Stack width={'100%'} className="header" flexDirection={'row'}>
                <Stack className="title" flexDirection={'row'}>
                    <Box className='title-svg'>
                        <Icon icon="lucide:aperture" width="34" height="34" />
                    </Box>
                    <Box className='title-name'>INSPIRE</Box>
                    
                </Stack>
                <Stack className="msg-section">
                    <Box className='msg-icon'>
                        <Icon icon="streamline-flex-color:mail-send-email-message-circle" width="50" height="50" />
                    </Box>
                </Stack>
            </Stack>
        )
    }
}

export default Header