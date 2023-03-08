import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Update(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.id}`)
      .then(res => {
        setName(res.data.name);
        setAge(res.data.age);
        setEmail(res.data.email);
      })
      .catch(err => console.log(err));
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      age,
      email
    };
    axios.put(`/api/users/${props.match.params.id}`, user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    props.history.push('/');
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default Update;
