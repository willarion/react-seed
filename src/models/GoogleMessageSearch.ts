export interface GoogleMessageSearch {
  label?: 'in:inbox' | 'in:draft' | 'is:starred';
  category?: 'category:promotions' | 'category:social';
  searchInput?: string | string[];
}
