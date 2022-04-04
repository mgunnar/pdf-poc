import { View, Text, Image } from '@react-pdf/renderer'
import styles from '../styles'
import imageProfile from "./../imgs/perfil.png"
import imageGraduation from "./../imgs/mortarboard.png"
import imageExperience from "./../imgs/suitcase.png"
import imageProjects from "./../imgs/data-management.png"

export const Profile = ({ profile }) => {
  return (
    <View style={styles.columnContainer}>
      <Image src={imageProfile} style={styles.imageProfile}/>
      
      <Image src={imageGraduation} style={styles.imageProfile}/>
      <Image src={imageExperience} style={styles.imageProfile}/>
      <Image src={imageGraduation} style={styles.imageProfile}/>
      <Image src={imageProjects} style={styles.imageProfile}/>
    </View>
  )
}

const BottomSection = ({ profile }) => {
  return (
    <View style={styles.section_left}>
      <Text>Profile</Text>
      <Profile profile={profile} />
    </View>
  )
}

export default BottomSection