import React from 'react';
import { SubmenuBlock } from '../SubmenuBlock/SubmenuBlock';

export const Submenu: React.FC = () => {
  // const SubmenuBlocks = [ БУДУЩИЙ ОБЪКТ ДЛЯ БУДУЩЕГО MAP БЛОКОВ
  //   {
  //     firstBlock: [
  //       {
  //         id: 1,
  //         name: 'Submenu item 7d',
  //         active: false,
  //       },
  //       {
  //         id: 2,
  //         name: 'Submenu item 5d',
  //         active: false,
  //       },
  //     ],
  //   },
  // ];
  const firstBlock = [
    {
      id: 1,
      name: 'Submenu item 7d',
      active: false,
    },
    {
      id: 2,
      name: 'Submenu item 5d',
      active: false,
    },
  ];

  const secondBlock = [
    {
      id: 1,
      name: 'Submenu item 7d',
      active: false,
    },
    {
      id: 2,
      name: 'Submenu item 5d',
      active: false,
    },
    {
      id: 3,
      name: 'Submenu item 5d',
      active: false,
    },
    {
      id: 4,
      name: 'More tags',
      active: false,
    },
  ];

  const thirdBlock = [
    {
      id: 1,
      name: 'Submenu item 1d',
      active: true,
    },
    {
      id: 2,
      name: 'Submenu item 1',
      active: false,
    },
  ];

  const forthBlock = [
    {
      id: 1,
      name: 'Submenu item 4d',
      active: false,
    },
    {
      id: 2,
      name: 'Submenu item 2d',
      active: false,
    },
    {
      id: 3,
      name: 'Submenu item1 &amp; Submenu2 2d',
      active: false,
    },
    {
      id: 4,
      name: 'Submenu item 7d',
      active: false,
    },
    {
      id: 5,
      name: 'Submenu item 1d',
      active: false,
    },
    {
      id: 6,
      name: 'Submenu item 1d',
      active: false,
    },
  ];

  const fifthBlock = [
    {
      id: 1,
      name: 'Submenu item 2d',
      active: false,
    },
    {
      id: 2,
      name: 'Submenu item 1d',
      active: false,
    },
    {
      id: 3,
      name: 'Submenu item 3d',
      active: false,
    },
  ];

  return (
    <main className="container main">
      <aside className="submenu">
        <SubmenuBlock array={firstBlock} />
        <SubmenuBlock
          category={true}
          categoryName={'Submenu'}
          array={secondBlock}
        />
        <SubmenuBlock
          category={true}
          categoryName={'Submenu'}
          array={thirdBlock}
        />
        <SubmenuBlock
          category={true}
          categoryName={'Submenu'}
          array={forthBlock}
        />
        <SubmenuBlock
          category={true}
          categoryName={'Submenu'}
          array={fifthBlock}
        />
      </aside>
    </main>
  );
};
