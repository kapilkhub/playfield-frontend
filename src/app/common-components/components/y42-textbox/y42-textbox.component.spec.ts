import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y42TextboxComponent } from './y42-textbox.component';

describe('Y42TextboxComponent', () => {
  let component: Y42TextboxComponent;
  let fixture: ComponentFixture<Y42TextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y42TextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y42TextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
