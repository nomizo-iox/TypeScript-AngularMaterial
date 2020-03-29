import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-demo';
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'}
  ];

  objectOptions2 = [
    {name2: 'Angular'},
    {name2: 'Angular Material'},
    {name2: 'React'},
    {name2: 'Vue'}
  ];
  // tslint:disable-next-line:new-parens
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
    option.toLowerCase().includes(filterValue));
  }

  // @ts-ignore
  displayFunc(subject) {
    return subject ? subject.name : undefined;
  }
  displayFunc2(subject) {
    return subject ? subject.name2 : undefined;
  }
}
