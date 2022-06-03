import React, { memo } from 'react';
import TodoListItem from './todoListItem';
import { TodoContext } from './context/todo';

function TodoList() {
  return (
    <TodoContext.Consumer>
      {({ todoList, filterType }) => (
        <div className="w-full max-w-5xl flex-1 overflow-y-auto">
          {todoList.map(item => {
            const listItem = (
              <TodoListItem key={item.id} item={item} />
            );

            if (
              (filterType === 'completed' && item.isDone) ||
              (filterType === 'pending' && !item.isDone) ||
              filterType === 'all'
            ) {
              return listItem;
            }

            return null;
          })}
        </div>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoList);
