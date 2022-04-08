import styles from '../styles';
import { View, Text, Image } from '@react-pdf/renderer';

export const Profile = ({ profile }) => {
  return (
    <View style={styles.profile_container}>
      <Image style={styles.profile_img} src={profile.profileImageURL} />
      <View style={styles.columnContainer}>
        <Text style={styles.name_text}>{profile.name}</Text>
        <Text style={styles.profession_text}>{profile.profession}</Text>
      </View>
    </View>
  );
};

export const TopSection = ({ profile }) => {
  return (
    <View style={styles.section_top}>
      <Profile profile={profile} />
    </View>
  );
};
