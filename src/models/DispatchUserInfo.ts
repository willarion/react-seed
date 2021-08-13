import React from 'react';

export interface DispatchUserInfo {
  dispatchUserInfo: React.Dispatch<{
    type: string;
    user: unknown;
    access: string;
  }>;
}
