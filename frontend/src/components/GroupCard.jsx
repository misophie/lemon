import PropTypes from 'prop-types';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const GroupCard = ({ name }) => {
  return (
    <Card variant="outlined" sx={{ borderWidth: 2, borderRadius: 5 }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

GroupCard.propTypes = {
  name: PropTypes.string,
};
