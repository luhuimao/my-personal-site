import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

const PageNotFound = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.notFound;

  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title={t.title}>
          <meta name="description" content={t.description} />
        </Helmet>
        <h1>{t.heading}</h1>
        <p>{t.message}</p>
        <p>
          <Link to="/">{t.goHome}</Link>
        </p>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;
