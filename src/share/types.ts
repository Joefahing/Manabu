export interface Project
{
    userID: string,
    projectID: number,
    name: string,
    icon: string,
    tags: Tag[],
}

export interface Tag 
{
    userID: string,
    tagID: number,
    name: string
}