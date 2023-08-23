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
      gif: '../assets/glass.gif',
      title: 'Task wise',
      description: 'Task-Wise application, designed to simplify your task management process. With this user-friendly app, you can easily create, organize, and prioritize tasks that need your attention. Whether its for personal use, work-related projects, or team collaboration, our app offers a straightforward and intuitive platform for jotting down your tasks.',
      technologies: ['../../assets/skills/typescript.png', '../../assets/skills/angular.png'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/Task-Wise',
      applink: 'https://diegorojasgonzalez.github.io/Task-Wise/',
    },
    {
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-focus-nice.png',
      gif: '../assets/glass1.gif',
      title: 'Focus Nice',
      description: 'Focus Nice is a Pomodoro app developed in Python using Kvlang (Kivy/KivyMD) framework. The app is designed to enhance productivity and maintain a focused approach to tasks by implementing the Pomodoro technique. It allows users to divide their time into intervals of work and rest, helping them maintain a proper balance and avoid mental fatigue.',
      technologies: ['../../assets/skills/python.png', '../../assets/skills/android.png'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/Focus-Nice',
      applink: '',
    },
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
