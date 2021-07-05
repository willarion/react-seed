import React from 'react';

interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  itemName: string;
  isActive: boolean | undefined;
}

export const MenuItem: React.FC<MenuItemProps> = ({ itemName, isActive }) => {
  return (
    <li>
      <a
        href="index.html"
        title={itemName}
        className={isActive ? 'active' : ''}
      >
        {itemName}
      </a>
    </li>
  );
};
