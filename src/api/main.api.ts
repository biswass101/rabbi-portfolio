import { api } from "./axios";

export const getUserProfile = async (id: string) => {
    const res = await api.get(`/users/${id}`);
    return res.data.data;
}

export const getCertifications = async (userId: string) => {
  const res = await api.get(`/certifications?userId=${userId}`);
  return res.data.data;
};

export const getCompetencies = async (userId: string) => {
  const res = await api.get(`/competencies?userId=${userId}`);
  return res.data.data;
};

export const getContacts = async (userId: string) => {
    const res = await api.get(`/contacts?userId=${userId}`);
    return res.data.data;
}

export const getEducations = async (userId: string) => {
  const res = await api.get(`/educations?userId=${userId}`);
  return res.data.data;
};

export const getExperiences = async (userId: string) => {
  const res = await api.get(`/experiences?userId=${userId}`);
  return res.data.data;
};

export const getInterests = async (userId: string) => {
  const res = await api.get(`/interests?userId=${userId}`);
  return res.data.data;
};

export const getLanguages = async (userId: string) => {
  const res = await api.get(`/languages?userId=${userId}`);
  return res.data.data;
};

export const getProjects = async (userId: string) => {
  const res = await api.get(`/projects?userId=${userId}`);
  return res.data.data;
};

export const getSkillCategories = async (userId: string) => {
  const res = await api.get(`/skillCategories?userId=${userId}`);
  return res.data.data;
};

export const getSoftSkills = async (userId: string) => {
  const res = await api.get(`/softSkills?userId=${userId}`);
  return res.data.data;
};
