import {
  Timeline as MuiTimeline,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { styled } from "@mui/material";

export const Timeline = styled(MuiTimeline)(({}) => ({
  [`&  .${timelineOppositeContentClasses.root}`]: {
    flex: 0.3,
  },
  // backgroundColor: "red",
}));
