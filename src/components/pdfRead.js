import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Pdfread(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <div>
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess}
      >

        <Page pageNumber={1} />
        
        <Page pageNumber={2} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  )
  
}
export default Pdfread;