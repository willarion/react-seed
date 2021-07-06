import React from 'react';

interface SubmenuItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  itemName: string;
  isActive: boolean | undefined;
}

export const SubmenuItem: React.FC<SubmenuItemProps> = ({
  itemName,
  isActive,
}) => {
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
