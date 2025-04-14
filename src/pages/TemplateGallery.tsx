
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layouts/MainLayout';
import { Eye } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean, professional template with a sidebar for skills and contact information.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'A traditional resume layout that works well for all industries and experience levels.',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Stand out with this bold template, perfect for creative professionals.',
    image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'A simple, clean design that lets your experience speak for itself.',
    image: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'A sophisticated template designed for senior-level professionals.',
    image: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'A well-structured template ideal for traditional industries.',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const TemplateGallery = () => {
  const { updateTemplate } = useResume();

  const handleSelectTemplate = (templateId: string) => {
    updateTemplate(templateId);
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Resume Templates
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our professionally designed templates to get started.
              Each template is fully customizable to match your personal style.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link to={`/templates/${template.id}`}>
                      <Button variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900">{template.name}</h3>
                  <p className="text-gray-600 mt-2">{template.description}</p>
                  <div className="mt-6 flex space-x-3">
                    <Button
                      variant="default"
                      className="w-full bg-resume-primary hover:bg-resume-secondary"
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      <Link to="/builder" className="w-full">
                        Use This Template
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Can I customize the templates?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, all templates are fully customizable. You can change colors, fonts, spacing, and more to match your personal style.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Can I download my resume as a PDF?</h3>
                <p className="mt-2 text-gray-600">
                  Absolutely! Once you've created your resume, you can download it as a high-quality PDF ready for job applications.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Are the templates ATS-friendly?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, our templates are designed to be ATS (Applicant Tracking System) friendly to ensure your resume gets past automated screening systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Can I create multiple resumes?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, you can create multiple resumes for different job applications or industries to tailor your application to each opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TemplateGallery;
