import React from 'react';

interface FooterNavigationProps {
  links: { id: number; url: string; name: string }[];
}

export const FooterNavigation: React.FC<FooterNavigationProps> = ({
  links,
}) => {
  return (
    <div className="navbar navbar-default">
      <ul className="nav navbar-nav">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} title="menu">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
