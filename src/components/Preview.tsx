import React from 'react';
import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import styles from '../styles';
import { TopSection } from './TopSection';
import BottomSection from './BottomSection';

const Preview = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={true}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName="somename.pdf"
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
};
// Create Document Component
const Template = ({ profile }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <TopSection profile={profile} />
        <BottomSection profile={profile} />
      </Page>
    </Document>
  );
};

export default Preview;
