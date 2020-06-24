/**
 *  todolist 의 레이아웃을 설정
 */

import React from 'react';
import styled from 'styled-components';

import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 512px;
  height: 768px;

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;

  background: #ffffff;

  border-radius: 1rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoTemplate({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);

  const unDoneTasks = todos.filter((todo) => !todo.done).length;

  return (
    <TodoTemplateBlock>
      <TodoHead unDoneTasks={unDoneTasks} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoCreate onSubmit={onSubmit} value={input} onChange={onChange} />
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
