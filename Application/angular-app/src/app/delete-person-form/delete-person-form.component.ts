import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-delete-person-form',
  templateUrl: './delete-person-form.component.html',
  styleUrls: ['./delete-person-form.component.css'],
})
export class DeletePersonFormComponent {
  personId : number = 0

  constructor(private personService:PersonService){}

  onSubmit(){
    if(this.personId){
      this.personService.deletePerson(this.personId).subscribe({
        next: (result) =>{
          window.location.href='/';
        }
      });
    }
  }
}
