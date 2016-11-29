import { Injectable } from '@angular/core';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies():Movie[] {

    const MOVIES:Movie[] = [
        {
          id: 1,
          name: 'Terminator 2',
          genre: 'SciFi',
          rating: 9
        },
        {
          id: 2,
          name: 'Pulp Fiction',
          genre: 'Arthouse',
          rating: 8
        },
        { 
          id: 3,
          name: 'The Matrix',
          genre: 'SciFi',
          rating: 7
        }
      ]

      return MOVIES;
  }

  getFavMovies():Movie[] {

    const MOVIES:Movie[] = [
        {
          id: 1,
          name: 'Star Wars',
          genre: 'SciFi',
          rating: 9
        },
        {
          id: 2,
          name: 'Armageddon',
          genre: 'Scifi',
          rating: 8
        },
        { 
          id: 3,
          name: 'Twister',
          genre: 'SciFi',
          rating: 7
        }
      ]

      return MOVIES;
    
  }

}
