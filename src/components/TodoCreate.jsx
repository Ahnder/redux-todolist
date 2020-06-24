import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoCreateBlock = styled.div``;
const InsertFormBlock = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 2rem 2rem 4.5rem 2rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 1.125rem;
  box-sizing: border-box;
`;
const CircleButton = styled.button`
  display: flex;
  position: relative;
  width: 80px;
  height: 80px;
  left: 50%;
  bottom: 0;
  border-radius: 50%;
  transform: translate(-50%, 50%);

  z-index: 5;
  background: #38d9a9;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.125s all ease-in;

  font-size: 3.75rem;
  color: white;

  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  ${(props) =>
    props.openInsertForm &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate({ onSubmit, value, onChange }) {
  const [openInsertForm, setOpenInsertForm] = useState(false);

  const onToggle = () => setOpenInsertForm(!openInsertForm);

  return (
    <TodoCreateBlock>
      {openInsertForm && (
        <InsertFormBlock>
          <InsertForm onSubmit={onSubmit}>
            <Input
              value={value}
              onChange={onChange}
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
            />
          </InsertForm>
        </InsertFormBlock>
      )}
      <CircleButton onClick={onToggle} openInsertForm={openInsertForm}>
        <MdAdd />
      </CircleButton>
    </TodoCreateBlock>
  );
}

export default TodoCreate;
