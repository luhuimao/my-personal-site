import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../data/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  const currentLangText = translations[language].language.current;

  return (
    <div className="language-switcher">
      <button
        type="button"
        onClick={toggleLanguage}
        className="language-switcher-button"
        aria-label={translations[language].language.switch}
        title={translations[language].language.switch}
      >
        <FontAwesomeIcon icon={faGlobe} />
        <span className="language-text">{currentLangText}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
