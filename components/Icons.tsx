
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const CompassIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 12 1.5 1.5 1.5-1.5m-3 3-1.5-1.5L9 12m3 3 1.5-1.5 1.5 1.5m-3-3 1.5 1.5L15 12" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V21" />
  </svg>
);

export const MapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.5-10.5h.75a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-13.5a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 .75-.75H5.25m3.75 0h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75M15 9h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 0 1-4.874-1.971 2.25 2.25 0 0 1-1.226-1.954V11.25a2.25 2.25 0 0 1 1.226-1.954A9.752 9.752 0 0 1 7.5 7.5h9a9.752 9.752 0 0 1 4.874 1.822 2.25 2.25 0 0 1 1.226 1.954v3.571a2.25 2.25 0 0 1-1.226 1.954A9.75 9.75 0 0 1 16.5 18.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 0V3.75a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5V6m-3 12.75h3" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c-1.42 0-2.798-.31-4.097-.904a4.5 4.5 0 0 1 8.194 0Z" />
  </svg>
);

export const ChatBubbleLeftRightIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-3.72a1.5 1.5 0 0 1 0-2.122l3.72-3.72ZM3.75 8.511c-.884.284-1.5 1.128-1.5 2.097v4.286c0 1.136.847 2.1 1.98 2.193l3.72-3.72a1.5 1.5 0 0 0 0-2.122l-3.72-3.72Z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.243 0-8.25-3.478-8.25-7.75a8.25 8.25 0 0 1 16.5 0c0 4.272-4.007 7.75-8.25 7.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
  </svg>
);

export const PuzzlePieceIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.54-1.192 1.201-1.192.223 0 .438.06.634.169.288.16.518.394.676.676.11.196.169.411.169.634 0 .661-.532 1.201-1.192 1.201h-.009a1.192 1.192 0 0 1-1.201-1.201ZM9.75 12.75c0 .66-.54 1.192-1.201 1.192a1.192 1.192 0 0 1-1.201-1.201c0-.661.532-1.201 1.192-1.201.661 0 1.201.54 1.201 1.201Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 12-3.033 5.22a1.192 1.192 0 0 0 .584 1.58 1.192 1.192 0 0 0 1.58-.583L12 15.75l1.62 2.805c.34 1.087 1.631 1.53 2.718 1.19a1.193 1.193 0 0 0 .583-1.58l-3.034-5.22M12.75 9l-1.5-2.598a1.192 1.192 0 0 0-2.164 0L7.5 9l-2.14 3.708a1.192 1.192 0 0 0 .584 1.58 1.192 1.192 0 0 0 1.58-.583L9 11.25l1.5-2.598 1.5 2.598 1.619 2.428c.34 1.087 1.631 1.53 2.718 1.19a1.193 1.193 0 0 0 .583-1.58L12.75 9Z" />
    </svg>
);

export const MagnifyingGlassIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
