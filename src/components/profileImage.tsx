'use client';

import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProfileImage({
  src,
  alt,
  className,
}: ProfileImageProps) {
  return (
    <Image
      src={src}
      width={160}
      height={160}
      className={`rounded-full border-8 border-white/20 ${className}`}
      alt={alt}
    />
  );
}
