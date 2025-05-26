import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarIdosoComponent } from './adicionar-idoso.component';

describe('AdicionarIdosoComponent', () => {
  let component: AdicionarIdosoComponent;
  let fixture: ComponentFixture<AdicionarIdosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarIdosoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarIdosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
