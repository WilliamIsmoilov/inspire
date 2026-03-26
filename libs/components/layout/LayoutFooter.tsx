import { useRouter } from "next/router"
import { useTranslation } from "react-i18next";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import { useReactiveVar } from "@apollo/client";
import { userVar } from "../../../apollo/store";
import { useEffect } from "react";
import { getJwtToken, updateUserInfo } from "../../auth";
import { Stack } from "@mui/material";
import Footer from "../Footer";

const LayoutFooter = ({children}: any) => {
    const router = useRouter()
        const { t, i18n } = useTranslation('common');
        const device = useDeviceDetect();
        const user = useReactiveVar(userVar);

        useEffect(() => {
			const jwt = getJwtToken();
			if (jwt) updateUserInfo(jwt);
		}, []);


        if(device =='mobile'){
            return(
                <>
                </>
            )
        }else{
            return(
                <>
                    {children}
                <Stack id={'footer'}>
                    <Footer />
                </Stack>
                </>
            )
        }
}

export default LayoutFooter