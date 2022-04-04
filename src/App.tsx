import React, { useState } from 'react';
import Preview from './components/Preview';

function App() {
  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'Bruno Machado da Rosa',
    profession: 'Software Developer Intern',
    profileImageURL: 'https://media-exp1.licdn.com/dms/image/C4D03AQGQq2gC3SDygg/profile-displayphoto-shrink_800_800/0/1615595647513?e=1654128000&v=beta&t=RQudu0Fp8p3SO7iGLZyIzIPwBhPTmNNkpTM2fyN_Quc',
    display: true,
    about: 'About...',
  })

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value })
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
      }}
    >
      <div style={{ width: '50%' }}>
        <div>
          <label>Nome</label>
          <input
            name='name'
            defaultValue={profile.name}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Profissão</label>
          <input
            name='profession'
            defaultValue={profile.profession}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>URL da imagem</label>
          <input
            name='profileImageURL'
            defaultValue={profile.profileImageURL}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Sobre</label>
          <input
            name='about'
            defaultValue={profile.about}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
      </div>
      <Preview profile={profile} />      
    </div>
     
  )
}

export default App;

