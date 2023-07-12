import 
{ 
  Component, 
  HostBinding, 
  OnInit 
} 
from                                                  '@angular/core';
import { Project } from                               'src/share/types';

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.sass']
})
export class ProjectPageComponent implements OnInit {
  
  public projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = sampleProject;
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
    userID: '2',
    projectID: 1,
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
  }
];
