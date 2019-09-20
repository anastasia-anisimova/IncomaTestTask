import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export interface ItemModel {
  id: number;
  name: string;
  type: string;
}

export interface ItemFilters {
  name: string;
  type: string;
}

@Injectable()
export class DataService {

  public data$: Observable<ItemModel[]>;
  private filtersSubj: Subject<ItemFilters> = new BehaviorSubject<ItemFilters>(null);

  public data: ItemModel[] = [
    {
      id: 1,
      name: 'apple',
      type: 'fruit'
    },
    {
      id: 2,
      name: 'banana',
      type: 'fruit'
    },
    {
      id: 3,
      name: 'apple',
      type: 'fruit'
    },
    {
      id: 4,
      name: 'lemon',
      type: 'fruit'
    },
    {
      id: 5,
      name: 'grape',
      type: 'fruit'
    },
    {
      id: 6,
      name: 'tomato',
      type: 'vegetables'
    },
    {
      id: 7,
      name: 'cucumber',
      type: 'vegetables'
    },
    {
      id: 8,
      name: 'cabbage',
      type: 'vegetables'
    },
    {
      id: 9,
      name: 'carrot',
      type: 'vegetables'
    },
    {
      id: 10,
      name: 'onion',
      type: 'vegetables'
    },
  ];

  constructor() {
    this.data$ = this.filtersSubj.pipe(
      map(filters => this.data),
    );
  }

  getData() {
    return this.data$;
  }

  setFIlters(filters: ItemFilters) {
    this.filtersSubj.next(filters);
  }
}
