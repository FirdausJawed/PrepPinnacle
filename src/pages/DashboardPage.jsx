import { Grid,Typography,Stack} from '@mui/material';
import React from 'react';
import Animate from '../components/common/Animate';
import UserBookingCard from '../components/common/UserBookingCard';
import ModuleStatus from '../components/common/moduleProgress';
import StatisticData from '../components/common/productivity';
// import Button from '@mui/material/Button';


const DashboardPage = () => {
  const user = {
    name: 'Firdaus Jawed',
    bio: 'Student',
    location: 'Patna, Bihar, India',
    status: 'Knight',
    email: 'firdausjawed01@gmail.com',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwH5hDDnbNvivR5amzhoou3ueiy1E7dursMQ&usqp=CAU',
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            
            <Grid>
             
            </Grid>
            <Stack direction="row" spacing={1} alignItems="center">
            <Grid item xs={12} md={12}>
              <Animate type="fade" delay={2} sx={{ height: "100%" }}>
                <Typography variant="h4" fontWeight="bold">
                  Hello, Firdaus
              </Typography>
              </Animate>
            </Grid>
            </Stack>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <UserBookingCard user={user} />
            </Animate>
          </Grid>
          
          
          <Grid item xs={12} md={6}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <ModuleStatus />
            </Animate>
          </Grid>
          <Grid item xs={12}>
            <Animate delay={2.5}>
              <StatisticData />
            </Animate>
          </Grid>
        </Grid>
      </Grid>
      

      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;