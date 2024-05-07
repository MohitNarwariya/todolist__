import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasksSlice';
import { ButtonGroup, Button } from '@material-ui/core';

function TaskFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasks.filter);

  const handleSetFilter = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group" style={{ marginTop: 20, marginBottom: 20 }}>
      <Button 
        onClick={() => handleSetFilter('all')}
        variant={filter === 'all' ? 'contained' : 'outlined'}
      >
        All
      </Button>
      <Button 
        onClick={() => handleSetFilter('completed')}
        variant={filter === 'completed' ? 'contained' : 'outlined'}
      >
        Completed
      </Button>
      <Button 
        onClick={() => handleSetFilter('active')}
        variant={filter === 'active' ? 'contained' : 'outlined'}
      >
        Active
      </Button>
    </ButtonGroup>
  );
}

export default TaskFilter;
