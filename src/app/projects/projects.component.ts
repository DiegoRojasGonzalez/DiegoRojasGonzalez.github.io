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
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/DevJobs-Chile/devjobschiless%20(1).png',
      gif: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/DevJobs-Chile/devjobschiless%20(3).png',
      title: 'DevJobs-Chile',
      description:'DevJobs Chile is an online platform that connects IT and software development professionals with companies in search of talent in Chile. Our platform utilizes real-time web scraping techniques to provide job opportunities in various areas, such as programming, web design, data analysis, and more',
      technologies: ['https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png','https://th.bing.com/th/id/OIP.I5XOh9o_kbTNsXnsIc53aAHaHa?pid=ImgDet&rs=1', 'https://manz.dev/assets/software/vitejs.png','https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png','https://images.ctfassets.net/1wryd5vd9xez/4PwY5sMapQmGSS7861OPga/a5aafc72fe1d0e0c3c714dc4986f9fde/https___cdn-images-1.medium.com_max_2000_1_kk8ovQKB-45FsZ8TZM-vjg.png','https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2152454423/settings_images/F1USRDEYRxObo2cGd3kZ_expressjs-logo.png',],
      githubLink: 'https://github.com/DiegoRojasGonzalez/DevJobs-Chile',
      applink: 'https://diegorojasgonzalez.github.io/DevJobs-Chile/',
    },
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
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-time-zone.png',
      gif: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-time-zone.png',
      title: 'Time-Zone',
      description:'Time-Zone is your solution for quickly and easily checking the current time on your Android device. This Kotlin-based application displays the time in a large and easy-to-read format, automatically adjusting to your devices time zone format.',
      technologies: ['https://img.icons8.com/?size=512&id=P2AnGyiJxMpp&format=png','https://img.icons8.com/?size=512&id=ZoxjA0jZDdFZ&format=png'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/Time-Zone',
      applink: 'https://github.com/DiegoRojasGonzalez/Time-Zone',
    },
    {
      image: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-white-space.png',
      gif: 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/ss-white-space.png',
      title: 'White Space',
      description:'White-Space is your go-to solution for comprehensive whitespace removal. This powerful application is purpose-built to eliminate all spaces and line breaks from your text and code. Whether youre cleaning up codebases, preparing content for web publication, or optimizing prompts for chat GPT and other applications',
      technologies: ['https://img.icons8.com/?size=512&id=108784&format=png','https://img.icons8.com/?size=512&id=rY6agKizO9eb&format=png'],
      githubLink: 'https://github.com/DiegoRojasGonzalez/White-Space',
      applink: 'https://diegorojasgonzalez.github.io/White-Space/',
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

