import React, { useState, useEffect } from 'react';
import VisitorCounter from '../../components/Stats/VisitorCounter';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1992-06-07T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = {
  zh: [
    {
      key: 'age',
      label: '当前年龄',
      value: <Age />,
    },
    {
      key: 'location',
      label: '当前城市',
      value: '中国，上海',
    },
    {
      key: 'totalVisits',
      label: '网站访问次数',
      value: <VisitorCounter type="total" />,
    },
    {
      key: 'firstVisit',
      label: '首次访问时间',
      value: <VisitorCounter type="firstVisit" />,
    },
  ],
  en: [
    {
      key: 'age',
      label: 'Current age',
      value: <Age />,
    },
    {
      key: 'location',
      label: 'Current city',
      value: 'ShangHai, CHINA',
    },
    {
      key: 'totalVisits',
      label: 'Total Visits',
      value: <VisitorCounter type="total" />,
    },
    {
      key: 'firstVisit',
      label: 'First Visit',
      value: <VisitorCounter type="firstVisit" />,
    },
  ],
};

export default data;
