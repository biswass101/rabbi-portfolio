
export interface IContactItem {
  _id: string;
  iconUrl?: string; // URL if dynamic icon
  detail: string;
  href: string;
}

export interface ICompetency {
  icon?: string;
  title: string;
  description: string;
}

export interface ISkillCategory {
  icon?: string;
  title: string;
  skills: string[];
  color: string;
}

export interface IExperience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface IProject {
  icon?: string;
  title: string;
  description: string;
  color: string;
}

export interface IEducation {
  degree: string;
  institution: string;
  major: string;
  year: string;
}

export interface ICertification {
  icon?: string;
  title: string;
  provider: string;
  duration: string;
  color: string;
}

export interface ISoftSkill {
  icon?: string;
  title: string;
}

export interface IInterset {
    title: string;
}

export interface ILanguage {
  language: string;
  writing: string;
  reading: string;
  speaking: string;
}
