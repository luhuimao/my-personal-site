import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

// Import markdown files directly
import aboutEn from '../data/about.md';
import aboutZh from '../data/about.zh.md';

const About = () => {
  const [markdown, setMarkdown] = useState('');
  const { language } = useLanguage();
  const t = translations[language].pages.about;

  useEffect(() => {
    // Select the appropriate markdown file based on language
    const markdownFile = language === 'zh' ? aboutZh : aboutEn;

    // Fetch and load markdown content
    fetch(markdownFile)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch((err) => {
        console.error('Error loading markdown:', err);
        setMarkdown('# Error\n\nFailed to load content.');
      });
  }, [language]);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title={t.title} description={t.description}>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">{t.heading}</Link>
            </h2>
            <p>
              {t.wordCount} {count} {t.words}
            </p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;
