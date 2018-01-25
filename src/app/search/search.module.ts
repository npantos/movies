import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { SearchPageComponent } from './components/search-page/search-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    declarations: [SearchComponent, SearchPageComponent],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {
}
