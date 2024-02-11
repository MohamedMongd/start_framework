import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofliComponent } from './portofli.component';

describe('PortofliComponent', () => {
  let component: PortofliComponent;
  let fixture: ComponentFixture<PortofliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofliComponent]
    });
    fixture = TestBed.createComponent(PortofliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
