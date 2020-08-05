import React from "react";
import { Typography, Divider } from "@material-ui/core";
const reactStringReplace = require("react-string-replace");

function UserCard(props) {
  var regex = new RegExp(`^${props.text}`, "i");
  return (
    <div>
      <Divider style={{ width: "308px" }} />
      <div style={{ paddingLeft: "20px" }}>
        <Typography
          style={{
            fontFamily: "system-ui",
            fontSize: "1.2rem",
            fontWeight: 800,
            textTransform: "capitalize",
          }}
        >
          {reactStringReplace(props.item.id, props.text, (match, i) => (
            <span style={{ color: "#03a9f4" }}>{match}</span>
          ))}
        </Typography>
        <Typography
          style={{
            fontFamily: "system-ui",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {reactStringReplace(props.item.name, props.text, (match, i) => (
            <span style={{ color: "#03a9f4" }}>{match}</span>
          ))}
        </Typography>
        {regex.test(props.item.items.join()) ? (
          <div>
            <Divider />
            <ul style={{ margin: 0 }}>
              <li>
                <Typography
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "lowercase",
                  }}
                >
                  <q>{props.text}</q> found in items
                </Typography>
              </li>
            </ul>
            <Divider />
          </div>
        ) : (
          ""
        )}
        <Typography
          style={{
            fontFamily: "system-ui",
            fontSize: "0.8rem",
            textTransform: "capitalize",
          }}
        >
          {reactStringReplace(props.item.address, props.text, (match, i) => (
            <span style={{ color: "#03a9f4" }}>{match}</span>
          ))}
        </Typography>
      </div>
    </div>
  );
}

export default UserCard;
