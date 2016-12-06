import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
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
      ];

      let moviesFav = [
        {
            id: 1,
            title: 'terminator',
            genre: 'scifi',
            rating: 9
        },
        {
            id: 2,
            title: 'star wars',
            genre: 'scifi',
            rating: 8
        },
        {
            id: 3,
            title: 'pulp fiction',
            genre: 'drama',
            rating: 7
        },
        {
            id: 4,
            title: 'shrek',
            genre: 'animation',
            rating: 5
        }
      ]

      return {movies, moviesFav};
  }
}