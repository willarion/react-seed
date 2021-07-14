import { GoogleMessage } from '../models/GoogleMessage';
import { MessageToRender } from '../models/MessageToRender';

interface Header {
  name: string;
  value: string;
}

export function getUsefulMessageFields(
  item: GoogleMessage,
  snippet: boolean,
): MessageToRender {
  function filter(array: Header[], key: string) {
    const result = array.find((header: Header) => header.name === key);
    return result?.value || '';
  }

  const title = filter(item.payload.headers, 'Subject');
  const date = filter(item.payload.headers, 'Date');
  const from = filter(item.payload.headers, 'From');
  // checking is there anything else except snippet
  const fullText = item.payload.parts[0].body.data
    ? item.payload.parts[0].body.data
    : item.snippet;
  const text = snippet ? item.snippet : fullText;

  return {
    text,
    title,
    date,
    from,
    id: item.id,
  };
}
