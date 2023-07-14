import {
  Component,
  HostBinding,
  OnInit
}
  from '@angular/core';
import { Project } from 'src/share/types';
import { ProjectService } from '../project.service';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.sass']
})
export class ProjectPageComponent implements OnInit 
{

  public projects: Project[] = [];
  // To be cleanup: since I'm the only
  private userID: string = '1';
  //private projectService: ProjectService

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void 
  {
    this.projects = sampleProject;
  }

  /** Event Handler Section */
  public onNewProjectClick(): void 
  {
    const newProject = this.projectService.createDefaultProject(this.userID);
    this.projects.push(newProject);
  }

  public onProjectClick(project: Project): void {
    
    // To be implement: will add function to navigate to individual project page later 
    console.log(project);
  }

  public onProjectSettingClick(): void 
  {

  }
}

const sampleProject: Project[] =
[
  {
    userID: '1',
    projectID: 1,
    name: 'Learn How to Learn',
    icon: 'article',
    tags: [
      {
        userID: '1',
        tagID: 1,
        name: 'Learn'
      },
      {
        userID: '1',
        tagID: 2,
        name: 'Focus'
      }
    ],
  },
  {
    userID: '1',
    projectID: 2,
    name: 'Physcis',
    icon: 'article',
    tags: [
      {
        userID: '2',
        tagID: 1,
        name: 'School'
      },
      {
        userID: '2',
        tagID: 2,
        name: 'Math'
      }
    ],
  },
  {
    userID: '1',
    projectID: 3,
    name: 'Default Project',
    icon: 'article',
    tags: [
    ],
  }
  
];
