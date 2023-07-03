// коментарии
const COMMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// идентификатор
const IDENTIFIER = 25;

// описание фотографии
const DESCRIPTIONS_PHOTO = ['Солнечный день', 'Хороший улов', 'Правда жизни', 'Крик души', 'Душный и непонятный JS', 'Можно помедленнее, я всё записую...', 'Где тут выход', 'Круизный лайнер', 'Достойный соперник'
];

// имена
const USERS_NAME = ['Кирилл', 'Артур', 'Пётр', 'Франциско', 'Борис', 'Максим', 'Антон', 'Валерий', 'Степан', 'Фёдор'
];

// колличество лайков
const NumberOfLikes = {
  MIN: 15,
  MAX: 200
};

// колличество комментариев
const NumberOfComments = {
  MIN: 0,
  MAX: 30
};

// колличество аватарок
const NumberOfAvatar = {
  MIN: 1,
  MAX: 6
};

// Функция по созданию случайного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.MIN(a, b));
  const upper = Math.floor(Math.MAX(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для генерации случайного элемента массива
const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для генерации порядкового номера идентификатора
const getIdGenerator = () => {
  let firstGenerateId = 0;
  return function () {
    firstGenerateId += 1;
    return firstGenerateId;
  };
};

const generatePhotoId = getIdGenerator();
const generatePhotoUrl = getIdGenerator();
const generateCommentsId = getIdGenerator();

// Функция для создания комментариев
const generateCommentsToPhoto = () => {
  const arrayComments = [];
  for (let i = 0; i < getRandomInteger(NumberOfComments.MIN, NumberOfComments.MAX); i++) {
    arrayComments.push ({
      id: generateCommentsId(),
      avatar: `img/avatar-${getRandomInteger(NumberOfAvatar.MIN, NumberOfAvatar.MAX)}.svg`,
      message: getRandomElements(COMMENTS),
      name: getRandomElements(USERS_NAME)
    });
  }
  return arrayComments;
};

// Функция для создания объекта с описанием фотографии
const getPhotoByUsers = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomElements(DESCRIPTIONS_PHOTO),
  likes: getRandomInteger(NumberOfLikes.MIN, NumberOfLikes.MAX),
  comments: generateCommentsToPhoto()
});

// Функция по созданию массива
const getAllPhotoByUsers = () => Array.from({length: IDENTIFIER}, getPhotoByUsers);

getAllPhotoByUsers();
