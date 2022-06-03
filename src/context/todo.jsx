import React, { createContext, PureComponent } from 'react';

export const TodoContext = createContext();

export class TodoProvider extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
  };

  addTodo = (values, actions) => {
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: values.todoText,
            isDone: false,
          },
        ],
      }),
      () => {
        actions.resetForm();
      }
    );
  };

  toggleComplete = id => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        item => item.id === id
      );
      return {
        todoList: [
          ...todoList.slice(0, index),
          {
            ...todoList[index],
            isDone: !todoList[index].isDone,
          },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = id => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        item => item.id === id
      );
      return {
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  filter = filterType => {
    this.setState({ filterType });
  };

  render() {
    const { children } = this.props;
    const { todoList, filterType } = this.state;
    return (
      <TodoContext.Provider
        value={{
          todoList,
          filterType,
          addTodo: this.addTodo,
          toggleComplete: this.toggleComplete,
          deleteTodo: this.deleteTodo,
          filter: this.filter,
        }}>
        {children}
      </TodoContext.Provider>
    );
  }
}
