import { getRandomArrayElement } from '../utils.js';
//import { typeRoutes } from '../const.js';

const mockOrders = [
  {
    id: 1,
    typePoints: 'taxi',
    title: 'Geneva',
    startData: new Date('2023-09-11T10:30'),
    endData: new Date('2023-09-11T11:00'),
    price: 145,
    destinations: '1',
    offers: [
      '11',
      '12',
      '13'
    ],
    isFavourite: true,
  },
  {
    typePoints: 'bus',
    title: 'Amsterdam',
    startData: new Date('2023-12-12T10:30'),
    endData: new Date('2023-12-12T12:00'),
    price: 65,
    destinations: '2',
    offers: [
      '21',
      '22'
    ],
    isFavourite: false,
  },
  {
    typePoints: 'sightseeing',
    title: 'Moscow',
    startData: new Date('2023-12-12T23:30'),
    endData: new Date('2023-12-12T23:40'),
    price: 50,
    destinations: '3',
    offers: [],
    isFavourite: false,
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockOrders);
}

export { getRandomPoint };
