import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delete(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [props]);

  const handleDelete = () => {
    axios.delete(`/api/users/${props.match.params.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    props.history.push('/');
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete {user.name}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
