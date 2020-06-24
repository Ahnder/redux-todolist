import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 3rem 2rem 1.5rem 2rem;
  border-bottom: 1px solid #e9ecef;
`;

const TodoDate = styled.h1`
  margin: 0;
  font-size: 2.25rem;
  color: #343a40;
`;
const TodoDay = styled.div`
  margin-top: 0.25rem;
  color: #868e96;
  font-size: 1.3rem;
  font-weight: 400;
`;
const TodoTasks = styled.div`
  color: #20c997;
  font-size: 1.1rem;
  margin-top: 2rem;
  font-weight: bold;
`;

function TodoHead({ unDoneTasks }) {
  const today = new Date();
  const dayString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <TodoDate>{dayString}</TodoDate>
      <TodoDay>{dayName}</TodoDay>
      <TodoTasks>할 일 {unDoneTasks}개 남음</TodoTasks>
    </TodoHeadBlock>
  );
}

export default TodoHead;
