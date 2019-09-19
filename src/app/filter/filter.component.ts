import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filtersGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.filtersGroup = this.fb.group({
        name: '',
        type: '',
      }
    );
  }

  onFiltersSubmit() {
    console.log(this.filtersGroup.controls);
  }

}
