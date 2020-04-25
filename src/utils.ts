export const htmlToText = (html: string) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.innerText;
};

export const substringTextFromWordUntilEnd = (text: string, word: string) => {
  const indexOfWord = text.indexOf(word);
  return indexOfWord > -1 ?
    text.substring(indexOfWord + word.length).trim() :
    text;
};

export const formatToReadableDate = (dateString: string) => {
  const d = new Date(dateString);
  const year = d.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const month = months[d.getMonth()];
  const date = d.getDate();
  return `${ month } ${ date }, ${ year }`;
};
