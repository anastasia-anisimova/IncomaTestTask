import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService, ItemFilters} from '../main/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filtersGroup: FormGroup;

  private currentFilters: ItemFilters;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.currentFilters = this.dataService.getFilters();

    this.filtersGroup = this.fb.group({
        name: this.currentFilters.name,
        type: this.currentFilters.type,
      }
    );


  }

  onFiltersSubmit() {
    const queryParams: ItemFilters = {};
    if (this.filtersGroup.get('name').value) {
      queryParams.name = this.filtersGroup.get('name').value;
    }
    if (this.filtersGroup.get('type').value) {
      queryParams.type = this.filtersGroup.get('type').value;
    }
    this.router.navigate(['/result'], {queryParams});
  }

}
