import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreateListComponent } from './recipe-create-list.component';

describe('RecipeCreateListComponent', () => {
  let component: RecipeCreateListComponent;
  let fixture: ComponentFixture<RecipeCreateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCreateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
