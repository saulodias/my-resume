import { Certification } from "@/types/portfolio";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard = ({
  certification,
}: CertificationCardProps) => (
  <Card variant="outlined">
    <CardContent>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <VerifiedIcon color="primary" sx={{ mr: 1 }} />
        <Typography variant="h6" component="div">
          {certification.name}
        </Typography>
      </Box>

      <Typography color="text.secondary">
        Issued by {certification.issuer}
      </Typography>

      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        sx={{ mt: 1 }}
      >
        Issued {certification.issueDate}
      </Typography>

      {certification.credentialId && (
        <Typography variant="caption" color="text.secondary" display="block">
          Credential ID: {certification.credentialId}
        </Typography>
      )}
    </CardContent>

    {certification.url && (
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </Button>
      </CardActions>
    )}
  </Card>
);
