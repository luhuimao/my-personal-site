import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.contact;

  return (
    <Main title={t.title} description={t.description}>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">{t.heading}</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>{t.intro}</p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </Main>
  );
};

export default Contact;
