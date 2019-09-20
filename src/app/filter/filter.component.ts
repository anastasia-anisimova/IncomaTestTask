import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';

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
    this.router.navigate(['', {
      name: this.filtersGroup.get('name').value,
      type: this.filtersGroup.get('type').value,
    }]);
    console.log(this.filtersGroup.controls);
  }

}
