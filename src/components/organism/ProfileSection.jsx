import React from 'react';
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import imageSrc from "../../assets/images/images.jpg"; // Import the local image
import ShimmerButton from '../atom/Button';
import cvFile from '../../assets/file/Agam Vito Asyhari - Curiculum Vitae.pdf'; // Import CV file

const ProfileSection = () => {
  // Fungsi unduh untuk mengunduh file CV
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Agam_Vito_CV.pdf"; // Nama file yang diunduh
    link.click();
  };

  return (
    <div className="flex items-center justify-center space-x-8 p-6 rounded-lg shadow-lg text-center md:text-left">
      <DirectionAwareHoverDemo onDownload={handleDownload} />
    </div>
  );
};

export function DirectionAwareHoverDemo({ onDownload }) {
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
        <p className='text-justify'>
          Recent graduate in Informatics Engineering with a GPA of 3.61, skilled in front-end development and quality assurance engineering. Eager to apply technical knowledge and problem-solving abilities in a dynamic work environment.
        </p>
        <div className='mt-4'>
          <ShimmerButton onClick={onDownload} />
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
