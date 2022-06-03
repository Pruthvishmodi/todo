import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TodoContext } from './context/todo';

function TodoListItem({ item }) {
  return (
    <div className="flex m-4 items-center">
      <TodoContext.Consumer>
        {({ toggleComplete }) => (
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => toggleComplete(item.id)}
          />
        )}
      </TodoContext.Consumer>

      <p
        className={cn('flex-1 px-4', {
          'line-through': item.isDone,
        })}>
        {item.text}
      </p>
      <TodoContext.Consumer>
        {({ deleteTodo }) => (
          <button
            type="button"
            className="btn bg-red-400"
            onClick={() => deleteTodo(item.id)}>
            Delete
          </button>
        )}
      </TodoContext.Consumer>
    </div>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
};

export default memo(TodoListItem);
