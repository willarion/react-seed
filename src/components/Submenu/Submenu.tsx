import React from 'react';
import { SubmenuBlock } from '../SubmenuBlock/SubmenuBlock';
import { SubmenuItem } from '../SubmenuItem/SubmenuItem';

export const Submenu: React.FC = () => {
  return (
    <aside className="submenu">
      <SubmenuBlock>
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 7d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 5d'}
          isActive={false}
        />
      </SubmenuBlock>
      <SubmenuBlock category={true} categoryName={'Submenu'}>
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 7d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 2d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 4d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'More tags'}
          isActive={false}
        />
      </SubmenuBlock>
      <SubmenuBlock category={true} categoryName={'Submenu'}>
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 1d'}
          isActive={true}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 1d'}
          isActive={false}
        />
      </SubmenuBlock>
      <SubmenuBlock category={true} categoryName={'Submenu'}>
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 4d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 2d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item1 & Submenu2 2d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 7d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 1d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 1d'}
          isActive={false}
        />
      </SubmenuBlock>
      <SubmenuBlock category={true} categoryName={'Submenu'}>
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 2d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 1d'}
          isActive={false}
        />
        <SubmenuItem
          to={'index.html'}
          itemName={'Submenu item 3d'}
          isActive={false}
        />
      </SubmenuBlock>
    </aside>
  );
};
