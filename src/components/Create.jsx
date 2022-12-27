import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import { FormControlLabel, RadioGroup, FormControl, FormLabel } from "@mui/material";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: "block",
  },
});

export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError]=useState(false);
  const [detailsError, setDetailsError]=useState(false);

  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title == ''){setTitleError(true)}

    if(details == ''){setDetailsError(true)}

    if (title && details) {
      console.log(title, details, category);
    }
  };
  return (
    <div>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        gutterBottom
        color="primary"
      >
        Create a New Note
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        ></TextField>

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        ></TextField>

        <FormControl className="classes.field">
        <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio/>} label="Money" />
          <FormControlLabel value="todos" control={<Radio/>} label="ToDo" />
          <FormControlLabel value="remainders" control={<Radio/>} label="Remainder" />
          <FormControlLabel value="work" control={<Radio/>} label="Work" />
        </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
