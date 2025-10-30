
import React from 'react';
import { useResume, Resume } from '@/context/ResumeContext';
import { format } from 'date-fns';

const ModernTemplate = ({ resume }: { resume: Resume }) => {
  const { personalInfo, experience, education, skills, styleCustomizations } = resume;
  
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        // Handle empty string
        if (date === '') return '';
        return format(new Date(date), 'MMM yyyy');
      }
      return format(date, 'MMM yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  };

  return (
    <div 
      className="resume-preview" 
      style={{ 
        fontFamily: styleCustomizations.fontFamily,
        fontSize: styleCustomizations.fontSize === 'small' ? '10px' : 
                  styleCustomizations.fontSize === 'medium' ? '12px' : '14px',
        lineHeight: `${1.5 * styleCustomizations.spacing}`,
      }}
    >
      <div className="flex mb-6" style={{ borderBottom: `2px solid ${styleCustomizations.primaryColor}` }}>
        <div className="flex-grow">
          <h1 className="text-3xl font-bold" style={{ color: styleCustomizations.primaryColor }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
        </div>
        <div className="text-right text-gray-700">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </div>

      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: styleCustomizations.primaryColor }}>Professional Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <span className="font-bold">{exp.position}</span>
                <span className="text-gray-600">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
              </div>
              <div className="font-medium">{exp.company}</div>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3" style={{ color: styleCustomizations.primaryColor }}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold">{edu.degree} in {edu.field}</span>
                <span className="text-gray-600">{formatDate(edu.graduationDate)}</span>
              </div>
              <div>{edu.institution}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: styleCustomizations.primaryColor }}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-1 rounded-sm text-white text-xs"
                style={{ backgroundColor: styleCustomizations.primaryColor }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ClassicTemplate = ({ resume }: { resume: Resume }) => {
  const { personalInfo, experience, education, skills, styleCustomizations } = resume;
  
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        if (date === '') return '';
        return format(new Date(date), 'MMM yyyy');
      }
      return format(date, 'MMM yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  };

  return (
    <div 
      className="resume-preview" 
      style={{ 
        fontFamily: styleCustomizations.fontFamily,
        fontSize: styleCustomizations.fontSize === 'small' ? '10px' : 
                  styleCustomizations.fontSize === 'medium' ? '12px' : '14px',
        lineHeight: `${1.5 * styleCustomizations.spacing}`,
      }}
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-gray-700">
          {personalInfo.email && <span className="mx-1">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="mx-1">• {personalInfo.phone}</span>}
          {personalInfo.location && <span className="mx-1">• {personalInfo.location}</span>}
        </div>
      </div>

      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase" style={{ borderBottom: `1px solid ${styleCustomizations.primaryColor}` }}>
            Professional Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between font-bold">
                <span>{exp.company}</span>
                <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
              </div>
              <div className="italic">{exp.position}</div>
              <p className="mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase" style={{ borderBottom: `1px solid ${styleCustomizations.primaryColor}` }}>
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between font-bold">
                <span>{edu.institution}</span>
                <span>{formatDate(edu.graduationDate)}</span>
              </div>
              <div>{edu.degree} in {edu.field}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2 uppercase" style={{ borderBottom: `1px solid ${styleCustomizations.primaryColor}` }}>
            Skills
          </h2>
          <p>{skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

const CreativeTemplate = ({ resume }: { resume: Resume }) => {
  const { personalInfo, experience, education, skills, styleCustomizations } = resume;
  
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        if (date === '') return '';
        return format(new Date(date), 'MMM yyyy');
      }
      return format(date, 'MMM yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  };

  return (
    <div 
      className="resume-preview" 
      style={{ 
        fontFamily: styleCustomizations.fontFamily,
        fontSize: styleCustomizations.fontSize === 'small' ? '10px' : 
                  styleCustomizations.fontSize === 'medium' ? '12px' : '14px',
        lineHeight: `${1.5 * styleCustomizations.spacing}`,
      }}
    >
      <div className="mb-6 p-4" style={{ backgroundColor: styleCustomizations.primaryColor }}>
        <h1 className="text-3xl font-bold text-white">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-white mt-2 opacity-90">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {/* Experience Section */}
          {experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3" style={{ color: styleCustomizations.primaryColor }}>
                Work Experience
              </h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="font-bold text-lg">{exp.position}</div>
                  <div className="flex justify-between">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-gray-600">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                  </div>
                  <p className="mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: styleCustomizations.primaryColor }}>
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <div className="font-bold">{edu.degree} in {edu.field}</div>
                  <div className="flex justify-between">
                    <span>{edu.institution}</span>
                    <span className="text-gray-600">{formatDate(edu.graduationDate)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="p-4 rounded-lg" style={{ backgroundColor: `${styleCustomizations.primaryColor}15` }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: styleCustomizations.primaryColor }}>
                Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="p-2 bg-white rounded-sm shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MinimalistTemplate = ({ resume }: { resume: Resume }) => {
  const { personalInfo, experience, education, skills, styleCustomizations } = resume;
  
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        if (date === '') return '';
        return format(new Date(date), 'MMM yyyy');
      }
      return format(date, 'MMM yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  };

  return (
    <div 
      className="resume-preview" 
      style={{ 
        fontFamily: styleCustomizations.fontFamily,
        fontSize: styleCustomizations.fontSize === 'small' ? '10px' : 
                  styleCustomizations.fontSize === 'medium' ? '12px' : '14px',
        lineHeight: `${1.5 * styleCustomizations.spacing}`,
      }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-light tracking-wide mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-gray-600 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span className="ml-3">{personalInfo.phone}</span>}
          {personalInfo.location && <span className="ml-3">{personalInfo.location}</span>}
        </div>
      </div>

      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-4 tracking-widest uppercase">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-medium">{exp.position}</span>
                <span className="text-xs text-gray-500">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
              </div>
              <div className="text-sm text-gray-600">{exp.company}</div>
              <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-4 tracking-widest uppercase">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <span className="font-medium">{edu.degree} in {edu.field}</span>
                <span className="text-xs text-gray-500">{formatDate(edu.graduationDate)}</span>
              </div>
              <div className="text-sm text-gray-600">{edu.institution}</div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold mb-4 tracking-widest uppercase">Skills</h2>
          <p className="text-sm text-gray-700">{skills.join(' • ')}</p>
        </div>
      )}
    </div>
  );
};

const ExecutiveTemplate = ({ resume }: { resume: Resume }) => {
  const { personalInfo, experience, education, skills, styleCustomizations } = resume;
  
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        if (date === '') return '';
        return format(new Date(date), 'MMM yyyy');
      }
      return format(date, 'MMM yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  };

  return (
    <div 
      className="resume-preview" 
      style={{ 
        fontFamily: styleCustomizations.fontFamily,
        fontSize: styleCustomizations.fontSize === 'small' ? '10px' : 
                  styleCustomizations.fontSize === 'medium' ? '12px' : '14px',
        lineHeight: `${1.5 * styleCustomizations.spacing}`,
      }}
    >
      <div className="border-b-4 pb-4 mb-6" style={{ borderColor: styleCustomizations.primaryColor }}>
        <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: styleCustomizations.primaryColor }}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-gray-700 flex gap-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4 pb-1 border-b" style={{ color: styleCustomizations.primaryColor }}>
            EXECUTIVE EXPERIENCE
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-lg">{exp.position}</span>
                <span className="text-gray-600 font-medium">{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
              </div>
              <div className="font-semibold text-gray-700 mb-2">{exp.company}</div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4 pb-1 border-b" style={{ color: styleCustomizations.primaryColor }}>
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <span className="font-bold">{edu.degree} in {edu.field}</span>
                <span className="text-gray-600">{formatDate(edu.graduationDate)}</span>
              </div>
              <div className="font-medium text-gray-700">{edu.institution}</div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-4 pb-1 border-b" style={{ color: styleCustomizations.primaryColor }}>
            CORE COMPETENCIES
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <div key={index} className="text-gray-700 font-medium">
                • {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProfessionalTemplate = ({ resume }: { resume: Resume }) => {
  const { personalInfo, experience, education, skills, styleCustomizations } = resume;
  
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    try {
      if (typeof date === 'string') {
        if (date === '') return '';
        return format(new Date(date), 'MMM yyyy');
      }
      return format(date, 'MMM yyyy');
    } catch (error) {
      console.error('Date formatting error:', error);
      return '';
    }
  };

  return (
    <div 
      className="resume-preview" 
      style={{ 
        fontFamily: styleCustomizations.fontFamily,
        fontSize: styleCustomizations.fontSize === 'small' ? '10px' : 
                  styleCustomizations.fontSize === 'medium' ? '12px' : '14px',
        lineHeight: `${1.5 * styleCustomizations.spacing}`,
      }}
    >
      <div className="text-center mb-6 pb-4 border-b-2" style={{ borderColor: styleCustomizations.primaryColor }}>
        <h1 className="text-3xl font-bold mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="text-gray-700">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && personalInfo.email && <span className="mx-2">|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && (personalInfo.email || personalInfo.phone) && <span className="mx-2">|</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {experience.length > 0 && (
        <div className="mb-6">
          <h2 
            className="text-lg font-bold mb-3 pb-1" 
            style={{ 
              color: styleCustomizations.primaryColor,
              borderBottom: `2px solid ${styleCustomizations.primaryColor}`
            }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold">{exp.position}</div>
                  <div className="italic text-gray-700">{exp.company}</div>
                </div>
                <div className="text-gray-600 text-right">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </div>
              </div>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="mb-6">
          <h2 
            className="text-lg font-bold mb-3 pb-1" 
            style={{ 
              color: styleCustomizations.primaryColor,
              borderBottom: `2px solid ${styleCustomizations.primaryColor}`
            }}
          >
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <div className="font-bold">{edu.degree} in {edu.field}</div>
                  <div className="text-gray-700">{edu.institution}</div>
                </div>
                <div className="text-gray-600">{formatDate(edu.graduationDate)}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2 
            className="text-lg font-bold mb-3 pb-1" 
            style={{ 
              color: styleCustomizations.primaryColor,
              borderBottom: `2px solid ${styleCustomizations.primaryColor}`
            }}
          >
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="text-gray-700 font-medium">
                {skill}{index < skills.length - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ResumePreview = () => {
  const { resume } = useResume();

  const renderTemplate = () => {
    switch (resume.selectedTemplate) {
      case 'modern':
        return <ModernTemplate resume={resume} />;
      case 'classic':
        return <ClassicTemplate resume={resume} />;
      case 'creative':
        return <CreativeTemplate resume={resume} />;
      case 'minimalist':
        return <MinimalistTemplate resume={resume} />;
      case 'executive':
        return <ExecutiveTemplate resume={resume} />;
      case 'professional':
        return <ProfessionalTemplate resume={resume} />;
      default:
        return <ModernTemplate resume={resume} />;
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Resume Preview</h2>
      <div className="bg-white border border-gray-200 shadow-md">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
