var array1 = [4, 10, 22, -30, 55];
function getAvg(array1) {
  const total = array1.reduce((acc, c) => acc + c, 0);
  return total / array1.length;
}
var array2= [68, 7, -22, 9, 100];
const average2 = getAvg(array2);
const average1 = getAvg(array1);
console.log(average1, average2)
