// E9 Search Word (Part 1):
function searchWord(keyWord, text) {
  let textArray = text.split(' ');
  let count = 0;
  textArray.forEach(word => {
    if (word.toLowerCase() === keyWord.toLowerCase()) {
      count += 1;
    }
  })
  return count;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text); // 4
searchWord('est', text); // 0
searchWord('est,', text); // 2

console.log(searchWord('sed', text));
console.log(searchWord('est', text));
console.log(searchWord('est,', text));
