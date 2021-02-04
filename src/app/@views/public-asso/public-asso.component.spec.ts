import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAssoComponent } from './public-asso.component';

describe('PublicAssoComponent', () => {
  let component: PublicAssoComponent;
  let fixture: ComponentFixture<PublicAssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAssoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
