import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPartnerListComponent } from './product-partner-list.component';

describe('ProductPartnerListComponent', () => {
  let component: ProductPartnerListComponent;
  let fixture: ComponentFixture<ProductPartnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPartnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPartnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
