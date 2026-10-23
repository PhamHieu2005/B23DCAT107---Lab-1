import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();

  const user = models.userModel(userId);

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body1">
          <strong>Career:</strong> {user.occupation}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {user.location}
        </Typography>
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          <strong>Description:</strong> {user.description}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/photos/${user._id}`}
        >
          View photos of {user.first_name}
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
