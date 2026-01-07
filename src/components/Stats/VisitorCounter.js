import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTotalVisits, getFirstVisitDate } from '../../utils/visitorTracking';

const VisitorCounter = ({ type }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (type === 'total') {
      setValue(getTotalVisits());
    } else if (type === 'firstVisit') {
      const firstVisit = getFirstVisitDate();
      if (firstVisit) {
        const date = new Date(firstVisit);
        setValue(date.toLocaleDateString());
      } else {
        setValue('N/A');
      }
    }
  }, [type]);

  return <>{value}</>;
};

VisitorCounter.propTypes = {
  type: PropTypes.oneOf(['total', 'firstVisit']).isRequired,
};

export default VisitorCounter;
