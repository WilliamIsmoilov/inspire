import type { AppProps } from "next/app";
import { useState } from "react";
import { useApollo } from "../apollo/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { appWithTranslation } from 'next-i18next';
import { light } from "../scss/MaterialTheme";
import '../scss/pc/main.scss'
import LayoutFooter from "../libs/components/layout/LayoutFooter";




const App = ({Component, pageProps}: AppProps) => {
  const [theme, setTheme] = useState(createTheme(light));
	const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <LayoutFooter>
        <Component {...pageProps} />
        </LayoutFooter>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default appWithTranslation(App);