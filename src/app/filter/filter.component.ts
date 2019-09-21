import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {ItemFilters} from '../main/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filtersGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.filtersGroup = this.fb.group({
        name: '',
        type: '',
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
    this.router.navigate(['/result'], { queryParams });
  }

}
