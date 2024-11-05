import { Experience } from "@/types/portfolio";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Chip, Typography } from "@mui/material";

interface ExperienceTimelineItemProps {
  experience: Experience;
}

export const ExperienceTimelineItem = ({
  experience,
}: ExperienceTimelineItemProps) => (
  <TimelineItem id={experience.title}>
    <TimelineSeparator>
      <TimelineDot color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6">{experience.title}</Typography>
      <Typography color="text.secondary">{experience.company}</Typography>
      <Typography variant="caption">{experience.period}</Typography>
      <Box sx={{ mt: 1 }}>
        <Typography component="div">
          {experience.responsibilities.map((resp, index) => (
            <div key={index}>• {resp}</div>
          ))}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        {experience.skills.map((skill) => (
          <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
        ))}
      </Box>
    </TimelineContent>
  </TimelineItem>
);
