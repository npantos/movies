import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';
import {movieList} from '../examples';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class MovieService {

    private movieList: Movie[];

    constructor() {
        this.movieList = movieList.map((movie) => {
            return new Movie(
                movie.id,
                movie.name,
                movie.director,
                movie.imageUrl,
                movie.duration,
                new Date(movie.releseDate),
                movie.genres
            );
        });


    }

    getMovies() {
        return new Observable((o: Observer<any>) => {
            o.next(this.movieList);
            return o.complete();
        });
    }
}
