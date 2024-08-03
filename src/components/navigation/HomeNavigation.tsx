'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import debounce from 'lodash/debounce';
import { IconContact, IconExperiences, IconHome, IconProject } from '../icons';
import styles from './navbar.module.scss';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const navbarRef = useRef<HTMLElement>(null);
  const navItemsRef = useRef<Record<string, React.RefObject<HTMLLIElement>>>({
    home: useRef(null),
    experiences: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  });

  const updateActiveIndicator = useCallback((section: string): void => {
    const activeNavItem = navItemsRef.current[section]?.current;
    if (activeNavItem && navbarRef.current) {
      const { offsetTop, offsetHeight } = activeNavItem;
      navbarRef.current.style.setProperty('--active-top', `${offsetTop}px`);
      navbarRef.current.style.setProperty('--active-height', `${offsetHeight}px`);
    }
  }, []);

  const handleNavClick = useCallback((sectionId: string): void => {
    setActiveSection(sectionId);
    updateActiveIndicator(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [updateActiveIndicator]);

  useEffect(() => {
    const handleScroll = debounce((): void => {
      const sections = ['home', 'experiences', 'projects', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const bounds = sectionElement.getBoundingClientRect();
          const threshold = window.innerHeight * 0.2;
          if (bounds.top < threshold && bounds.bottom > threshold) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        updateActiveIndicator(currentSection);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, updateActiveIndicator]);

  const renderNavItem = (id: string, Icon: JSX.Element, label: string) => (
    <li ref={navItemsRef.current[id]} key={id}>
      <a href={`#${id}`} onClick={() => handleNavClick(id)}
         className={activeSection === id ? styles.active : ''}>
        <span className={styles.icon}>
          {Icon}
        </span>
      </a>
    </li>
  );

  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <ul>
        {renderNavItem('home', <IconHome />, 'Home')}
        {renderNavItem('experiences', <IconExperiences />, 'Experiences')}
        {renderNavItem('projects', <IconProject />, 'Projects')}
        {renderNavItem('contact', <IconContact />, 'Contact')}
      </ul>
    </nav>
  );
};

export default Navigation;
