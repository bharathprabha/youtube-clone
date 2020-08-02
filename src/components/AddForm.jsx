import React from "react";
import "./AddForm.css";
import { Button } from "@material-ui/core";

const AddForm = () => {
  return (
    <div className="addform">
      <label>Add your title</label>
      <input type="text" placeholder="Title" />
      <label>Add your chennal name</label>
      <input type="text" placeholder="channel" />
      <Button className="addform__button" variant="contained" color="secondary">
        Add videos
      </Button>
      <Button className="addform__button" variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default AddForm;
