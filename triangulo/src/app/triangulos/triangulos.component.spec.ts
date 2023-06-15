import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangulosComponent } from './triangulos.component';

describe('TriangulosComponent', () => {
  let component: TriangulosComponent;
  let fixture: ComponentFixture<TriangulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriangulosComponent]
    });
    fixture = TestBed.createComponent(TriangulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
