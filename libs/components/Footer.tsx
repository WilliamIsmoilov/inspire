import useDeviceDetect from "../hooks/useDeviceDetect"
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Fab,
  Box,
  Typography
} from "@mui/material";



const Footer = () => {
    const device = useDeviceDetect()

    if(device === 'mobile'){
        return('MOBILE HOME')
    } else{
        return(
            <Paper
               elevation={0}
               sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: 0,
                zIndex: 1300,
                backdropFilter: 'blur(20px)',
                backgroundColor: "rgba(255,255,255,0.9)",
                borderTop: "1px solid rgba(0,0,0,0.1)",
                display: "flex",
                justifyContent: "center"
               }}
            >
                <Box component={'div'} className="footer-container">
                    <Fab>
                        
                    </Fab>

                </Box>

            </Paper>
        )
    }
}