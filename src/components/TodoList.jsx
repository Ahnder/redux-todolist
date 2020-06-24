import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 1.25rem 2rem;
  padding-bottom: 6rem;
  overflow-y: auto;
`;

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
