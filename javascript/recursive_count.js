function recursiveCount(num = 0) {
  if( num > 9){
    return
  }
  console.log(num)
  num++
  recursiveCount(num)
}

// let count = 0;

// while (count < 10) {
//   console.log(count);
//   ++count;
// }


if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

