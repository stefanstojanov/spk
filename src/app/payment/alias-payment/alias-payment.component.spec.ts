import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasPaymentComponent } from './alias-payment.component';

describe('AliasPaymentComponent', () => {
  let component: AliasPaymentComponent;
  let fixture: ComponentFixture<AliasPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
