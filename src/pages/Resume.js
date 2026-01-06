import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

const Resume = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.resume;

  // Get language-specific data
  const currentDegrees = degrees[language];
  const currentWork = work[language];

  // Section components with data
  const sectionComponents = [
    {
      id: 'education',
      title: t.sections?.education || 'Education',
      component: <Education data={currentDegrees} />,
    },
    {
      id: 'experience',
      title: t.sections?.experience || 'Experience',
      component: <Experience data={currentWork} />,
    },
    {
      id: 'skills',
      title: t.sections?.skills || 'Skills',
      component: <Skills skills={skills} categories={categories} />,
    },
  ];

  return (
    <Main title={t.title} description={t.description}>
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2>
              <Link to="resume">{t.heading}</Link>
            </h2>
            <div className="link-container">
              {sectionComponents.map((section) => (
                <h4 key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        {sectionComponents.map((section) => (
          <div key={section.id}>{section.component}</div>
        ))}
      </article>
    </Main>
  );
};

export default Resume;
