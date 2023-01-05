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

function App() {

  const [ users, setUsers ] = useState([]);
  const [ formVals, setFormVals ] = useState(initFormVals);
  const [ formErrs, setFormErrs ] = useState(initFormErrs);
  const [ disabled, setDisabled ] = useState(true);

  const onChange = (evt) => {

    const { name, value, type, checked } = evt.target;

    const valToUse = type === "checkbox" ? checked : value;

    validate(name, valToUse);
    setFormVals({ ...formVals, [name]: valToUse });
  }

  const onSubmit = (evt) => {
      evt.preventDefault();

      setFormVals(initFormVals);
      setFormErrs(initFormErrs);
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

  useEffect(() => {
    schema.isValid(formVals).then(valid => setDisabled(!valid));
  }, [formVals])
  

  return (
    <div className="App">
      <Form formVals={formVals} onChange={onChange} onSubmit={onSubmit} disabled={disabled} />    
      <Errs formErrs={formErrs}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
