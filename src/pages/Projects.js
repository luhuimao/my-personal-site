import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../data/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.projects;
  const projects = data[language];

  return (
    <Main title={t.title} description={t.description}>
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link to="/projects">{t.heading}</Link>
            </h2>
            <p>
              {language === 'zh'
                ? '我引以为豪的一些项目'
                : "A selection of projects that I'm not too ashamed of"}
            </p>
          </div>
        </header>
        {projects.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </Main>
  );
};

export default Projects;
