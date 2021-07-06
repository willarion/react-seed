import React from 'react';
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';
import { FooterCopyright } from '../FooterCopyright/FooterCopyright';

export const Footer: React.FC = () => {
  const year = '2015';

  const links = [
    {
      id: 1,
      url: 'index.html',
      name: 'About',
    },
    {
      id: 2,
      url: 'index.html',
      name: 'Site Map',
    },
    {
      id: 3,
      url: 'index.html',
      name: 'Help',
    },
    {
      id: 4,
      url: 'index.html',
      name: 'Policies',
    },
    {
      id: 5,
      url: 'index.html',
      name: 'Contact us',
    },
  ];

  return (
    <footer className="footer">
      <FooterNavigation links={links} />
      <FooterCopyright year={year} />
    </footer>
  );
};
