
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PersonalInfoForm = () => {
  const { resume, updatePersonalInfo } = useResume();
  const { personalInfo } = resume;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  };

  return (
    <div className="resume-section">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
            placeholder="Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={personalInfo.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            placeholder="+1 (123) 456-7890"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={personalInfo.location}
            onChange={handleChange}
            placeholder="New York, NY"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
