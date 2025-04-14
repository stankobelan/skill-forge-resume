import React, { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationForm = () => {
  const { resume, addEducation, updateEducation, removeEducation } = useResume();
  const { education } = resume;

  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    graduationDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id?: string
  ) => {
    const { name, value } = e.target;

    if (id) {
      // Update existing education
      updateEducation(id, { [name]: value });
    } else {
      // Update new education form
      setNewEducation((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddEducation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newEducation.institution && newEducation.degree) {
      addEducation(newEducation);
      setNewEducation({
        institution: '',
        degree: '',
        field: '',
        graduationDate: '',
      });
    }
  };

  return (
    <div className="resume-section">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>

      {/* Existing Education Items */}
      {education.length > 0 && (
        <div className="mb-6 space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="group relative">
              <div className="absolute top-3 left-2 opacity-30 cursor-grab active:cursor-grabbing">
                <GripVertical className="h-5 w-5" />
              </div>
              <CardContent className="p-4 pl-10">
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEducation(edu.id)}
                    className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                    <Input
                      id={`institution-${edu.id}`}
                      name="institution"
                      value={edu.institution}
                      onChange={(e) => handleChange(e, edu.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleChange(e, edu.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                    <Input
                      id={`field-${edu.id}`}
                      name="field"
                      value={edu.field}
                      onChange={(e) => handleChange(e, edu.id)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`graduationDate-${edu.id}`}>Graduation Date</Label>
                    <Input
                      id={`graduationDate-${edu.id}`}
                      name="graduationDate"
                      type="date"
                      value={typeof edu.graduationDate === 'string' ? edu.graduationDate : edu.graduationDate.toISOString().substring(0, 10)}
                      onChange={(e) => handleChange(e, edu.id)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add New Education Form */}
      <div className="border border-dashed border-gray-300 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Add Education</h3>
        <form onSubmit={handleAddEducation} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="institution">Institution</Label>
            <Input
              id="institution"
              name="institution"
              value={newEducation.institution}
              onChange={handleChange}
              placeholder="University or School name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleChange}
              placeholder="Bachelor's, Master's, etc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="field">Field of Study</Label>
            <Input
              id="field"
              name="field"
              value={newEducation.field}
              onChange={handleChange}
              placeholder="Computer Science, Business, etc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="graduationDate">Graduation Date</Label>
            <Input
              id="graduationDate"
              name="graduationDate"
              type="date"
              value={newEducation.graduationDate}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
              <Plus className="h-4 w-4 mr-2" /> Add Education
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
