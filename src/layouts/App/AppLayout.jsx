import { ThemeProvider } from "styled-components";
import { useCustomTheme } from "../../contexts/CustomTheme/";
import { GlobalStyle } from "../../themes";
import { Navbar } from "../../components/Navbar";
import { PerfilProvider } from "../../contexts/Perfil/PerfilProvider";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <PerfilProvider>

      </PerfilProvider>      
    </ThemeProvider>
  );
};