import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultQuizPageComponent } from './default-quiz-page.component';

describe('DefaultQuizPageComponent', () => {
  let component: DefaultQuizPageComponent;
  let fixture: ComponentFixture<DefaultQuizPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultQuizPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
