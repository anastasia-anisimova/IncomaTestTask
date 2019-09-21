import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface ItemModel {
  id: number;
  name: string;
  type: string;
}

export interface ItemFilters {
  name?: string;
  type?: string;
}

@Injectable()
export class DataService {

  private readonly data$: Observable<ItemModel[]>;
  private filtersSubj: BehaviorSubject<ItemFilters> = new BehaviorSubject({});
  private dataSubject: BehaviorSubject<ItemModel[]>;

  private static findEntry(value: string, findValue: string): boolean {
    return findValue ? value.toLowerCase().indexOf(findValue.toLowerCase()) > -1 : true;
  }

  constructor() {
    this.dataSubject = new BehaviorSubject<ItemModel[]>([
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
    ]);

    this.data$ = combineLatest(this.dataSubject.asObservable(), this.filtersSubj).pipe(
      map(([arr, filters]) => this.filterData(arr, filters)),
    );
  }

  private filterData(arr: ItemModel[], filters: ItemFilters) {
    return arr.filter(val => DataService.findEntry(val.name, filters.name) && DataService.findEntry(val.type, filters.type));
  }

  getData() {
    return this.data$;
  }

  setFilters(filters: ItemFilters) {
    this.filtersSubj.next(filters);
  }

  getFilters() {
    return this.filtersSubj.getValue();
  }
}
