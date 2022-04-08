import { View, Text, Image, Link } from '@react-pdf/renderer';
import styles from '../styles';
import imageProfile from './../imgs/perfil.png';
import imageGraduation from './../imgs/mortarboard.png';
import imageExperience from './../imgs/suitcase.png';
import imageProjects from './../imgs/data-management.png';

export const Profile = ({ profile }) => {
  return (
    <View style={styles.columnContainer}>
      <Text style={styles.profileText}>Profile</Text>
      <Text style={styles.profileDescription}>{profile.description}</Text>

      <Text style={styles.profileText}>Education</Text>
      <Text style={styles.profileEducation}>{profile.graduation} {profile.course} - {profile.college}</Text>
      <Text style={styles.profileDates}>{profile.initialDate} - {profile.endDate}</Text>

      <Text style={styles.profileText}>Employment History</Text>
      <Text style={styles.profileEducation}>{profile.job} at {profile.company}</Text>
      <Text style={styles.profileDatesProject}>{profile.initialJobDate} - {profile.endJobDate}</Text>
      <Text style={styles.profileDescription}>{profile.jobDescription}</Text>
      
      <Text style={styles.profileText}>Courses</Text>
      <Text style={styles.profileEducation}>{profile.course1}</Text>
      <Text style={styles.profileDatesProject}>{profile.dateCourse1}</Text>
      <Text style={styles.profileEducation}>{profile.course2}</Text>
      <Text style={styles.profileDatesProject}>{profile.dateCourse2}</Text>
      <Text style={styles.profileEducation}>{profile.course3}</Text>
      <Text style={styles.profileDatesProject}>{profile.dateCourse3}</Text>
      <Text style={styles.profileEducation}>{profile.course4}</Text>
      <Text style={styles.profileDatesProject}>{profile.dateCourse4}</Text>
      <Text style={styles.profileEducation}>{profile.course5}</Text>
      <Text style={styles.profileDatesProject}>{profile.dateCourse5}</Text>

      <Text style={styles.profileTextProjects}>Projects</Text>
      <Text style={styles.profileProject}>{profile.projectName}</Text>
      <Text style={styles.profileDatesProject}>{profile.projectInitialDate} - {profile.projectEndDate}</Text>
      <Text style={styles.profileDescription}>{profile.projectDescription}</Text>

      <Text style={styles.profileTextProjects}>Links</Text>
      <Link style={styles.link} src="https://github.com/brunomdrrosa">GitHub</Link>
      <Link style={styles.link} src="https://www.linkedin.com/in/bruno-machado-da-rosa/">LinkedIn</Link>
      <Link style={styles.link} src="mailto:brunomdr46@gmail.com">brunomdr46@gmail.com</Link>
    </View>
  );
};

const BottomSection = ({ profile }) => {
  return (
    <View style={styles.section_left}>
      <Profile profile={profile} />
    </View>
  );
};

export default BottomSection;
