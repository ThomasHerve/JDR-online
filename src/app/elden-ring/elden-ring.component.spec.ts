import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenRingComponent } from './elden-ring.component';

describe('EldenRingComponent', () => {
  let component: EldenRingComponent;
  let fixture: ComponentFixture<EldenRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EldenRingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EldenRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
