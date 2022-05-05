import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruditemComponent } from './cruditem.component';

describe('CruditemComponent', () => {
  let component: CruditemComponent;
  let fixture: ComponentFixture<CruditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
