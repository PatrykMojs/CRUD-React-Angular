import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-person-form',
  templateUrl: './add-person-form.component.html',
  styleUrls: ['./add-person-form.component.css'],
})
export class AddPersonFormComponent {
  person={
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    origin: '',
  }

  constructor(private personService:PersonService){}

  onSubmit(){
    this.personService.addPerson(this.person).subscribe({
      next: (result:any) =>{
        window.location.href='/';
      }
    });
  }
}
