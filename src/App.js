import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from "yup";
import './App.css';
import Form from "./Form";
import Errs from "./Errs"
import Users from "./Users"
import schema from "./schema"

const initFormVals = {
  fname: "",
  lname: "",
  email: "",
  terms: false
}

const initFormErrs = {
  fname: "",
  lname: "",
  email: "",
  terms: ""
}

let showErrs = false;

function App() {

  const [ users, setUsers ] = useState([]);
  const [ formVals, setFormVals ] = useState(initFormVals);
  const [ formErrs, setFormErrs ] = useState(initFormErrs);
  const [ showErrs, setShowErrs ] = useState(true);

  const onChange = (evt) => {

    const { name, value, type, checked } = evt.target;

    const valToUse = type === "checkbox" ? checked : value;

    validate(name, valToUse);
    setFormVals({ ...formVals, [name]: valToUse });
  }

  const onSubmit = (evt) => {
      evt.preventDefault();
      let noErrs = true;
      for(const err in formErrs) {
        if(formErrs[err]!="") noErrs=false;
      }
      if (noErrs) {
        setFormVals(initFormVals);
        setFormErrs(initFormErrs);
        setShowErrs(false);
      } else {
        setShowErrs(true);
      }

      const newUser = {
        id: users.length+1,
        email: formVals.email,
        first_name: formVals.fname,
        last_name: formVals.lname,
      }

      axios.post("https://reqres.in/api/users", newUser)
        .then(res => setUsers([...users, res.data]))
        .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrs({...formErrs, [name]: ""}))
      .catch(err => {
        setFormErrs({...formErrs, [name]: err.errors[0]})
      })
  }

  useEffect(() => {
    axios.get("https://reqres.in/api/users")
      .then(res => setUsers(res.data.data))
      .catch(err => console.error(err));
  }, [])

  

  return (
    <div className="App">
      <Form formVals={formVals} onChange={onChange} onSubmit={onSubmit} />    
      {showErrs && <Errs formErrs={formErrs}/>}
      <Users users={users}/>
    </div>
  );
}

export default App;
