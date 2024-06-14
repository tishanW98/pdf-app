import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PdfViewerPage from "./PdfViewerPage";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [allFiles, setAllFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get("http://localhost:4000/get-file");
      setAllFiles(result.data.data);
    } catch (error) {
      setError("Error fetching PDF files");
    } finally {
      setLoading(false);
    }
  };

  const submitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    setLoading(true);
    setError(null);

    try {
      const result = await axios.post(
        "http://localhost:4000/upload-files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (result.data.status === "okay") {
        alert("File uploaded successfully");
        getPdf();
      }
    } catch (error) {
      setError("Error uploading file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <div className="App">
              <div className="flex-container">
                <div className="left-column">
                  <form className="formStyle" onSubmit={submitFile}>
                    <h3>Upload PDF</h3>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      type="file"
                      className="form-control"
                      accept="application/pdf"
                      required
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Uploading..." : "Submit"}
                    </button>
                    {error && <p className="error">{error}</p>}
                  </form>
                </div>
                <div className="uploaded right-column">
                  <h4>Uploaded PDFs:</h4>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className="output-div">
                      {allFiles.length === 0
                        ? "No files uploaded yet."
                        : allFiles.map((data) => (
                            <div className="inner-div" key={data._id}>
                              <h6>Title: {data.title}</h6>
                              <a
                                href={`/pdf/${data.pdf}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                              >
                                Show PDF
                              </a>
                            </div>
                          ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/pdf/:pdfFile" element={<PdfViewerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
