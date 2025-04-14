
import React, { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import MainLayout from '@/components/layouts/MainLayout';
import PersonalInfoForm from '@/components/resume/PersonalInfoForm';
import ExperienceForm from '@/components/resume/ExperienceForm';
import EducationForm from '@/components/resume/EducationForm';
import SkillsForm from '@/components/resume/SkillsForm';
import StyleCustomizationForm from '@/components/resume/StyleCustomizationForm';
import ResumePreview from '@/components/resume/ResumePreview';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ResumeBuilder = () => {
  const { resume, resetResume, loadDummyResume } = useResume();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('personal-info');

  const handleDownload = () => {
    toast({
      title: "Download Feature",
      description: "PDF download functionality will be implemented in the next version.",
    });
  };

  const handleLoadSample = () => {
    loadDummyResume();
    toast({
      title: "Sample Resume Loaded",
      description: "A sample resume has been loaded for you to edit.",
    });
  };

  const handleResetResume = () => {
    resetResume();
    toast({
      title: "Resume Reset",
      description: "Your resume has been reset to blank.",
    });
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
            <p className="mt-2 text-gray-600">
              Fill in your details below to create your professional resume.
            </p>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <Button variant="outline" onClick={handleLoadSample}>
              Load Sample
            </Button>
            <Button variant="outline" onClick={handleResetResume} className="text-red-500 border-red-200 hover:bg-red-50">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button onClick={handleDownload} className="bg-resume-primary hover:bg-resume-secondary">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="personal-info">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="style">Style</TabsTrigger>
              </TabsList>
              <TabsContent value="personal-info" className="resume-form-container">
                <PersonalInfoForm />
              </TabsContent>
              <TabsContent value="experience" className="resume-form-container">
                <ExperienceForm />
              </TabsContent>
              <TabsContent value="education" className="resume-form-container">
                <EducationForm />
              </TabsContent>
              <TabsContent value="skills" className="resume-form-container">
                <SkillsForm />
              </TabsContent>
              <TabsContent value="style" className="resume-form-container">
                <StyleCustomizationForm />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="sticky top-24">
            <ResumePreview />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResumeBuilder;
