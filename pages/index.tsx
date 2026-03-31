import { Stack } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useDeviceDetect from "../libs/hooks/useDeviceDetect";
import Story from "../libs/components/homepage/Story"
import Header from "../libs/components/homepage/Header";
import Footer from "../libs/components/Footer";
import AllPost from "../libs/components/homepage/AllPost";



// export const getStaticProps = async ({ locale }: any) => ({
// 	props: {
// 		...(await serverSideTranslations(locale, ['common'])),
// 	},
// });



const Home: NextPage = () => {
  const device = useDeviceDetect()
  if(device === 'mobile'){

  return(
    <Stack className="home-page">
      <Story />
    </Stack>
  )
}else{
  return(
    <Stack className="home-page">
      <Header />
      <Story />
      <AllPost />
    </Stack>
    
  )
}
}

export default Home