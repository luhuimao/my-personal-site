import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import data from '../../data/stats/personal';
import translations from '../../data/translations';

const PersonalStats = ({ language }) => {
  const t = translations[language || 'en'].pages.stats;
  const statsData = data[language || 'en'];

  return (
    <>
      <h3>{t.personalStatsTitle || 'Some stats about me'}</h3>
      <Table data={statsData} />
    </>
  );
};

PersonalStats.propTypes = {
  language: PropTypes.string,
};

PersonalStats.defaultProps = {
  language: 'en',
};

export default PersonalStats;
