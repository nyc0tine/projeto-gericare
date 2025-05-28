import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIdosoComponent } from './info-idoso.component';

describe('InfoIdosoComponent', () => {
  let component: InfoIdosoComponent;
  let fixture: ComponentFixture<InfoIdosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoIdosoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoIdosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
