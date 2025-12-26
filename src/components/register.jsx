import { useState, useRef } from 'react';

function Register(){
  
  const [submittedData, setSubmittedData] = useState(null);

  
  const usernameRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const roleRef = useRef(null);

 
  const genderRefs = useRef([]);
  const hobbiesRefs = useRef([]);

 
  const genderOptions = ['Male', 'Female', 'Others'];
  const hobbyOptions = [
    { label: 'Music', value: 'music' },
    { label: 'Movies', value: 'movies' },
    { label: 'Plastic Models', value: 'plastic models' }, 
  ];

  const handleSubmit = () => {
   
    const username = usernameRef.current.value;
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const role = roleRef.current.value;
  
    const selectedGenderEl = genderRefs.current.find((el) => el && el.checked);
    const gender = selectedGenderEl ? selectedGenderEl.value : 'Not specified';

    const hobbies = hobbiesRefs.current
      .filter((el) => el && el.checked)
      .map((el) => el.value)
      .join(', ');

    
    setSubmittedData({
      username,
      firstname,
      lastname,
      gender,
      hobbies,
      role,
    });
  };

  const handleBack = () => {
    setSubmittedData(null); 
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'sans-serif' }}>
      
      
      {submittedData ? (
        
        <div>
          <h3>Submit Data</h3>
          <p><strong>Username:</strong> <span style={{ color: 'red' }}>{submittedData.username}</span></p>
          <p><strong>Firstname:</strong>  <span style={{ color: 'red' }}>{submittedData.firstname}</span></p>
          <p><strong>Lastname:</strong> <span style={{ color: 'red' }}>{submittedData.lastname}</span></p>
          <p><strong>Gender:</strong> <span style={{ color: 'red' }}>{submittedData.gender}</span></p>
          <p><strong>Hobbies:</strong><span style={{ color: 'red' }}>{submittedData.hobbies}</span></p>
          <p><strong>Role:</strong> <span style={{ color: 'red' }}>{submittedData.role}</span></p>
          
          <button onClick={handleBack} style={{ marginTop: '10px' }}>
            Back to form
          </button>
        </div>
      ) : (
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
          
         
          <div>
            <label style={{display: 'block'}}>Username</label>
            <input type="text" ref={usernameRef} />
          </div>

          
          <div>
            <label style={{display: 'block'}}>Firstname</label>
            <input type="text" ref={firstnameRef} />
          </div>

         
          <div>
            <label style={{display: 'block'}}>Lastname</label>
            <input type="text" ref={lastnameRef} />
          </div>

         
          <div>
            <label style={{display: 'block'}}>Gender</label>
            {genderOptions.map((g, i) => (
              <label key={g} style={{ marginRight: '10px' }}>
                <input
                  type="radio"
                  name="gender"
                  value={g.toLowerCase()}
                  ref={(el) => (genderRefs.current[i] = el)}
                />
                {g}
              </label>
            ))}
          </div>

         
          <div>
            <label style={{display: 'block'}}>Hobbies</label>
            {hobbyOptions.map((hobby, i) => (
              <div key={hobby.value}>
                <input
                  type="checkbox"
                  id={hobby.value}
                  name="hobbies"
                  value={hobby.value}
                 
                  ref={(el) => (hobbiesRefs.current[i] = el)}
                />
                <label htmlFor={hobby.value}> {hobby.label}</label>
              </div>
            ))}
          </div>

          
          <div>
            <label style={{display: 'block'}}>Role</label>
            <select ref={roleRef}>
              <option value="General Staff">General Staff</option>
              <option value="Developer">Developer</option>
              <option value="System Analyst">System Analyst</option>
            </select>
          </div>

          <button onClick={handleSubmit} style={{ width: 'fit-content', marginTop: '10px' }}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;