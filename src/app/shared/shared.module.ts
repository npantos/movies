import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieService} from './services/movie.service';
import {MovieRowComponent} from './components/movie-row/movie-row.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [MovieService],
    declarations: [MovieRowComponent],
    exports: [
        MovieRowComponent
    ]

})
export class SharedModule {
}
