import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts/CustomTheme/";
import { GlobalStyle } from "../../themes";
import { Navbar } from "../../components/Navbar";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      
    </ThemeProvider>
  );
};