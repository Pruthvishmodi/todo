import React, { memo } from 'react';
import { TodoContext } from './context/todo';

function TodoFilter() {
  return (
    <TodoContext.Consumer>
      {({ filter }) => (
        <div className="w-full flex">
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => filter('all')}>
            All
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => filter('pending')}>
            Pending
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => filter('completed')}>
            Completed
          </button>
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoFilter);
