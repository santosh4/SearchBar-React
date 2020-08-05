import React from "react";
import { Paper, ListItem } from "@material-ui/core";
import UserCard from "./UserCard";
import NoUserCard from "./NoUserCard";

function RenderSuggestions(props) {
  return (
    <div>
      {props.suggestions.length < 1 && props.text ? (
        <div>
          <NoUserCard />
        </div>
      ) : (
        <Paper
          square
          style={{
            width: "308px",
            borderRadious: "0px",
            margin: "auto",
            maxHeight: "400px",
            height: "auto",
            overflowY: "auto",
          }}
        >
          {props.suggestions.map((item) => (
            <div>
              <ListItem
                style={
                  props.selectedSuggestion.id === item.id
                    ? {
                        minWidth: "100%",
                        backgroundColor: "#fffde7",
                        padding: 0,
                      }
                    : {
                        minWidth: "100%",
                        padding: 0,
                      }
                }
                onMouseEnter={() => props.setSelectedSuggestion(item)}
              >
                <UserCard item={item} text={props.text} />
              </ListItem>
            </div>
          ))}
        </Paper>
      )}
    </div>
  );
}

export default RenderSuggestions;
