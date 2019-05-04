/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import Config from '../config';

export const getLaunches = (item) => {
  const url = `${Config.apiUrl}/launchAndPad?keyword=${item.keyword}&launchpadId=${item.launchpadId}&minYear=${item.minYear}&maxYear=${item.maxYear}`;
  return fetch(url, {
    method: 'GET'
  });
};
