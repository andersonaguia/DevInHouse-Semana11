import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts";
import { GlobalStyle } from "../../themes";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
    </ThemeProvider>
  );
};