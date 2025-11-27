import {
  getCertifications,
  getCompetencies,
  getContacts,
  getEducations,
  getExperiences,
  getInterests,
  getLanguages,
  getProjects,
  getSkillCategories,
  getSoftSkills,
  getUserProfile,
} from "@/api/main.api";
import { useQuery } from "@tanstack/react-query";

export const useProfile = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-profile", id],
    queryFn: () => getUserProfile(id),
  });

  return {
    userProfile: data,
    isLoading,
    error,
  };
};

export const useCertifications = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["certifications", userId],
    queryFn: () => getCertifications(userId),
  });

  return {
    certifications: data || [],
    isLoading,
    error,
  };
};

export const useCompetencies = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["competencies"],
    queryFn: () => getCompetencies(userId),
  });

  return {
    competencies: data || [],
    isLoading,
    error,
  };
};

export const useContacts = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContacts(userId),
  });

  return {
    contacts: data || [],
    isLoading,
    error,
  };
};

export const useEducations = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["educations"],
    queryFn: () => getEducations(userId),
  });

  return {
    educations: data || [],
    isLoading,
    error,
  };
};

export const useExperiences = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["experiences"],
    queryFn: () => getExperiences(userId),
  });

  return {
    experiences: data || [],
    isLoading,
    error,
  };
};

export const useInterests = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["interests"],
    queryFn: () => getInterests(userId),
  });

  return { interests: data || [], isLoading, error };
};

export const useLanguages = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["languages"],
    queryFn: () => getLanguages(userId),
  });

  return { languages: data || [], isLoading, error };
};

export const useProjects = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(userId),
  });

  return {
    projects: data || [],
    isLoading,
    error,
  };
};

export const useSkillCategories = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["skillCategories"],
    queryFn: () => getSkillCategories(userId),
  });

  return {
    skillCategories: data || [],
    isLoading,
    error,
  };
};

export const useSoftSkills = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["soft-skills"],
    queryFn: () => getSoftSkills(userId),
  });

  return {
    softSkills: data || [],
    isLoading,
    error,
  };
};