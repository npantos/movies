import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LayoutComponent} from './components/layout/layout.component';
import {MoviesComponent} from './components/movies/movies.component';
import {SharedModule} from './shared/shared.module';
import {SearchModule} from './search/search.module';
import {SearchPageComponent} from './search/components/search-page/search-page.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'search/:keyword',
        component: SearchPageComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        MoviesComponent,


    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes
        ),
        SharedModule,
        SearchModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
