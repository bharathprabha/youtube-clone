import React, { useState } from "react";
import "./AddForm.css";
import { Button } from "@material-ui/core";
import { db, storage } from "../firebase.js";

const AddForm = () => {
  const [Title, setTitle] = useState("");
  const [video, setvideo] = useState(null);
  const [Progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setvideo(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransfered / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        storage
          .ref("videos")
          .child(video.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("videos").add({
              title: Title,
              img: url,
            });
            setProgress(0);
            setTitle("");
            setvideo(null);
          });
      }
    );
  };

  return (
    <div className="addform">
      <label>Add your title</label>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={Title}
      />
      {/* <label>Add your chennal name</label>   */}
      {/* <input type="text" placeholder="channel" onChange={} /> */}
      <progress className="addform__progress" value={Progress} max="100" />
      <input type="file" onChange={handleChange} />
      <Button
        onClick={handleUpload}
        className="addform__button"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default AddForm;
