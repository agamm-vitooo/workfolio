import React from 'react';
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import imageSrc from "../../assets/images/images.jpg"; // Import the local image

const ProfileSection = () => {
  return (
    <div className="flex items-center justify-center space-x-8 p-6 rounded-lg shadow-lg">
      <DirectionAwareHoverDemo />
    </div>
  );
};

export function DirectionAwareHoverDemo() {
  return (
    <div className="flex flex-wrap items-center space-x-8 py-10">
      {/* Profile image with name and title */}
      <div className="h-80 w-80 flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageSrc}>
          <p className="font-bold text-xl">Agam Vito Asyhari</p>
          <p className="font-normal text-sm">Software Engineer</p>
        </DirectionAwareHover>
      </div>
      {/* Profile description text */}
      <div className="max-w-md text-slate-100 leading-relaxed">
        <p>
          Recent graduate in Informatics Engineering with a GPA of 3.61, skilled in front-end development and quality assurance engineering. Eager to apply technical knowledge and problem-solving abilities in a dynamic work environment.
        </p>
      </div>
    </div>
  );
}

export default ProfileSection;