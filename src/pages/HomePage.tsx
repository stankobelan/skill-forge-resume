
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Download, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Build your professional</span>
                <span className="block text-resume-primary">resume in minutes</span>
              </h1>
              <p className="mt-6 text-lg text-gray-500">
                Create a standout resume with our easy-to-use builder. Choose from professional templates,
                customize your design, and download your perfect resume instantly.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link to="/builder">
                  <Button size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                    Start Building <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/templates" className="text-base font-medium text-gray-700 hover:text-resume-primary">
                  View Templates
                </Link>
              </div>
            </div>
            <div className="mt-12 relative lg:mt-0 lg:col-span-6">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Resume preview"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-resume-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create the perfect resume
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our resume builder makes it easy to create, customize, and share your professional resume.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-resume-primary rounded-md shadow-lg">
                        <FileText className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Professional Templates</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Choose from a variety of professionally designed templates to make your resume stand out.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-resume-primary rounded-md shadow-lg">
                        <Palette className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Easy Customization</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Personalize colors, fonts, and layouts to match your personal style and career goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-resume-primary rounded-md shadow-lg">
                        <Download className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Instant Downloads</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Export your resume as a PDF and start applying to jobs immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-resume-primary font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Build your resume in 3 simple steps
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="relative">
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-resume-primary text-white text-2xl font-bold mx-auto">
                    1
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Choose a Template</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Select from our collection of professionally designed resume templates.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-resume-primary text-white text-2xl font-bold mx-auto">
                    2
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Fill in Your Details</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Add your personal information, experience, education, and skills.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-resume-primary text-white text-2xl font-bold mx-auto">
                    3
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Download & Share</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Export your resume as a PDF and start applying for jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-resume-primary font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our users are saying
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500">Marketing Specialist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Using this resume builder helped me land my dream job! The templates are professional and the customization options are fantastic."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The step-by-step process made creating a polished resume so easy. I received compliments on my resume design from multiple interviewers."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Emily Rodriguez</h4>
                  <p className="text-gray-500">Recent Graduate</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone just starting their career, this tool was invaluable. It helped me showcase my skills and education in a professional way."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-resume-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to build your resume?</span>
            <span className="block text-resume-light">Start creating for free today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/builder">
                <Button variant="default" size="lg" className="bg-white text-resume-primary hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/templates">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-resume-secondary">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
