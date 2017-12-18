import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestformforadminComponent } from './requestformforadmin.component';

describe('RequestformforadminComponent', () => {
  let component: RequestformforadminComponent;
  let fixture: ComponentFixture<RequestformforadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestformforadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestformforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
