import { StyleSheet, Font } from '@react-pdf/renderer';
import Calibri from './../fonts/calibri.ttf';
import CalibriBold from './../fonts/calibrib.ttf';

Font.register({ family: 'Calibri', src: CalibriBold, fontWeight: 'bold' });

export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
  },

  // Estilização para a seção do topo

  section_top: {
    width: '100%',
    height: '10%',
  },

  profile_img: {
    width: '40px',
    height: '40px',
    borderRadius: '15',
    marginLeft: '30',
    marginTop: '20',
    marginBottom: '20',
  },

  name_text: {
    fontSize: 22,
    fontFamily: 'Calibri',
    fontWeight: 'bold',
  },

  section_left: {
    width: '10%',
    height: '90%',
    backgroundColor: '#084c41',
  },

  section_mid: {
    left: '10%',
    width: '50%',
    height: '90%',
    backgroundColor: 'red',
  },

  profile_container: {
    display: 'flex',
    flexDirection: 'row',
  },

  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10',
    marginTop: '20',
  },

  profession_text: {
    color: '#181818',
    fontSize: '9',
  },

  imageProfile: {
    width: '15',
    paddingBottom: '100',
    marginLeft: '25',
  },
});
