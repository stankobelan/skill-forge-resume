
import React, { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const SkillsForm = () => {
  const { resume, updateSkills } = useResume();
  const { skills } = resume;

  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updatedSkills = [...skills, newSkill.trim()];
      updateSkills(updatedSkills);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    updateSkills(updatedSkills);
  };

  return (
    <div className="resume-section">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>

      {/* Display Current Skills */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center"
            >
              <span>{skill}</span>
              <button 
                type="button" 
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-gray-500 hover:text-red-500"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          {skills.length === 0 && (
            <p className="text-gray-500 italic">No skills added yet. Add some skills below.</p>
          )}
        </div>
      </div>

      {/* Add New Skill Form */}
      <form onSubmit={handleAddSkill} className="flex gap-2">
        <div className="flex-grow">
          <Label htmlFor="newSkill" className="sr-only">Add Skill</Label>
          <Input
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />
        </div>
        <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
          Add Skill
        </Button>
      </form>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Add skills that are relevant to the position you're applying for.</p>
      </div>
    </div>
  );
};

export default SkillsForm;
