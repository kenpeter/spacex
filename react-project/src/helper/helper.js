export const getDate = (input) => {
  // e.g. 2009-07-13T15:35:00+12:00
  const obj = new Date(input);
  const month = obj.toLocaleString('en-us', { month: 'long' });

  return obj.getDate() + getDateUnit(obj.getDate()) + ' ' + month + ' ' + obj.getFullYear();
}

export const getTime = (input) => {
  const obj = new Date(input);
  return obj.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
}

export const translateLinkName = (input) => {
  switch(input) {
    case 'reddit_campaign':
      return 'Reddit Campaign';
    case 'reddit_launch':
      return 'Reddit Launch';
    case 'reddit_recovery':
      return 'Reddit Recovery';
    case 'reddit_media':
      return 'Reddit Media';
    case 'presskit':
      return 'Press Kit';
    case 'article_link':
      return 'Article';
    case 'video_link':
      return 'Watch Video';
    default:
      return '';
  }
}

const getDateUnit = (num) => {
  num = '' + num;
  const lastChar = num[num.length-1];
  if(lastChar === '1')
    return 'st';
  else if(lastChar === '2')
    return 'nd';
  else if(lastChar === '3')
    return 'rd';
  else
    return 'th';
}