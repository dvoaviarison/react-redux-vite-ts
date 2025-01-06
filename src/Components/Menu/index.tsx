import { Calculate, Home as HomeIcon, Summarize } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";

const Menu = () => {
    return (
        <Paper elevation={1} sx={{ padding: 1, height: '300px', textAlign: 'left' }}>
            <MenuList>
                <MenuItem component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/counter">
                    <ListItemIcon>
                        <Calculate fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Counter</ListItemText>
                </MenuItem>
                <MenuItem component={Link} to="/statesummary">
                    <ListItemIcon>
                        <Summarize fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>State Summary</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    );
}

export default Menu;