import {
    TimelineItem as MuiTimelineItem,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import { Box, Chip, Typography } from "@mui/material";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
  skills?: string[];
}

export const TimelineItem = ({
  title,
  subtitle,
  period,
  description,
  skills,
}: TimelineItemProps) => {
  return (
    <MuiTimelineItem>
      <TimelineOppositeContent>
        <Typography variant="caption">{period}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">{subtitle}</Typography>
        {/* <Typography variant="caption">{period}</Typography> */}
        {description && (
          <Box sx={{ mt: 1 }}>
            <Typography component="div">
              {description.map((item, index) => (
                <Box key={index} sx={{ mb: 0.5 }}>
                  {description.length > 1 ? "•" : ""} {item}
                </Box>
              ))}
            </Typography>
          </Box>
        )}
        {skills && (
          <Box sx={{ mt: 2 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
            ))}
          </Box>
        )}
      </TimelineContent>
    </MuiTimelineItem>
  );
};
