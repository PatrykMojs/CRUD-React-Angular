import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person-form',
  templateUrl: './update-person-form.component.html',
  styleUrls: ['./update-person-form.component.css'],
})
export class UpdatePersonFormComponent {

  person={
    id: null,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    origin: '',
  }

  constructor(private personService:PersonService){}

  onSubmit(){
    if(this.person.id){
      this.personService.updatePerson(this.person.id, this.person).subscribe({
        next: (result) =>{
          window.location.href='/';
        }
      });
    }
  }
}
