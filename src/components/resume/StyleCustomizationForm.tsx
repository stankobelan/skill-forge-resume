
import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const fontOptions = [
  { value: 'Inter, sans-serif', label: 'Inter (Sans-serif)' },
  { value: 'Roboto, sans-serif', label: 'Roboto (Sans-serif)' },
  { value: 'Merriweather, serif', label: 'Merriweather (Serif)' },
  { value: 'Poppins, sans-serif', label: 'Poppins (Sans-serif)' },
  { value: 'Playfair Display, serif', label: 'Playfair Display (Serif)' },
  { value: 'monospace', label: 'Monospace' },
];

const StyleCustomizationForm = () => {
  const { resume, updateStyleCustomizations } = useResume();
  const { styleCustomizations } = resume;

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStyleCustomizations({ primaryColor: e.target.value });
  };

  const handleFontFamilyChange = (value: string) => {
    updateStyleCustomizations({ fontFamily: value });
  };

  const handleFontSizeChange = (value: string) => {
    updateStyleCustomizations({ fontSize: value });
  };

  const handleSpacingChange = (value: number[]) => {
    updateStyleCustomizations({ spacing: value[0] });
  };

  return (
    <div className="resume-section">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Style Customization</h2>

      <div className="space-y-6">
        {/* Color Picker */}
        <div className="space-y-2">
          <Label htmlFor="primaryColor">Primary Color</Label>
          <div className="flex items-center gap-4">
            <input
              id="primaryColor"
              type="color"
              value={styleCustomizations.primaryColor}
              onChange={handleColorChange}
              className="w-12 h-12 rounded cursor-pointer"
            />
            <div 
              className="px-4 py-2 rounded-md text-white font-medium"
              style={{ backgroundColor: styleCustomizations.primaryColor }}
            >
              {styleCustomizations.primaryColor}
            </div>
          </div>
        </div>

        {/* Font Family Selection */}
        <div className="space-y-2">
          <Label htmlFor="fontFamily">Font Family</Label>
          <Select
            value={styleCustomizations.fontFamily}
            onValueChange={handleFontFamilyChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  <span style={{ fontFamily: font.value }}>{font.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div 
            className="mt-2 p-2 border rounded-md"
            style={{ fontFamily: styleCustomizations.fontFamily }}
          >
            <p>This is how your font will look in your resume.</p>
            <p className="font-bold">This is how bold text will appear.</p>
          </div>
        </div>

        {/* Font Size Selection */}
        <div className="space-y-2">
          <Label>Font Size</Label>
          <RadioGroup
            value={styleCustomizations.fontSize}
            onValueChange={handleFontSizeChange}
            className="flex flex-wrap gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="fontSizeSmall" />
              <Label htmlFor="fontSizeSmall" className="text-sm">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="fontSizeMedium" />
              <Label htmlFor="fontSizeMedium" className="text-base">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="fontSizeLarge" />
              <Label htmlFor="fontSizeLarge" className="text-lg">Large</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Spacing Slider */}
        <div className="space-y-2">
          <Label htmlFor="spacing">Spacing</Label>
          <div className="py-4">
            <Slider
              id="spacing"
              min={0.5}
              max={2}
              step={0.1}
              value={[styleCustomizations.spacing]}
              onValueChange={handleSpacingChange}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Compact</span>
            <span>Balanced</span>
            <span>Spacious</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleCustomizationForm;
