
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Resume interface
export interface Resume {
  id: string;
  userId: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: Date | string;
    endDate: Date | string;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    field: string;
    graduationDate: Date | string;
  }>;
  skills: string[];
  additionalSections?: {
    [key: string]: any;
  };
  selectedTemplate: string;
  styleCustomizations: {
    primaryColor: string;
    fontFamily: string;
    fontSize: string;
    spacing: number;
  };
}

// Initial blank resume
const initialResume: Resume = {
  id: '',
  userId: '',
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
  },
  experience: [],
  education: [],
  skills: [],
  additionalSections: {},
  selectedTemplate: 'modern',
  styleCustomizations: {
    primaryColor: '#9b87f5',
    fontFamily: 'Inter, sans-serif',
    fontSize: 'medium',
    spacing: 1,
  },
};

// Dummy resume data for testing
export const DUMMY_RESUME: Resume = {
  id: "1",
  userId: "user123",
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    location: "New York, NY"
  },
  experience: [
    {
      id: "exp1",
      company: "Tech Corp",
      position: "Senior Developer",
      startDate: new Date("2020-01-01"),
      endDate: new Date("2023-01-01"),
      description: "Led development team of 5 engineers working on front-end web applications. Implemented new React-based architecture that improved performance by 35%. Mentored junior developers and established code review practices."
    },
    {
      id: "exp2",
      company: "Digital Solutions Inc",
      position: "Web Developer",
      startDate: new Date("2017-03-15"),
      endDate: new Date("2019-12-31"),
      description: "Developed responsive web applications using JavaScript, HTML, and CSS. Collaborated with designers to implement UI/UX improvements. Participated in Agile development processes."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "University of Technology",
      degree: "Master's",
      field: "Computer Science",
      graduationDate: new Date("2017-05-15")
    },
    {
      id: "edu2",
      institution: "State College",
      degree: "Bachelor's",
      field: "Software Engineering",
      graduationDate: new Date("2015-05-20")
    }
  ],
  skills: ["JavaScript", "React", "TypeScript", "Node.js", "CSS", "HTML", "Git", "Agile", "UI/UX", "RESTful APIs"],
  selectedTemplate: "modern",
  styleCustomizations: {
    primaryColor: "#9b87f5",
    fontFamily: "Inter, sans-serif",
    fontSize: "medium",
    spacing: 1,
  }
};

// Interface for the context
interface ResumeContextType {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
  updatePersonalInfo: (personalInfo: Partial<Resume['personalInfo']>) => void;
  addExperience: (experience: Omit<Resume['experience'][0], 'id'>) => void;
  updateExperience: (id: string, experience: Partial<Omit<Resume['experience'][0], 'id'>>) => void;
  removeExperience: (id: string) => void;
  addEducation: (education: Omit<Resume['education'][0], 'id'>) => void;
  updateEducation: (id: string, education: Partial<Omit<Resume['education'][0], 'id'>>) => void;
  removeEducation: (id: string) => void;
  updateSkills: (skills: string[]) => void;
  updateTemplate: (template: string) => void;
  updateStyleCustomizations: (customizations: Partial<Resume['styleCustomizations']>) => void;
  resetResume: () => void;
  loadDummyResume: () => void;
}

// Create the context
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Provider component
export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [resume, setResume] = useState<Resume>(initialResume);

  const updatePersonalInfo = (personalInfo: Partial<Resume['personalInfo']>) => {
    setResume(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...personalInfo }
    }));
  };

  const addExperience = (experience: Omit<Resume['experience'][0], 'id'>) => {
    const newExperience = { ...experience, id: Date.now().toString() };
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  const updateExperience = (id: string, experience: Partial<Omit<Resume['experience'][0], 'id'>>) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, ...experience } : exp
      )
    }));
  };

  const removeExperience = (id: string) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = (education: Omit<Resume['education'][0], 'id'>) => {
    const newEducation = { ...education, id: Date.now().toString() };
    setResume(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  };

  const updateEducation = (id: string, education: Partial<Omit<Resume['education'][0], 'id'>>) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, ...education } : edu
      )
    }));
  };

  const removeEducation = (id: string) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const updateSkills = (skills: string[]) => {
    setResume(prev => ({
      ...prev,
      skills
    }));
  };

  const updateTemplate = (template: string) => {
    setResume(prev => ({
      ...prev,
      selectedTemplate: template
    }));
  };

  const updateStyleCustomizations = (customizations: Partial<Resume['styleCustomizations']>) => {
    setResume(prev => ({
      ...prev,
      styleCustomizations: { ...prev.styleCustomizations, ...customizations }
    }));
  };

  const resetResume = () => {
    setResume(initialResume);
  };

  const loadDummyResume = () => {
    setResume(DUMMY_RESUME);
  };

  const value = {
    resume,
    setResume,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills,
    updateTemplate,
    updateStyleCustomizations,
    resetResume,
    loadDummyResume
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

// Custom hook to use the resume context
export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  
  return context;
};
