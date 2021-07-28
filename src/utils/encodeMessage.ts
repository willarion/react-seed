import { MessageFormInput } from '../models/MessageFormInput';
import base64url from 'base64url';

export const encodeMessage = ({
  to,
  copy,
  secret,
  subject,
  message,
}: MessageFormInput): string => {
  const plainMessage = `To: <${to}>
Cc: ${copy}
Bcc: ${secret}
Subject: ${subject}

${message}`;

  return base64url(plainMessage);
};
