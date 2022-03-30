import React from 'react';
import { Page, Text, Document, Font, StyleSheet } from '@react-pdf/renderer';
import Calibri from './../fonts/calibri.ttf';
import CalibriBold from './../fonts/calibrib.ttf';

Font.register({ family: 'Calibri', src: Calibri });
Font.register({ family: 'Calibri', src: CalibriBold, fontWeight: 'bold' });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  name: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontWeight: 'bold'
  },
  job: {
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Calibri',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.name}>Bruno Machado da Rosa</Text>
        <Text style={styles.job}>Software Developer Intern</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
