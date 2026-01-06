import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import LanguageSwitcher from './LanguageSwitcher';
import routes from '../../data/routes';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../data/translations';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header id="header">
      <h1 className="index-link">
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path}>
              {t.nav[l.key] || l.label}
            </Link>
          ))}
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{t.nav[l.key] || l.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="header-right">
        <LanguageSwitcher />
        <Hamburger />
      </div>
    </header>
  );
};

export default Navigation;
