import React from "react";
import { Paper } from "@material-ui/core";

function NoUserCard() {
  return (
    <div>
      <Paper
        square
        style={{
          width: "308px",
          borderRadious: "0px",
          margin: "auto",
          height: "200px",
          overflowY: "auto",
          paddingTop: "90px",
        }}
      >
        No User found
      </Paper>
    </div>
  );
}

export default NoUserCard;
