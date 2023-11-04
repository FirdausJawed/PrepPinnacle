import React from 'react';
import MPaper from './MPaper';
import { Avatar, Box, Stack, Typography, colors } from '@mui/material';
import { images } from "./assets";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const UserBookingCard = () => {
  return (
    //<MPaper title="ABC@USERNAME">
      <Stack spacing={3}>
        {/* user info */}
        <Stack direction="row" spacing={2}>
          <Avatar alt="user" src={images.userProfile} />
          <Stack justifyContent="space-between">
            <Typography variant="subtitle2">
              Firdaus Jawed
            </Typography>
            <Typography variant="caption" color={colors.grey[500]}>
              Star batch
            </Typography>
          </Stack>
        </Stack>
        {/* user info */}

        {/* image */}
        <Box sx={{
          pt: "100%",
          position: "relative",
          "& img": {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            borderRadius: 8
          }
        }}>
          <img src={"data:image/png;base64,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"} alt="booking" />
        </Box>
        {/* image */}
      </Stack>
              
    //</MPaper>
  );
};

export default UserBookingCard;