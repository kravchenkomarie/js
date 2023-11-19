function evenOrOdd(number) {
  if (number % 2) {
    return 'Even';
  }
  return 'Odd';
}

// -------------------------------------------------------

function opposite(number) {
  return -number;
}

// -------------------------------------------------------

function century(year) {
  let century = Math.ceil(year / 100);
  return century;
}

// -------------------------------------------------------

function abbrevName(name) {
  let strArr = name.split(' ');
  return (
    strArr[0].charAt(0).toUpperCase() + '.' + strArr[1].charAt(0).toUpperCase()
  );
}

// -------------------------------------------------------

function abbrevName(name) {
  const nameArray = name.split(' ');
  const firstName = nameArray[0].slice(0, 1).toUpperCase();
  const secondName = nameArray[1].slice(0, 1).toUpperCase();
  return firstName + '.' + secondName;
}

// -------------------------------------------------------

function solution(str) {
  return str.split('').reverse().join('');
}

// -------------------------------------------------------

function maskify(cc) {
  return cc.slice(0, -4).replace(/\w/g, '#') + cc.slice(-4);
}

// -------------------------------------------------------

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

function removeChar(str) {
  return str.slice(1, -1);
}

// -------------------------------------------------------

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// -------------------------------------------------------

function countSheep(num) {
  let sheepString = '';
  for (let i = 1; i <= num; i++) {
    sheepString = sheepString + `${i} sheep...`;
  }
  return sheepString;
}

// -------------------------------------------------------

function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length));
}

// -------------------------------------------------------

function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// -------------------------------------------------------
