import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { Button, TextField } from '@material-ui/core';

function TaskInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    dispatch(addTask({ id: Date.now(), title: input }));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: 20 }}>
      <TextField
        label="New Task"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        style={{ marginRight: 10 }}
      />
      <Button type="submit" color="primary" variant="contained">
        Add
      </Button>
    </form>
  );
}

export default TaskInput;
