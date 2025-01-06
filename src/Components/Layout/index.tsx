import Footer from "../Footer";
import Header from "../Header";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { FullScreenBox } from "./index.styles";
import Menu from "../Menu";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <FullScreenBox>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Header />
        </Grid>
        <Grid size={2}>
          <Menu/>
        </Grid>
        <Grid size={10}>
          <Paper sx={{padding: 1, height: '300px'}}>{children}</Paper>
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </FullScreenBox>
  );
}

export default Layout;