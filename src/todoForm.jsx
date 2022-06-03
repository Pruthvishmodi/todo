import { Formik } from 'formik';
import React, { memo } from 'react';
import { TodoContext } from './context/todo';

function TodoForm() {
  return (
    <TodoContext.Consumer>
      {({ addTodo }) => (
        <Formik
          initialValues={{
            todoText: '',
          }}
          onSubmit={addTodo}
          validate={values => {
            const errors = {};
            if (!values.todoText.trim()) {
              errors.todoText = 'required...';
            }
            return errors;
          }}>
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            isValid,
            dirty,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center">
              <div>
                <input
                  value={values.todoText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="todoText"
                  placeholder="Please Enter your todo here..."
                />
                <button
                  disabled={
                    !dirty || !isValid || isSubmitting
                  }
                  className="btn rounded-l-none disabled:bg-slate-400 disabled:cursor-not-allowed"
                  type="submit">
                  Add Todo
                </button>
              </div>
              {errors.todoText && (
                <span className="text-red-400">
                  {errors.todoText}
                </span>
              )}
            </form>
          )}
        </Formik>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoForm);
