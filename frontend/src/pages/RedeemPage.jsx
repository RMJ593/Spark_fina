//src/pages/Homepage.js
import React, { useState, useEffect } from "react";
import "./Redeem.css";

const RedeemPage = () => {
  const [files, setFiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Handles file selection
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const uniqueFiles = selectedFiles.filter(
      (file) => !files.some((existingFile) => existingFile.name === file.name)
    );
    setFiles([...files, ...uniqueFiles]);
    event.target.value = "";
  };

  // Handles file removal
  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  // Handles upload button click
  const handleUpload = () => {
    if (files.length === 0) {
      setShowPopup(true);
    } else {
      alert(
        "File Upload Successful.\nYour file has been uploaded successfully and is now pending confirmation. Your credits will be updated within a week."
      );
    }
  };

  // Disable scrolling on component mount
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when leaving the page
    };
  }, []);

  return (
    <div>
      <h1>Welcome to the Event Management Platform</h1>
      <p>This is the Redeem Page</p>
    </div>
  );
}

export default RedeemPage;
