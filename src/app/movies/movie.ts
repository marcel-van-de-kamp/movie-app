/**
 * NOTE: properties are optional with below syntax when explicitly creating a new instance
 * and can only be assigned after creating a new instance:
 *
 * let movie = new Movie();
 * movie.id = 1;
 * movie.name = ...;
 * 
 * @export
 * @class Movie
 */
// export class Movie {
//   id: number;
//   name: string;
//   genre: string;
//   rating: number;
// }

/**
 * NOTE: properties can be made required when explicitly creating a new instance with a constructor:
 * 
 * let movie = new Movie(1, 'hello', 'horror', 6)
 * 
 * @export
 * @class Movie
 * @param id
 * @param name
 * @param genre
 * @param rating
 */
export class Movie {
  public id: number;
  public name: string;
  public genre: string;
  public rating: number;

    constructor(id: number = 0, name: string = '', genre: string = '', rating: number = 1) {
        this.id = id;
        this.genre = genre;
        this.name = name;
        this.rating = rating;
    }
}

