import React from 'react';
import { SubmenuCategory } from '../SubmenuCategory/SubmenuCategory';

interface SubmenuBlockProps {
  category?: boolean;
  categoryName?: string;
}

export const SubmenuBlock: React.FC<SubmenuBlockProps> = ({
  children,
  category,
  categoryName,
}) => {
  return (
    <section className="submenuSection">
      {category && <SubmenuCategory name={categoryName} />}
      <ul className="nav">{children}</ul>
    </section>
  );
};
