import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {




  ngOnInit() {
    setInterval(() => {
      this.nextElementButton();
    }, 5000); 
  }



  elements = [
    {
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-task-wise-light.png',
      gif: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-task-wise-light.png',
      title: 'Task wise',
      description: 'Task-Wise application, designed to simplify your task management process. With this user-friendly app, you can easily create, organize, and prioritize tasks that need your attention. Whether its for personal use, work-related projects, or team collaboration, our app offers a straightforward and intuitive platform for jotting down your tasks.',
      technologies: ['https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png', 'https://img.icons8.com/?size=512&id=71257&format=png'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/Task-Wise',
      applink: 'https://diegorojasgonzalez.github.io/Task-Wise/',
    },
    {
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-focus-nice.png',
      gif: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-focus-nice.png',
      title: 'Focus Nice',
      description: 'Focus Nice is a Pomodoro app developed in Python using Kvlang (Kivy/KivyMD) framework. The app is designed to enhance productivity and maintain a focused approach to tasks by implementing the Pomodoro technique. It allows users to divide their time into intervals of work and rest, helping them maintain a proper balance and avoid mental fatigue.',
      technologies: ['https://img.icons8.com/?size=512&id=13441&format=png','https://camo.githubusercontent.com/e08cad103f2f532b4d9aeee9fba90588afc9e8c5ef3b0f6524fce2e0be540c6a/68747470733a2f2f7175696e746167726f75702e636f6d2f636d732f707974686f6e2f696d616765732f6b6976792d6c6f676f2e706e672f4040696d616765732f35323035366238372d353837322d346532342d383438332d3263323065363266613739642e706e67'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/Focus-Nice',
      applink: '',
    },
    {
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-white-space.png',
      gif: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-white-space.png',
      title: 'White Space',
      description:'White-Space is your go-to solution for comprehensive whitespace removal. This powerful application is purpose-built to eliminate all spaces and line breaks from your text and code. Whether youre cleaning up codebases, preparing content for web publication, or optimizing prompts for chat GPT and other applications',
      technologies: ['https://img.icons8.com/?size=512&id=108784&format=png','https://img.icons8.com/?size=512&id=rY6agKizO9eb&format=png'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/White-Space',
      applink: 'https://diegorojasgonzalez.github.io/White-Space/',
    }
  ];
  currentElement = 0;
  hoverVideo = false; 

  nextElementButton() {
    this.currentElement = (this.currentElement + 1) % this.elements.length;
  }
  previousElementButton() {
    this.currentElement = (this.currentElement - 1 + this.elements.length) % this.elements.length;
  }
}

