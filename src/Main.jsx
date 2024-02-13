import {useState} from 'react';

function Main() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  function validate(e) {
    e.preventDefault();

    if(username.length > 8) {
      setErrorUserName('');
      setUserColor('green');
    } else {
      setErrorUserName('username must 8 letters');
      setUserColor('red')
    }

    if(email.includes('@gmail')) {
      setErrorEmail('');
      setEmailColor('green')
    } else {
      setEmailColor('red');
      setErrorEmail('shoud have @gmail')
    }

    if(password.length > 8) {
      setErrorPassword('');
      setPasswordColor('green')
    } else {
      setErrorPassword('password should 8 letters');
      setPasswordColor('red');
    }

    if(password !== '' && password == confirmPassword) {
      setErrorConfirmPassword('');
      setConfirmPasswordColor('green')
    } else {
      setErrorConfirmPassword('password dont match');
      setConfirmPasswordColor('red');
    }
  }
  
    return(
      <>
      <div className='card'>
      <div className='card-image'></div>
        <form>
        <input
            type='text'
          placeholder='name'
          style={{borderColor: userColor}}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
            <p className='error'>{errorUserName}</p>

            <input
              type='text'
            placeholder='email'
            style={{borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
              <p className='error'>{errorEmail}</p>


              <input
                type='password'
              placeholder='password'
              style={{borderColor: passwordColor }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
                <p className='error'>{errorPassword}</p>

                <input
                  type='password'
                placeholder='confirm password'
                style={{borderColor: confirmPasswordColor }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                  <p className='error'>{errorConfirmPassword}</p>
          <button className='submit-btn' onClick={validate}>submit</button>
        </form>
      </div>
      </>
    )                                       
  
}

export default Main;