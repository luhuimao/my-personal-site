import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.home;

  return (
    <Main description={t.description}>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">{t.heading}</Link>
            </h2>
            <p>{t.subheading}</p>
          </div>
        </header>
        <p>
          {t.welcome}{' '}
          <Link to="/about">{t.readMore}</Link>
          {t.comma} {language === 'zh' ? '或者您可以查看我的' : 'or you can check out my'}{' '}
          <Link to="/resume">{t.checkResume}</Link>
          {t.comma} <Link to="/projects">{t.viewProjects}</Link>
          {t.comma} {language === 'zh' ? '查看' : 'view'}{' '}
          <Link to="/stats">{t.viewStats}</Link>
          {t.comma} {t.or}{' '}
          <Link to="/contact">{t.contactMe}</Link>
          {language === 'zh' ? '。' : '.'}
        </p>
        <p>
          {t.sourceAvailable}{' '}
          <a href="https://github.com/mldangelo/personal-site">{t.here}</a>
          {language === 'zh' ? '获取' : ''}{language === 'zh' ? '。' : '.'}
        </p>
      </article>
    </Main>
  );
};

export default Index;
