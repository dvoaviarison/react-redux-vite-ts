import { Grid2 as Grid, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../StateManagement/hooks";

const StateSummary = () => {
    const count = useAppSelector(state => state.counter.value);
    return (
        <Grid container>
            <Grid size={4}>
                <Paper>
                    <Typography variant='h6' >Counter</Typography>
                    <Typography variant='h1' color='green'>{count}</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default StateSummary;