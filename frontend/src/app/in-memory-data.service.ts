import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable()
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const RESTAURANTS = [

      { id: 1, name: 'ABC Cafe', address: "118 ABC LANE", telephone: 1111111 },
      { id: 2, name: 'Noodle', address: "2 Noodle Bowl Strret", telephone: 2121212 },
      { id: 3, name: 'Le French Bistro', address: "33 Fatt Gwok Yan", telephone: 3000300 },
      { id: 4, name: 'Celeritas', address: "40 Cee Lee Lane", telephone: 4242424 },
      { id: 5, name: 'Ice Tea Room', address: "5 Garden Road", telephone: 5555555 }, 
      { id: 6, name: 'Batman Cafe', address: "Bat forest LANE", telephone: 1166666 },
      { id: 7, name: 'Italian Cuisine', address: "7 Yee Daa Lee Strret", telephone: 7000721 },
      { id: 8, name: 'Pizza House', address: "19A Tomato Road", telephone: 87654321 },
      { id: 9, name: 'SwordFish', address: "74 River Sea", telephone: 3008764 },
      { id: 10, name: 'Dim Dum ', address: "4 Doom Lane", telephone: 97222115 }, 
  ];
  return { RESTAURANTS };
  }

  constructor() { }

}
