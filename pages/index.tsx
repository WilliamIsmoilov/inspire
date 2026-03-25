import { Stack } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useDeviceDetect from "../libs/hooks/useDeviceDetect";
import Story from "../libs/components/homepage/Story"


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
      <Story />
      <h1>Hello world PC</h1>
    </Stack>
    
  )
}
}

export default Home