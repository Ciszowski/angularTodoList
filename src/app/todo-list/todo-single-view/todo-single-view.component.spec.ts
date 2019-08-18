import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSingleViewComponent } from './todo-single-view.component';

describe('TodoSingleViewComponent', () => {
  let component: TodoSingleViewComponent;
  let fixture: ComponentFixture<TodoSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
