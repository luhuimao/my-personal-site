import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';
import { initVisitorStats } from '../utils/visitorTracking';
// import Site from '../components/Stats/Site';

const Stats = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.stats;

  // Initialize visitor tracking on component mount
  useEffect(() => {
    initVisitorStats();
  }, []);

  return (
    <Main title={t.title} description={t.description}>
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link to="/stats">{t.heading}</Link>
            </h2>
          </div>
        </header>
        <Personal language={language} />
        {/* <Site language={language} /> */}
      </article>
    </Main>
  );
};

export default Stats;
