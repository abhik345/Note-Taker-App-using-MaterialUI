import React from "react";
import { useState } from "react";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Container } from "@mui/system";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { makeStyles } from "@material-ui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    // marginTop: 20,
    // marginBottom: 20,
    display: "block",
    "&&": {
      marginTop: "5px",
      marginBottom: "20px",
    },
  },
});

function Create() {
  const classes = useStyles();
  //sening consumer back to home page after submiting the form
  const history = useHistory();
  //for general value handeling
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  //for error handleing
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  //for radio button controls
  const [category, setCategory] = useState("todos");
  const handleSubmit = function (e) {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      // console.log(title, details, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };
  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a New Note
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={classes.field}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            // margin="dense"
            InputProps={{ className: classes.field }}
            error={titleError}
          />
          <TextField
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className={classes.field}
            label="Content"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            // margin="dense"
            InputProps={{ className: classes.field }}
            error={detailsError}
          />
          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <FormControlLabel
                control={<Radio />}
                label="Money"
                value="money"
              />
              <FormControlLabel
                control={<Radio />}
                label="Todos"
                value="todos"
              />
              <FormControlLabel
                control={<Radio />}
                label="Reminder"
                value="reminder"
              />
              <FormControlLabel control={<Radio />} label="Work" value="work" />

              {/* <Radio value="Hello" />
            <Radio value="GoodBye" /> */}
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            // className={classes.btn}
            color="primary"
            // style={{ background: "#16a085" }}
            variant="contained"
            onClick={() => console.warn("you clicked me")}
            // startIcon={<SendOutlinedIcon />}
            endIcon={<ArrowForwardIosOutlinedIcon />}
          >
            Submit
          </Button>
        </form>

        {/* <Button type="submit" color="secondary" variant="outlined">
          Submit
        </Button> */}

        {/* <br />
        <AcUnitOutlinedIcon /> */}
      </Container>

      {/* <Button type="submit" color="primary">
        Submit
      </Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </div>
  );
}

export default Create;
