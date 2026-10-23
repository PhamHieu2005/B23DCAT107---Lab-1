import React from "react";
import { Typography, Card, CardContent, CardMedia, Divider } from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const { userId } = useParams();
    
    const photos = models.photoOfUserModel(userId);

    if(!photos || photos.length === 0) {
      return <Typography>User has no photos</Typography>;
    }
    return (
      <div>
      <Typography variant="h5" gutterBottom>
        Photos of {models.userModel(userId).first_name} {models.userModel(userId).last_name}
      </Typography>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "20px", maxWidth: "600px" }}>
          <CardMedia
            component="img"
            image={`../../images/${photo.file_name}`}
            alt={`Photo ${photo._id}`}
          />
          <CardContent>
            <Typography variant="caption" color="textSecondary" display="block">
              Posted at: {new Date(photo.date_time).toLocaleString()}
            </Typography>

            <Divider/>

            <Typography variant="subtitle1" gutterBottom>
              <strong>Comments:</strong>
            </Typography>

            {photo.comments && photo.comments.length > 0 ? (
              photo.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography variant="body2">
                    <Link to={`/users/${comment.user._id}`}>
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>{" "}
                    <span>
                      ({new Date(comment.date_time).toLocaleString()})
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    {comment.comment}
                  </Typography>
                </div>
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">
                No comments yet for this photo.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
    );
}

export default UserPhotos;
