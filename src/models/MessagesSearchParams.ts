export interface MessagesSearchParams {
  label: 'inbox' | 'drafts' | 'starred';
  category: 'promotions' | 'social';
  search: string;
}
