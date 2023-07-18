import { Injectable } from '@angular/core';
import { Project } from 'src/share/types';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public createDefaultProject(userID: string): Project {
    const defaultProject: Project =
    {
      icon: 'article',
      name: 'Default Project',
      projectID: -1,
      tags: [],
      userID: userID
    }

    return defaultProject;
  }
}
