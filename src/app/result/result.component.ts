import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService, ItemModel} from '../main/data.service';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {

  public results$: Observable<ItemModel[]>;
  displayedColumns: string[];

  constructor(private service: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      tap(params => console.log(params)),
      // map(val => ({name: val.name, type: val.type})),
      // map(val => this.service.setFIlters(val)),
    ).subscribe();

    this.displayedColumns = ['id', 'name', 'type'];
    this.results$ = this.service.getData();
  }

}
