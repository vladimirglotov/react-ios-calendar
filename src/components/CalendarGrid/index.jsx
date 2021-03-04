import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(6,1fr);
  background-color: #404040;
  grid-gap: 1px;
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: 80px;
  background-color: ${props => props.isWeekend ? '#303030' : '#1E1F21'};
  color: #E6E6E6;
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'}
`;

const DayWrapper = styled.div`
  margin: 3px;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isToday ? 'red' : 'transparent'};
  border-radius: 50%;
`; 

const Calendargrid = ({startDay}) => {
  const day = startDay.clone().subtract(1,'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());
  return(
    <GridWrapper>
      {daysArray.map((dayItem) => {
        return <CellWrapper
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0} key={dayItem.format('DDMMYYYY')}
          >
          <RowInCell justifyContent={'flex-end'}>
            <DayWrapper isToday={dayItem.format('D') == moment().format('D')}>
              {dayItem.format('D')}
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
        })}
    </GridWrapper>
  );
}

export {Calendargrid}; 