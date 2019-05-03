/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import Config from '../config';

export const launchPadFullNames = () => {
  return fetch(`${Config.apiUrl}/launchPadFullNames`, {
    method: 'GET'
  });
};
