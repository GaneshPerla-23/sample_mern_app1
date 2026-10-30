<<<<<<< HEAD
=======
<<<<<<< HEAD
function Contact() {
  return (
    <div>
      <h1>Contact Page Called</h1>
=======
import { useState } from "react";
>>>>>>> 7f8943f30708ef2b62c65fa9127157502998759c

import { useState } from "react"
function Contact(){
   let [name,setName]=useState("")
   let [age,setAge]=useState(18)
   let [emailid,setEmailid]=useState("")
   let [colname,setColname]=useState("VFSTR")
   //function for onSubmit the form
   let RegisterForm=(event)=>{
    event.preventDefault();
    console.log(name);
   }
   return(
    <div>
        <h1>Contact page</h1>
    <form onSubmit={RegisterForm}>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input>
        <br/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter your age"></input>
        <br/>
        <input type="email" value={emailid} onChange={(e)=>setEmailid(e.target.value)} placeholder="Enter your emailid"></input>
        <br/>
        <input type="text" value={colname} onChange={(e)=>setColname(e.target.value)} placeholder="Enter college name"></input>
        <br/>
        <button type="Submit">Register</button>
    </form>
    <p>{name}</p>
    <p>{age}</p>
    <p>{emailid}</p>
    <p>{colname}</p>

<<<<<<< HEAD
=======
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <h2 className="text-center mb-4">Contact</h2>

          <form onSubmit={handleSubmit}>
            <div className="row align-items-center mb-3">
              <label htmlFor="name" className="col-3 col-form-label">
                Name
              </label>
              <div className="col-9">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <label htmlFor="age" className="col-3 col-form-label">
                Age
              </label>
              <div className="col-9">
                <input
                  id="age"
                  type="number"
                  className="form-control"
                  placeholder="Enter age"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  min="1"
                  max="120"
                  required
                />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <label htmlFor="email" className="col-3 col-form-label">
                Email
              </label>
              <div className="col-9">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-9 offset-3">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
>>>>>>> c2a2647df2690d1a443ef03f99121c8a7a7036ab
>>>>>>> 7f8943f30708ef2b62c65fa9127157502998759c
    </div>
   )
}
export default Contact