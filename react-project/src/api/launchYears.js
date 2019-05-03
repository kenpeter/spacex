/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import Config from '../config';

export const launchYears = () => {
  return fetch(`${Config.apiUrl}/launchYears`, {
    method: 'GET'
  });
};
