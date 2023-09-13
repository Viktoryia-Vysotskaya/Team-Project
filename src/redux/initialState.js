const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      image: './images/furniture/bed/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 55,
      isFavourite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      image: './images/furniture/bed/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      image: './images/furniture/bed/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 67,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      image: './images/furniture/bed/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      image: './images/furniture/bed/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'chair',
      image: './images/furniture/chair/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      oldPrice: 45,
      isFavourite: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'chair',
      image: './images/furniture/chair/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'chair',
      image: './images/furniture/chair/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'chair',
      image: './images/furniture/chair/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'chair',
      image: './images/furniture/chair/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'dining',
      image: './images/furniture/dining/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'dining',
      image: './images/furniture/dining/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'dining',
      image: './images/furniture/dining/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'dining',
      image: './images/furniture/dining/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'dining',
      image: './images/furniture/dining/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'sofa',
      image: './images/furniture/sofa/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'sofa',
      image: './images/furniture/sofa/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'sofa',
      image: './images/furniture/sofa/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'sofa',
      image: './images/furniture/sofa/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'sofa',
      image: './images/furniture/sofa/5.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'table',
      image: './images/furniture/table/1.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'table',
      image: './images/furniture/table/2.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'table',
      image: './images/furniture/table/3.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'table',
      image: './images/furniture/table/4.jpg',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavourite: false,
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
