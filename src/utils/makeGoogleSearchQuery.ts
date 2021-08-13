import { GoogleMessageSearch } from '../models/GoogleMessageSearch';
import { ParsedQuery } from 'query-string';

export const makeGoogleSearchParams = (
  search: ParsedQuery<string>,
): Partial<GoogleMessageSearch> => {
  let category: GoogleMessageSearch['category'];
  let is: GoogleMessageSearch['label'];
  let q: GoogleMessageSearch['searchInput'];

  if (search.category) {
    switch (search.category) {
      case 'promotions':
        category = 'category:promotions';
        break;
      case 'social':
        category = 'category:social';
        break;
    }
  }
  if (search.label) {
    switch (search.label) {
      case 'inbox':
        is = 'in:inbox';
        break;
      case 'drafts':
        is = 'in:draft';
        break;
      case 'starred':
        is = 'is:starred';
        break;
    }
  }
  if (search.search) {
    q = search.search;
  }

  return { category, label: is, searchInput: q };
};

export const makeGoogleSearchQuery = (search: ParsedQuery<string>): string => {
  const { category, label, searchInput } = makeGoogleSearchParams(search);

  return [category, label, searchInput].join(' ');
};
