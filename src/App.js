import React, {useState} from 'react';
import moment from 'moment';
import { Header } from './components/Header';
import { Monitor } from './components/Monitor';
import { Calendargrid } from './components/CalendarGrid';
import styled from 'styled-components';

function App() {
  moment.updateLocale('en',{week:{dow: 1}});

  const [today, setToday] = useState(moment());
  const startDay = moment().startOf('month').startOf('week');

  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'))
  }
  const todayHandler = () => {
    setToday(moment())
  }
  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'))
  }

  const ShadowWrapper = styled.div`
    border-radius: 8px;
    padding 0;
    overflow: hidden;
    box-shadow: 0 0 0 1px #1A1A1A, 0 8px 20px 6px #888;
  `
  return (
    <ShadowWrapper>
      <Header/>
      <Monitor
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        today={today}

      />
     <Calendargrid startDay={startDay}/>
    </ShadowWrapper>
  );
}

export default App;
