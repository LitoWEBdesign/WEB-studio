import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdeleteComponent } from './requestdelete.component';

describe('RequestdeleteComponent', () => {
  let component: RequestdeleteComponent;
  let fixture: ComponentFixture<RequestdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
