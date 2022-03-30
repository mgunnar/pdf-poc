import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PDFFile from './components/PDFFile';

const App = () => {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDFFile />} fileName="CV">
        {({ loading }) =>
          loading ? (
            <button>Loading document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
