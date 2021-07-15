import { GoogleMessage } from '../models/GoogleMessage';
import { MessageToRender } from '../models/MessageToRender';

interface Header {
  name: string;
  value: string;
}

export function getUsefulMessageFields(item: GoogleMessage): MessageToRender {
  function filter(array: Header[], key: string) {
    const result = array.find((header: Header) => header.name === key);
    return result?.value || '';
  }

  const title = filter(item.payload.headers, 'Subject');
  const date = filter(item.payload.headers, 'Date');
  const from = filter(item.payload.headers, 'From');

  return {
    text: item.snippet,
    title,
    date,
    from,
    id: item.id,
  };
}
