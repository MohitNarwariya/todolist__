import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../features/tasksSlice';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function TaskList() {
  const { items, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const filteredTasks = items.filter(task => 
    filter === 'all' || 
    (filter === 'completed' && task.completed) ||
    (filter === 'active' && !task.completed));

  return (
    <List>
      {filteredTasks.map((task) => (
        <ListItem key={task.id} button>
          <ListItemText primary={task.title} />
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeTask(task.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
