import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const pathname = location.pathname;

  let contextText = "Home";

  
  if (pathname.startsWith("/users/")) {
    const userId = pathname.split("/")[2];
    const user = models.userModel(userId);
    if (user) {
      contextText = `${user.first_name} ${user.last_name}`;
    }
  } else if (pathname.startsWith("/photos/")) {
    const userId = pathname.split("/")[2];
    const user = models.userModel(userId);
    if (user) {
      contextText = `Photos of ${user.first_name} ${user.last_name}`;
    }
  } else if (pathname === "/users") {
    contextText = "User List";
  }

  return (
    <AppBar position="absolute">
      <Toolbar>
        
        <Typography variant="h6" color="inherit">
          Phạm Trung Hiếu - B23DCAT107 
        </Typography>

        <Typography variant="h6" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;