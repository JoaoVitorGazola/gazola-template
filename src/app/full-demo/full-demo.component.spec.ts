import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDemoComponent } from './full-demo.component';

describe('FullDemoComponent', () => {
  let component: FullDemoComponent;
  let fixture: ComponentFixture<FullDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
