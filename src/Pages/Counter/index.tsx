import Button from "@mui/material/Button";
import { useAppSelector, useAppDispatch } from '../../StateManagement/hooks';
import { decrement, increment } from '../../StateManagement/Reducers/CounterReducer';
import { Box, Typography } from "@mui/material";

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Typography variant='h5'>Counter</Typography>
      <p>{count}</p>
      <Button 
        variant='outlined' 
        sx={{marginRight: 1}} 
        onClick={() => dispatch(decrement())}>
          Decrement
      </Button>
      <Button 
        variant='contained' 
        onClick={() => dispatch(increment())}>
          Increment
      </Button>
    </Box>
  );
}

export default Counter;