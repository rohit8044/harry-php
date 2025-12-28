import './Registerpage.css'
import { useState } from 'react';
export default function Registerpage(){
  const [Error,setError]=useState()
  const [value,setvalue]=useState({
    User:"",
    Phone:"",
    Email:"",
    Password:"",
    Confirm:""
  });
  const changevalue=(e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   if (value.Password !== value.Confirm) {
      setError("Passwords do not match!");
      return;
   }
  }
  return (
    <>
      <div className="regcontainer">
        <div className="regbox">
        <form onSubmit={handleSubmit }> 

          <label>Enter Full Name</label>
          <div className="inputbox">
            <span className="icon">👤</span>
            <input type="text" placeholder="Enter Full Name" required name='User' onChange={changevalue}/>
          </div>

          <label>Phone Number</label>
          <div className="inputbox">
            <span className="icon">📞</span>
            <input type="tel" placeholder="Phone Number" maxLength="10" required name='Phone' onChange={changevalue}/>
          </div>

          <label>Email Address</label>
          <div className="inputbox">
            <span className="icon">✉️</span>
            <input type="email" placeholder="Email Address"  required name='Email' onChange={changevalue}/>
          </div>

          <label>Password</label>
          <div className="inputbox">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" required name='Password' onChange={changevalue}/>
          </div>

          <label>Confirm Password</label>
          <div className="inputbox">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Confirm Password"  required name='Confirm' onChange={changevalue}/>
          </div>
          <p className='errormessa'>{Error}</p>
          <button className='registerbtn' type='submit'>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}
