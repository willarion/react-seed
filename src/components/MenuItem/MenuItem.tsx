import React from 'react';

interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  itemName: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ itemName }) => {
  return (
    <li>
      <a href="#" title={itemName}>
        {itemName}
      </a>
    </li>
  );
};
