import React from 'react';
import styled from 'styled-components';
import moment from "moment";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1E1F21;
  color: #DCDDDD;
  padding: 16px;
`;

const TextWrapper = styled('span')`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonsWrapper = styled.div`
   display: flex;
   align-items: center;
`;

const ButtonWrapper = styled.button`
  border: unset;
  background-color: #565759;
  height: 20 px;
  margin-right: 2px;
  border-radius: 4px;
  color: #E6E6E6;
  outline: unset;
`;

const TodayButton = styled(ButtonWrapper)`
  height: 17px;
  padding: 0 16px;
  font-weight: bold;
  outline: unset;
`;

const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1E1F21;
  color: #E6E6E6;
  border-bottom: 1px solid #404040;
`;

const DayOfWeekWrapper = styled.div`
  padding: 8px 0;
  min-width: 140px; 
`;

const SpanWrapper = styled.div`
  margin-left: auto;
  margin-right: 0em;
  text-align: center;
  width: 33px;
`;



const monday = moment().startOf('week');
const week = [...Array(7)].map(() => monday.add(1, 'day').clone());
console.log(week)

const Monitor = ({today, prevHandler, todayHandler, nextHandler}) => {
  return(
    <div>
      <DivWrapper>
        <DateWrapper>
          <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
          <TextWrapper>{today.format('YYYY')}</TextWrapper>
        </DateWrapper>
        <ButtonsWrapper>
          <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
          <TodayButton onClick={todayHandler}>Today</TodayButton>
          <ButtonWrapper onClick={nextHandler }> &gt; </ButtonWrapper>
        </ButtonsWrapper >
      </DivWrapper>
      <WeekWrapper>{week.map(dayOfWeek => {
        return <DayOfWeekWrapper key={dayOfWeek.format('D')}><SpanWrapper>{dayOfWeek.format('ddd')}</SpanWrapper></DayOfWeekWrapper>
      })}</WeekWrapper>
    </div>
  )
}

export {Monitor};  