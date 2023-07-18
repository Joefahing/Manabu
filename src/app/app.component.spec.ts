import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from 'src/project/project-page/project-page.component';

describe('AppComponent', () => {
  
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule(
    {
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectPageComponent,
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => 
  {
    expect(component).toBeTruthy();
  });

  it('should render Project-Page component', () =>
  {
    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
    const projectPageComponent = compiled.querySelector('project-page');
    expect(projectPageComponent).toBeTruthy();
  });
});
