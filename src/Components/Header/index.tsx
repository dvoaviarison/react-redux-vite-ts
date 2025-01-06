import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      Header
    </Typography>
  </Toolbar>
</AppBar>
  );
}

export default Header;
