import Project from "./project";

export default class Repository {
  constructor(glider) {
    this.baseUrl = 'https://api.github.com'
    this.userName = 'vlsvl'
    this.glider = glider

    this.projects = [];
  }

  #addProject(data) {
    const project = new Project(data)
    project.draw('#projectsList', this.glider)
    this.projects.push(project)

  }

  getReposProjects() {
    fetch(`${this.baseUrl}/users/${this.userName}/repos`)
      .then(res => res.json().then(data => {
          data.forEach(item => {
            this.#addProject(item)
          })
        })
      )
      .catch(reject => {
        console.log(reject)
      })
      .finally(() => {
        console.log('finaly')
      })
  }

}
