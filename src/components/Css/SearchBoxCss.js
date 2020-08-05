import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "2px 4px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    width: 300,
    height: 32,
    borderRadius: 0,
    backgroundColor: "#ffffff",
  },
  input: {
    marginLeft: "8px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default useStyles;
