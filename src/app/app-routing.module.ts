import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilterComponent} from './filter/filter.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {
    path: 'result',
    component: ResultComponent,
    pathMatch: 'full',
  }, {
    path: '',
    component: FilterComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: FilterComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
