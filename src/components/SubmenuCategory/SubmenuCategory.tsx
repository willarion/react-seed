import React from 'react';

interface SubmenuCategoryProps {
  name?: string;
}

export const SubmenuCategory: React.FC<SubmenuCategoryProps> = ({ name }) => {
  return <h4 className="submenuCategory">{name}</h4>;
};
