import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPageComponent } from './project-page.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Project } from 'src/share/types';
import { MaterialModule } from 'src/share/material-module';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;
  let expectedNewProject: Project

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ ProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() =>
  {
    expectedNewProject = 
    {
      icon: 'article',
      name: 'Default Project',
      projectID: -1,
      tags: [],
      userID: '1'
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('New Project button should add new project to projects', () => 
  {
    const compile = fixture.debugElement as DebugElement;
    const expectProjectsCount = component.projects.length + 1;
    
    compile.query(By.css('#new-project')).triggerEventHandler('click');

    expect(component.projects.length).toEqual(expectProjectsCount);
  });

  it('New Project added should have name equal to Default Name and Project ID equal to -1', () => 
  {
    const compile = fixture.debugElement as DebugElement;
    
    compile.query(By.css('#new-project')).triggerEventHandler('click');

    const lastIndex = component.projects.length - 1;
    const actualNewProject = component.projects[lastIndex];
    
    expect(actualNewProject.name).toMatch(expectedNewProject.name);
    expect(actualNewProject.projectID).toEqual(expectedNewProject.projectID);
  });

});
