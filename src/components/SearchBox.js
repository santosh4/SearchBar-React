import React, { useState } from "react";
import { Grid, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchBoxCss from "./Css/SearchBoxCss";
import RenderSuggestions from "./RenderSuggestions";
import mockData from "../data";

function SearchBox() {
  const classes = SearchBoxCss();
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState();
  const [text, setText] = useState("");

  async function keyPressHandler(event) {
    if (event.keyCode === 38) {
      let currentIndex = suggestions.indexOf(selectedSuggestion);
      if (currentIndex >= 1) {
        var updatedSuggestion = await suggestions[currentIndex - 1];
        setSelectedSuggestion(updatedSuggestion);
      }
    } else if (event.keyCode === 40) {
      let currentIndex = suggestions.indexOf(selectedSuggestion);
      if (currentIndex < suggestions.length - 1) {
        updatedSuggestion = await suggestions[currentIndex + 1];
        setSelectedSuggestion(updatedSuggestion);
      }
    }
  }

  function onTextChanged(e) {
    const value = e.target.value;
    let recommendList = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      recommendList = mockData.sort().filter((v) => {
        return (
          regex.test(v.id) ||
          regex.test(v.name) ||
          regex.test(v.address) ||
          regex.test(v.pincode) ||
          regex.test(v.items.join(""))
        );
      });
    }
    setSuggestions(recommendList);
    setSelectedSuggestion(recommendList[0]);
    setText(value);
  }

  return (
    <div
      style={{
        paddingTop: "15px",
      }}
    >
      <Paper sqaure component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search users by ID, Address, Name..."
          style={{ fontFamily: "system-ui", fontSize: "0.8rem" }}
          onChange={onTextChanged}
          value={text}
          onKeyPress={keyPressHandler}
          onKeyUp={keyPressHandler}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Grid item style={{ zIndex: "1000" }}>
        <RenderSuggestions
          suggestions={suggestions}
          text={text}
          selectedSuggestion={selectedSuggestion}
          setSelectedSuggestion={setSelectedSuggestion}
        />
      </Grid>
    </div>
  );
}

export default SearchBox;
