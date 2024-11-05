import { Box, Typography } from "@mui/material";
import { StyledAvatar } from "./styles";

interface HeroProps {
  photoUrl: string;
  title: string;
  subtitle: string;
}

export const Hero = ({ photoUrl, title, subtitle }: HeroProps) => (
  <Box sx={{ textAlign: "center", py: 8 }}>
    <StyledAvatar src={photoUrl} alt="Profile Photo" />
    <Typography variant="h3" sx={{ mt: 3, mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
      {subtitle}
    </Typography>
  </Box>
);
