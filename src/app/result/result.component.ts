import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {merge, Observable} from 'rxjs';
import {DataService, ItemFilters, ItemModel} from '../main/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, shareReplay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {

  public results$: Observable<ItemModel[]>;
  public isEmpty$: Observable<boolean>;
  displayedColumns: string[];

  constructor(private service: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((val: ItemFilters) => this.service.setFilters(val));
    this.results$ = this.service.getData().pipe(shareReplay(1));
    this.isEmpty$ = this.results$.pipe(map(result => result.length < 1));

    this.displayedColumns = ['id', 'name', 'type'];
  }

  public openFilters() {
    this.router.navigate(['']);
  }

}
