import { Typography } from "@mui/material";
import reactImage from '../../Assets/react.png';
import viteImage from '../../Assets/vite.png';
import tsImage from '../../Assets/ts.png';
import reduxImage from '../../Assets/redux.png';

const Home = () => {
  return (
    <div>
      <Typography variant='h5'>Home</Typography>
      <Typography>Welcome to the winning combination</Typography>
      <img
        width={100}
        height={100}
        style={{ margin: 20 }}
        src={reactImage}
        loading='lazy'
        alt='REACT'
      />
      <img
        width={100}
        height={100}
        style={{ margin: 20 }}
        src={viteImage}
        loading='lazy'
        alt='VITE'
      />
      <img
        width={100}
        height={100}
        style={{ margin: 20 }}
        src={tsImage}
        loading='lazy'
        alt='TS'
      />
      <img
        width={100}
        height={100}
        style={{ margin: 20 }}
        src={reduxImage}
        loading='lazy'
        alt='REDUX'
      />
    </div>
  );
}

export default Home;