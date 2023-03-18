function countWords(str)
{
    const words = str.split('');
    const count = {}

    for(let i = 0; i < words.length; i++)
    {
        const word = words[i];
        count[word] = count[word] ? count[word] + 1: 1;
    }
    return count;
}

const str = 'alphabetic';
const wordscount = countWords(str);

console.log(wordscount);