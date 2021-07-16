import React from 'react';
import { SubmenuBlock } from '../SubmenuBlock/SubmenuBlock';
import { useMessagesSearchString } from '../../hooks/useSearchParams';
import { SubmenuItem } from '../SubmenuItem/SubmenuItem';

export const Submenu: React.FC = () => {
  const inboxSearch = useMessagesSearchString({ category: 'inbox' });
  const draftsSearch = useMessagesSearchString({ category: 'drafts' });
  const starredSearch = useMessagesSearchString({ category: 'starred' });

  return (
    <aside className="submenu">
      <SubmenuBlock category={true} categoryName={'Folders'}>
        <SubmenuItem to={'/home'} search={inboxSearch}>
          Inbox
        </SubmenuItem>
        <SubmenuItem to={'/home'} search={draftsSearch}>
          Drafts
        </SubmenuItem>
        <SubmenuItem to={'/home'} search={starredSearch}>
          Starred
        </SubmenuItem>
      </SubmenuBlock>
    </aside>
  );
};
