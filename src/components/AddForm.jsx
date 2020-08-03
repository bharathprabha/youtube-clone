import React, { useState, useEffect } from "react";
import "./AddForm.css";
import { Button } from "@material-ui/core";
import { db, storage } from "../firebase.js";

const AddForm = () => {
  const [Title, setTitle] = useState("");
  const [video, setvideo] = useState(null);
  const [Progress, setProgress] = useState(0);

  useEffect(() => {
    alert("Please upload small sized video file");
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setvideo(e.target.files[0]);
    }
  };
  let no = 0;
  const handleUpload = () => {
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransfered / snapshot.totalBytes) * 100
        );
        no = no + 5;
        setProgress(no);
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
            alert(
              "Successfully uploaded. To see your video go to home, you will find your video"
            );
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
      {/* <progress className="addform__progress" value={Progress} max="100" /> */}
      <p> uploaded status: {Progress} %</p>
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
