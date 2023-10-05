import { Component } from '@angular/core';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.css']
})
export class WhoamiComponent {
  
  experienceItems: ExperienceItem[] = [
    { position: 'Software Developer', 
      enterprise: 'Freelancer', 
      date: 'May,2023 - Actually',
      worktype:'Fulltime',
      contracttype:''
    }

  ];

  educationItems: EducationItem[] = [
    { 
      institution: 'Centro de Formación Técnica San Agustín', 
      grade: 'Analista programador',
      date: 'March, 2021 - May, 2023',
      status: 'Graduate'
    },
    
  ];

  certificationItems: CertificationItem[] = [
    { 
      title: 'Professional Foundations of Software Development',
      enterprise: '- Microsoft and LinkedIn',
      link: 'https://www.linkedin.com/learning/certificates/3d71ac87f36ec9cb7a43fe4eeaede33737479d71e0b6bb08cb311953a0eb257f'
    },
    {
      title: 'Scrum Foundation Professional Certificate',
      enterprise: '- SFPC',
      link:'https://www.credly.com/badges/f039d8f8-eabd-4dd9-a7cd-6947cc45a0fa/'
    },
    { 
      title:'Professional Foundations of Project Management',
      enterprise:'- Microsoft and LinkedIn',
      link:'https://www.linkedin.com/learning/certificates/0dc2564d923fa1d4b2e07904ba38dbb0828f030bd3f6ded910578c5cb90eee25'
    },
    { 
      title:'More...',
      enterprise:'',
      link:'https://www.linkedin.com/in/diegoignaciorojasgonzalez/details/certifications/'
    }
    
  ];
}

interface EducationItem {
  institution: string;
  date: string;
  grade:string;
  status:string;

}

interface CertificationItem {
  title: string;
  enterprise: string;
  link: string;
}

interface ExperienceItem {
  position: string;
  enterprise: string;
  date: string;
  worktype: string;
  contracttype: string;
}
