import { atom } from 'recoil';

export const text = atom({
  key: 'sampleText',
  default: 'foo',
});

export const count = atom({
  key: 'sampleCount',
  default: 0,
});