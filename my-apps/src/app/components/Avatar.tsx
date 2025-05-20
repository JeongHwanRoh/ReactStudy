// src\app\components\Avatar.tsx


'use client';

interface AvatarProps{

    avatarUrl: string;
}

export default function Avatar({avatarUrl} : AvatarProps) {
  return (
    <img
      src="https://i.pravatar.cc/150?img=3"
      alt="User Avatar"
      className="w-24 h-24 rounded-full border"
    />
  );
}
