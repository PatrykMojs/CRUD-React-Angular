import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonFormComponent } from './update-person-form.component';

describe('UpdatePersonFormComponent', () => {
  let component: UpdatePersonFormComponent;
  let fixture: ComponentFixture<UpdatePersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePersonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
