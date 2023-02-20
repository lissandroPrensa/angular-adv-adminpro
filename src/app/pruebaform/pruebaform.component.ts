import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { ConnectableObservable } from 'rxjs';


@Component({
  selector: 'app-pruebaform',
  templateUrl: './pruebaform.component.html',
  styleUrls: [ './pruebaform.component.css'
  ]
})
export class PruebaformComponent {
  


  pruebaform = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    city: new FormControl('')
  });

  formDataobejt: any;

  ngOnInit() {
    this.formDataobejt = localStorage.getItem('formData');
  }

  onSubmit(): void {
    localStorage.setItem('formData', JSON.stringify(this.pruebaform.value));
  }

}

   
  


