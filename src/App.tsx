import React, { useState } from 'react';
import Preview from './components/Preview';

function App() {
  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'Bruno Machado da Rosa',
    profession: 'Software Developer Intern',
    profileImageURL:
      'https://media-exp1.licdn.com/dms/image/C4D03AQGQq2gC3SDygg/profile-displayphoto-shrink_800_800/0/1615595647513?e=1654128000&v=beta&t=RQudu0Fp8p3SO7iGLZyIzIPwBhPTmNNkpTM2fyN_Quc',
    display: true,
    description:
      "I'm 19 years old, and I'm studying Computer Science. I developed several projects in web development and software development during my years of studies.",
    graduation: "Bachelor's Degree at",
    course: 'Computer Science',
    college: 'Centro Universitário Cesuca',
    initialDate: 'March 2021',
    endDate: 'December 2024',
    job: 'Software Developer Intern',
    company: 'DBServer',
    initialJobDate: 'October 2021',
    endJobDate: 'Present',
    jobDescription:
      'During the internship I got training in Typescript, React and Node.js. I also received training using Agile Methodologies and the Git Flow.',
    course1: 'Programming for Everybody (Getting Started with Python)',
    dateCourse1: 'September 2020',
    course2: 'HTML, CSS and Javascript for Web Developers',
    dateCourse2: 'January 2021',
    course3: '100 Days of Code - The Complete Python Pro Bootcamp for 2021',
    dateCourse3: 'May 2021 — September 2021',
    course4: 'The Complete 2021 Web Development Bootcamp, Udemy',
    dateCourse4: 'October 2021',
    course5: '',
    dateCourse5: '',
    projectName: 'LGPD: Are you ready?',
    projectInitialDate: 'April 2021',
    projectEndDate: 'November 2021',
    projectDescription:
      "This project was carried out in my first and second semester of the Bachelor's  Degree in Computer Science at Centro Universitário Cesuca, with the objective  of identifying the knowledge of IT and legal professionals about LGPD in order  to understand how they interpret the law and the apply in your personal or  work context.",
  });

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        textAlign: 'center',
      }}
    >
      <div style={{ width: '50%' }}>
        <div>
          <h1>DB CV</h1>
          <h2>Candidate</h2>
          <label>Nome</label>
          <input
            name="name"
            defaultValue={profile.name}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Profissão</label>
          <input
            name="profession"
            defaultValue={profile.profession}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>URL da imagem</label>
          <input
            name="profileImageURL"
            defaultValue={profile.profileImageURL}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <h2>Profile</h2>
        <div>
          <label>Descrição</label>
          <textarea
            name="description"
            defaultValue={profile.description}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <h2>Education</h2>
        <div>
          <label>Graduação</label>
          <input
            name="graduation"
            defaultValue={profile.graduation}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Curso</label>
          <input
            name="course"
            defaultValue={profile.course}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Faculdade</label>
          <input
            name="college"
            defaultValue={profile.college}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data de início</label>
          <input
            name="initialDate"
            defaultValue={profile.initialDate}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data final</label>
          <input
            name="endDate"
            defaultValue={profile.endDate}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <h2>Employment History</h2>
        <div>
          <label>Cargo</label>
          <input
            name="job"
            defaultValue={profile.job}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Empresa</label>
          <input
            name="company"
            defaultValue={profile.company}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data de início</label>
          <input
            name="initialJobDate"
            defaultValue={profile.initialJobDate}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data final</label>
          <input
            name="endJobDate"
            defaultValue={profile.endJobDate}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            name="jobDescription"
            defaultValue={profile.jobDescription}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <h2>Courses</h2>
        <div>
          <label>Curso 1</label>
          <input
            name="course1"
            defaultValue={profile.course1}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data do curso 1</label>
          <input
            name="dateCourse1"
            defaultValue={profile.dateCourse1}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Curso 2</label>
          <input
            name="course2"
            defaultValue={profile.course2}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data do curso 2</label>
          <input
            name="dateCourse2"
            defaultValue={profile.dateCourse2}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Curso 3</label>
          <input
            name="course3"
            defaultValue={profile.course3}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data do curso 3</label>
          <input
            name="dateCourse3"
            defaultValue={profile.dateCourse3}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Curso 4</label>
          <input
            name="course4"
            defaultValue={profile.course4}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data do curso 4</label>
          <input
            name="dateCourse4"
            defaultValue={profile.dateCourse4}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Curso 5</label>
          <input
            name="course5"
            defaultValue={profile.course5}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data do curso 5</label>
          <input
            name="dateCourse5"
            defaultValue={profile.dateCourse5}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <h2>Projects</h2>
        <div>
          <label>Nome do projeto</label>
          <input
            name="projectName"
            defaultValue={profile.projectName}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data de início</label>
          <input
            name="projectInitialDate"
            defaultValue={profile.projectInitialDate}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Data final</label>
          <input
            name="projectEndDate"
            defaultValue={profile.projectEndDate}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <label>Descrição do projeto</label>
          <textarea
            name="projectDescription"
            defaultValue={profile.projectDescription}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </div>
      </div>
      <Preview profile={profile} />
    </div>
  );
}

export default App;
