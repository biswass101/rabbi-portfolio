import { useState, useEffect } from "react";
import { api } from "../api/axios";
import type {
  IContactItem,
  ICompetency,
  ISkillCategory,
  IExperience,
  IProject,
  IEducation,
  ICertification,
  ISoftSkill,
  ILanguage,
  IInterset,
} from "../types/index";

export const useUserData = (userId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRes, setUserRes] = useState<{name: string; img: string; designation: string; summary: string}>()
  const [contacts, setContacts] = useState<IContactItem[]>([]);
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);
  const [skillCategories, setSkillCategories] = useState<ISkillCategory[]>([]);
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [certifications, setCertifications] = useState<ICertification[]>([]);
  const [softSkills, setSoftSkills] = useState<ISoftSkill[]>([]);
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [interests, setInterests] = useState<IInterset[]>([]);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [
            userRes,
          contactsRes,
          competenciesRes,
          skillCategoriesRes,
          experiencesRes,
          projectsRes,
          educationsRes,
          certificationsRes,
          softSkillsRes,
          languagesRes,
          interestsRes,
        ] = await Promise.all([
          api.get(`/users/${userId}`),
          api.get(`/contacts?userId=${userId}`),
          api.get(`/competencies?userId=${userId}`),
          api.get(`/skillCategories?userId=${userId}`),
          api.get(`/experiences?userId=${userId}`),
          api.get(`/projects?userId=${userId}`),
          api.get(`/educations?userId=${userId}`),
          api.get(`/certifications?userId=${userId}`),
          api.get(`/softSkills?userId=${userId}`),
          api.get(`/languages?userId=${userId}`),
          api.get(`/interests?userId=${userId}`),
        ]);
        setUserRes(userRes.data.data || []);
        setContacts(contactsRes.data.data || []);
        setCompetencies(competenciesRes.data.data || []);
        setSkillCategories(skillCategoriesRes.data.data || []);
        setExperiences(experiencesRes.data.data || []);
        setProjects(projectsRes.data.data || []);
        setEducations(educationsRes.data.data || []);
        setCertifications(certificationsRes.data.data || []);
        setSoftSkills(softSkillsRes.data.data || []);
        setLanguages(languagesRes.data.data || []);
        setInterests(interestsRes.data.data || []);
      } catch (err) {
        console.error("Error fetching user data", err);
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return {
    isLoading,
    userRes,
    contacts,
    competencies,
    skillCategories,
    experiences,
    projects,
    educations,
    certifications,
    softSkills,
    languages,
    interests,
  };
};
