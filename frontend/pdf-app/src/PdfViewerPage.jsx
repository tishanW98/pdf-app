import React from 'react';
import { useParams } from 'react-router-dom';

function PdfViewerPage() {
  const { pdfFile } = useParams();

  return (
    <div className="pdf-page">
      <h2>PDF Viewer</h2>
      <object
        data={`http://localhost:4000/files/${pdfFile}`}
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <p>
          Your browser does not support PDFs. <a href={`http://localhost:4000/files/${pdfFile}`}>Download the PDF</a>.
        </p>
      </object>
    </div>
  );
}

export default PdfViewerPage;
