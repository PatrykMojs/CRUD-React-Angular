import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonFormComponent } from './delete-person-form.component';

describe('DeletePersonFormComponent', () => {
  let component: DeletePersonFormComponent;
  let fixture: ComponentFixture<DeletePersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePersonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
