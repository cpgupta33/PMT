import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.less']
})
export class ManageComponent implements OnInit {

  regionControl = new FormControl('', [Validators.required]);

  regions = [
    {name: 'EMEA'},
    {name: 'ASIAPAC'},
    {name: 'NAEAST'},
    {name: 'NSA'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
