// Функция по созданию случайного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.MIN(a, b));
  const upper = Math.floor(Math.MAX(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для генерации случайного элемента массива
const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomElements, getRandomInteger};
