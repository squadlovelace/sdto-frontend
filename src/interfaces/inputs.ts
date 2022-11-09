import React from 'react';

export interface ItemInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  textLabel: string;
  name?: string;
  type?: string;
  value?: string;
}
