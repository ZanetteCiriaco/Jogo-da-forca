import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarLetraComponent } from './pegar-letra.component';

describe('PegarLetraComponent', () => {
  let component: PegarLetraComponent;
  let fixture: ComponentFixture<PegarLetraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegarLetraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
