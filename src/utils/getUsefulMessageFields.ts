import { GoogleMessage } from '../models/GoogleMessage';
import { UserMessage } from '../models/UserMessage';
import { find, head } from 'lodash';

export function getUsefulMessageFields(
  item: GoogleMessage,
  snippetNeeded: boolean,
): UserMessage {
  const title = find(item.payload.headers, { name: 'Subject' })?.value;
  const date = find(item.payload.headers, { name: 'Date' })?.value;
  const from = find(item.payload.headers, { name: 'From' })?.value;
  // checking is there anything else except snippet
  const messageBody = head(item.payload.parts);
  const fullText = messageBody ? messageBody.body.data : item.snippet;
  const text = snippetNeeded ? item.snippet : fullText;

  return {
    text,
    title,
    date,
    from,
    id: item.id,
  };
}
