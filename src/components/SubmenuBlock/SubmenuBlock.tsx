import React from 'react';
import { SubmenuItem } from '../SubmenuItem/SubmenuItem';
import { SubmenuCategory } from '../SubmenuCategory/SubmenuCategory';

interface SubmenuBlockProps {
  category?: boolean;
  categoryName?: string;
  array: { id: number; name: string; active: boolean }[];
}

export const SubmenuBlock: React.FC<SubmenuBlockProps> = ({
  category,
  categoryName,
  array,
}) => {
  console.log(category, categoryName);
  return (
    <section className="submenuSection">
      {category && <SubmenuCategory name={categoryName} />}
      <ul className="nav">
        {array.map((item) => (
          <SubmenuItem
            key={item.id}
            isActive={item.active}
            itemName={item.name}
          />
        ))}
      </ul>
    </section>
  );
};
