import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFormComponent } from './geo-form.component';

describe('GeoFormComponent', () => {
  let component: GeoFormComponent;
  let fixture: ComponentFixture<GeoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
