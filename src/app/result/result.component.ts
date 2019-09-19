import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService, ItemModel} from '../main/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {

  public results$: Observable<ItemModel[]>;

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.results$ = this.service.getData();
  }

}
