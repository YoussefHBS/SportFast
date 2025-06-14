import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaComponent } from './nina.component';

describe('NinaComponent', () => {
  let component: NinaComponent;
  let fixture: ComponentFixture<NinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
