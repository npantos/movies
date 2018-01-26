import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';
import {movieList} from '../examples';

import {Observable, Observer} from 'rxjs/Rx';

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

    searchMovie(keyword) {
        const foundMovies = this.movieList.filter((movie: Movie) => {
            return movie.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase());
        });

        if (foundMovies.length === 0) {
            return Observable.throw(keyword);
        }


        return new Observable((o: Observer<any>) => {
            o.next(foundMovies);
            return o.complete();
        });
    }
}
