import {Component, Injector, OnInit} from '@angular/core';
import {MovieService} from '../../../shared/services/movie.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Movie} from '../../../shared/models/movie';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

    private movies: Movie[];
    private keyword;

    constructor(private injector: Injector,
                private route: ActivatedRoute,
                private router: Router,
                private movieService: MovieService) {

        this.movieService = this.injector.get(MovieService);


    }

    ngOnInit() {
        let keyword = this.route.snapshot.paramMap.get('keyword');
        this.movieService.searchMovie(keyword).subscribe(data => {
            this.movies = data;
            this.keyword = keyword;
        }, (keyword) => {
            alert('There are no movies with searched keyword: ' + keyword);
            this.router.navigate(['movies']);
        });

    }

}
