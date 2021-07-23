import { GoogleMessage } from '../models/GoogleMessage';
import { UserPreviewMessage } from '../models/UserPreviewMessage';
import { find } from 'lodash';
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
  const { title, date, from, id } = getUsefulMessagePreviewFields(message);

  let encodedHTML;

  const body = find(
    find(message.payload.parts, { mimeType: 'multipart/alternative' })?.parts,
    { mimeType: 'text/html' },
  )?.body;

  if (body) {
    encodedHTML = body.data;
  } else {
    const body = find(message.payload.parts, { mimeType: 'text/html' })?.body;
    encodedHTML = body?.data;
  }

  const messageDangerHTML = encodedHTML && decode(encodedHTML);
  const messageSafeHTML =
    messageDangerHTML &&
    DOMPurify.sanitize(messageDangerHTML, {
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
