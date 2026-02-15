import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userspecific } from './userspecific';

describe('Userspecific', () => {
  let component: Userspecific;
  let fixture: ComponentFixture<Userspecific>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userspecific]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userspecific);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
