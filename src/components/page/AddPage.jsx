import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { fetchStatus } from 'components/services/statusApi';
import { addUser } from 'redux/usersSlice';
import { useDispatch } from 'react-redux';

export const AddPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispath = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'age':
        setAge(e.target.value);
        break;
      default:
    }
  };
  const hadleSubmit = async e => {
    e.preventDefault();
    const status = await fetchStatus();
    const formData = {
      id: nanoid(),
      name,
      age,
      status,
    };
    dispath(addUser(formData));
    setName('');
    setAge('');
  };
  return (
    <form onSubmit={hadleSubmit}>
      <label>
        Name
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <label>
        Age
        <input name="age" type="text" value={age} onChange={handleChange} />
      </label>
      <button type="submit" onSubmit={hadleSubmit}>
        Add
      </button>
    </form>
  );
};
