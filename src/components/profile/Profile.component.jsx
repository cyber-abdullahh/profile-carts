import { useState } from 'react'
import './profile.styles.scss'
import { profileData } from './profile-data'
import { FaTrashAlt } from 'react-icons/fa'



 
const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    console.log(id);
    const newProfileList = userProfile.filter((profile) => profile.id !== id)

    setUserProfile(newProfileList)
  }

  const handleInputChange =(e)=> {
     setSearch(e.target.value)
  }

  return (
    <section className='profile-sec --flex-center'>
      <div className="container">
        <h2 className='--tex-light --text-center'>Profile Application</h2>
        <div className="--form-control">
          <input  onChange={handleInputChange}
          value={search}
           type="text" 
          placeholder='Enter search term...' 
          className='--width-100'/>
        </div>
        {userProfile.filter((value)=> {
           if(search === '') {
              return value;
           }else if (value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return value
           }
        } ).map((profile) => (
          <div className="profile --card --flex-between" key={profile.id}>
            <img src={profile.img} alt="profile" />
            <div className="desc">
              <h4 className='--text-light'>Name: {profile.name}</h4>
              <p className='--text-light'>Job: {profile.job}</p>
            </div>
            <FaTrashAlt className='icon' onClick={() => handleDelete(profile.id)} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Profile