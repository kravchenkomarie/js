const flip = (d, a) => {
  if (d === 'R') {
    a.sort((a, b) => a - b);
  } else if (d === 'L') {
    a.sort((a, b) => b - a);
  }
  return a;
};

// -------------------------------------------------------

var findAverage = function (nums) {
  let quantity = nums.length;
  let sum = 0;
  let totalAmount = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sum
  );
  return totalAmount / quantity;
};

const findAverage = (nums) => nums.reduce((a, b) => a + b) / nums.length;

// -------------------------------------------------------

function addLength(str) {
  let stringArray = str.split(' ');
  let arr = [];
  for (let i = 0; i < stringArray.length; i++) {
    arr.push(stringArray[i] + ' ' + stringArray[i].length);
  }
  return arr;
}

function addLength(str) {
  return str.split(' ').map((s) => `${s} ${s.length}`);
}

// -------------------------------------------------------

function squareOrSquareRoot(array) {
  return array.map((i) =>
    Number.isInteger(Math.sqrt(i)) ? Math.sqrt(i) : i * i
  );
}

// -------------------------------------------------------

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return `found the needle at position ${i}`;
    }
  }
  return 'needle not found';
}

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
}

// -------------------------------------------------------

function arrayPlusArray(arr1, arr2) {
  let res1 = arr1.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  let res2 = arr2.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  return res1 + res2;
}

// -------------------------------------------------------

function mergeArrays(a, b) {
  const arr = [...a, ...b];
  arr.sort(function (a, b) {
    return a - b;
  });

  const result = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });

  return result;
}

// -------------------------------------------------------

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// -------------------------------------------------------

function distinct(a) {
  return a.filter((value, index) => {
    return a.indexOf(value) === index;
  });
}

// -------------------------------------------------------

function removeEveryOther(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || i % 2 === 0) {
      res.push(arr[i]);
    }
  }
  return res;
}
