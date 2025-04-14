import React, { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceForm = () => {
  const { resume, addExperience, updateExperience, removeExperience } = useResume();
  const { experience } = resume;

  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id?: string
  ) => {
    const { name, value } = e.target;

    if (id) {
      // Update existing experience
      updateExperience(id, { [name]: value });
    } else {
      // Update new experience form
      setNewExperience((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newExperience.company && newExperience.position) {
      addExperience(newExperience);
      setNewExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      });
    }
  };

  return (
    <div className="resume-section">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Work Experience</h2>

      {/* Existing Experience Items */}
      {experience.length > 0 && (
        <div className="mb-6 space-y-4">
          {experience.map((exp) => (
            <Card key={exp.id} className="group relative">
              <div className="absolute top-3 left-2 opacity-30 cursor-grab active:cursor-grabbing">
                <GripVertical className="h-5 w-5" />
              </div>
              <CardContent className="p-4 pl-10">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExperience(exp.id)}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`company-${exp.id}`}>Company</Label>
                    <Input
                      id={`company-${exp.id}`}
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleChange(e, exp.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`position-${exp.id}`}>Position</Label>
                    <Input
                      id={`position-${exp.id}`}
                      name="position"
                      value={exp.position}
                      onChange={(e) => handleChange(e, exp.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${exp.id}`}>Start Date</Label>
                    <Input
                      id={`startDate-${exp.id}`}
                      name="startDate"
                      type="date"
                      value={typeof exp.startDate === 'string' ? exp.startDate : exp.startDate.toISOString().substring(0, 10)}
                      onChange={(e) => handleChange(e, exp.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                    <Input
                      id={`endDate-${exp.id}`}
                      name="endDate"
                      type="date"
                      value={typeof exp.endDate === 'string' ? exp.endDate : exp.endDate.toISOString().substring(0, 10)}
                      onChange={(e) => handleChange(e, exp.id)}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor={`description-${exp.id}`}>Description</Label>
                    <Textarea
                      id={`description-${exp.id}`}
                      name="description"
                      value={exp.description}
                      onChange={(e) => handleChange(e, exp.id)}
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add New Experience Form */}
      <div className="border border-dashed border-gray-300 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Add Experience</h3>
        <form onSubmit={handleAddExperience} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={newExperience.company}
              onChange={handleChange}
              placeholder="Company name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              name="position"
              value={newExperience.position}
              onChange={handleChange}
              placeholder="Job title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={newExperience.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="date"
              value={newExperience.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={newExperience.description}
              onChange={handleChange}
              placeholder="Describe your responsibilities and achievements"
              rows={3}
            />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
              <Plus className="h-4 w-4 mr-2" /> Add Experience
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceForm;
