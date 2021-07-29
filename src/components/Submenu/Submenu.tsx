import React from 'react';
import { SubmenuBlock } from '../SubmenuBlock/SubmenuBlock';
import {
  useMessagesSearchString,
  useResetLabels,
} from '../../hooks/useSearchParams/useSearchParams';
import { SubmenuItem } from '../SubmenuItem/SubmenuItem';

export const Submenu: React.FC = () => {
  const inboxSearch = useMessagesSearchString({ label: 'inbox' });
  const draftsSearch = useMessagesSearchString({ label: 'drafts' });
  const starredSearch = useMessagesSearchString({ label: 'starred' });
  const everyLabelSearch = useResetLabels();

  return (
    <aside className="submenu">
      <SubmenuBlock category={true} categoryName={'Folders'}>
        <SubmenuItem to={'/home'} search={inboxSearch} label="inbox">
          Inbox
        </SubmenuItem>
        <SubmenuItem to={'/home'} search={draftsSearch} label="drafts">
          Drafts
        </SubmenuItem>
        <SubmenuItem to={'/home'} search={starredSearch} label="starred">
          Starred
        </SubmenuItem>
        <SubmenuItem to={'/home'} search={everyLabelSearch}>
          All folders
        </SubmenuItem>
      </SubmenuBlock>
    </aside>
  );
};
