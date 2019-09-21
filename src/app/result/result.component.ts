import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {DataService, ItemFilters, ItemModel} from '../main/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ResultComponent implements OnInit, OnDestroy {

  results$: Observable<ItemModel[]>;
  isEmpty$: Observable<boolean>;
  displayedColumns: string[];

  private subscriptions: Subscription = new Subscription();

  constructor(private service: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'type'];

    this.subscriptions.add(this.activatedRoute.queryParams.subscribe(
      (val: ItemFilters) => this.service.setFilters(val))
    );
    this.results$ = this.service.getData().pipe(
      shareReplay(1),
    );
    this.isEmpty$ = this.results$.pipe(
      map(result => result.length < 1),
    );
  }

  openFilters() {
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
