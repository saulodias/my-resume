import { Box, Paper, SxProps, Theme, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const Section = ({ title, children, sx }: SectionProps) => {
  return (
    <Paper variant="outlined" sx={{ p: 4, mb: 4, ...sx }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
};
