import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    'android', 'angular', 'boostrap','csharp',
    'css', 'django', 'git', 'html', 'java', 'javascript',
    'mysql', 'postgresql', 'python', 'react', 'typescript'
  ];

  urlImg = 'https://raw.githubusercontent.com/DiegoRojasGonzalez/Resources/main/DiegoRojasGonzalez.github.io/skills/';
  shuffledSkills: string[] = [];
  currentSkillIndex: number = 0;  

  ngOnInit() {
    this.shuffleSkills();
  }

  shuffleSkills() {
    this.shuffledSkills = this.skills.slice(); 
    for (let i = this.shuffledSkills.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledSkills[i], this.shuffledSkills[j]] = [this.shuffledSkills[j], this.shuffledSkills[i]];
    }
  }

  getNextSkill(): string {
    if (this.currentSkillIndex >= this.shuffledSkills.length) {
      this.shuffleSkills();
      this.currentSkillIndex = 0;
    }
    return this.shuffledSkills[this.currentSkillIndex++];
  }
}
