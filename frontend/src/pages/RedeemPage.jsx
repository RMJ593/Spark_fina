import React, { useState } from "react";
import "./Redeem.css";

const RedeemPage = () => {
  const [files, setFiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Handles file selection
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const uniqueFiles = selectedFiles.filter(
      (file) => !files.some((existingFile) => existingFile.name === file.name)
    );
    setFiles([...files, ...uniqueFiles]);
    event.target.value = ""; // Clear the input for reselection
  };

  // Handles file removal
  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  // Handles upload button click
  const handleUpload = () => {
    if (files.length === 0) {
      setShowPopup(true); // Show popup if no files are uploaded
    } else {
      alert("File Upload Successful.\nYour file has been uploaded successfully and is now pending confirmation. Your credits will be updated within a week.");
    }
  };

  return (
    <div className="redeem-page">
      <div className="upload-container">
        <label className="file-upload-label">
          Choose File
          <input type="file" onChange={handleFileChange} multiple />
        </label>
        <div className="file-list">
          {files.length === 0 ? (
            <div className="no-files">No files uploaded</div>
          ) : (
            files.map((file) => (
              <div key={file.name} className="file-item">
                <a
                  href={URL.createObjectURL(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="file-link"
                >
                  {file.name}
                </a>
                <button
                  className="file-remove-btn"
                  onClick={() => removeFile(file.name)}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>
        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="overlay">
          <div className="popup error">
            <p>File not uploaded.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedeemPage;
