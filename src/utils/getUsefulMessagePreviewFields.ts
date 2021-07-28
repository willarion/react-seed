import { GoogleMessage } from '../models/GoogleMessage';
import { UserPreviewMessage } from '../models/UserPreviewMessage';
import { find, get } from 'lodash';
import { decode } from 'js-base64';
import DOMPurify from 'dompurify';
import he from 'he';
import { UserFulltextMessage } from '../models/UserFulltextMessage';

export const getUsefulMessagePreviewFields = (
  message: GoogleMessage,
): UserPreviewMessage => {
  const title = find(message.payload.headers, { name: 'Subject' })?.value;
  const date = find(message.payload.headers, { name: 'Date' })?.value;
  const from = find(message.payload.headers, { name: 'From' })?.value;
  const text = he.decode(message.snippet);

  return {
    text: text,
    title,
    date,
    from,
    id: message.id,
  };
};

export const getUsefullFulltextMessageFields = (
  message: GoogleMessage,
): UserFulltextMessage | null => {
  if (!get(message, message.payload.parts[1].body.data)) {
    return null;
  }

  const { title, date, from, id } = getUsefulMessagePreviewFields(message);
  const encodedHTML = get(message, message.payload.parts[1].body.data);
  const messageDangerHTML = decode(encodedHTML);
  const messageSafeHTML = DOMPurify.sanitize(messageDangerHTML, {
    FORCE_BODY: true,
  });

  return {
    title,
    date,
    from,
    id,
    html: messageSafeHTML,
  };
};
