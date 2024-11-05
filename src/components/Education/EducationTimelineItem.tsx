import { Box, Typography } from '@mui/material';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Education } from '@/types/portfolio';
import SchoolIcon from '@mui/icons-material/School';

interface EducationTimelineItemProps {
  education: Education;
}

export const EducationTimelineItem = ({ education }: EducationTimelineItemProps) => (
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary">
        <SchoolIcon />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="div">
          {education.school}
        </Typography>
        <Typography color="text.secondary" variant="subtitle1">
          {education.degree}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {education.period}
        </Typography>
        {education.description && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {education.description}
          </Typography>
        )}
      </Box>
    </TimelineContent>
  </TimelineItem>
); 