export const htmlToText = html => {
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
