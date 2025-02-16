import { GoogleMessage } from '../models/GoogleMessage';
import { UserPreviewMessage } from '../models/UserPreviewMessage';
import { find, get } from 'lodash';
import base64url from 'base64url';
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
    title: title ? title : '(no subject)',
    date: date ? date : 'unknown for some reasons',
    from,
    id: message.id,
  };
};

export const getUsefullFulltextMessageFields = (
  message: GoogleMessage,
): UserFulltextMessage | null => {
  const { title, date, from, id } = getUsefulMessagePreviewFields(message);

  let encodedHTML;

  if (get(message, 'payload.body.data')) {
    encodedHTML = get(message, 'payload.body.data');
  } else {
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
  }

  const pureBase64 = encodedHTML && base64url.toBase64(encodedHTML);

  return {
    title,
    date,
    from,
    id,
    html: pureBase64,
  };
};
