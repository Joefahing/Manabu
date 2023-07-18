import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { Project } from 'src/share/types';

describe('ProjectServiceService', () => 
{
  let service: ProjectService;
  let expectedProject: Project;
  let userID: string;

  beforeEach(() => 
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);

    userID = '1';

    expectedProject = 
    {
      icon: 'article',
      name: 'Default Project',
      projectID: -1,
      tags: [],
      userID: '1'
    }
  });

  it('should be created', () => 
  {
    expect(service).toBeTruthy();
  });

  it('createDefaultProject should create default project object with input UserID', () =>
  {
    const actualProject: Project = service.createDefaultProject(userID);
    
    expect(actualProject.userID).toMatch(expectedProject.userID);
  });

  it('createDefaultProject should create default project object with article icon', () =>
  {
    const actualProject: Project = service.createDefaultProject(userID);
    
    expect(actualProject.icon).toMatch(expectedProject.icon);
  });

  it('createDefaultProject should create default project object with name Default Project', () =>
  {
    const actualProject: Project = service.createDefaultProject(userID);
    
    expect(actualProject.name).toMatch(expectedProject.name);
  });

  it('createDefaultProject should create default project object with projectID -1', () =>
  {
    const actualProject: Project = service.createDefaultProject(userID);
    
    expect(actualProject.projectID).toEqual(expectedProject.projectID);
  });
});
