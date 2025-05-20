'use client';

import Avatar from './Avatar';
import UserInfo from './UserInfo';

interface ProfileCardProps{
    name: string;
    job : string;
    avatarUrl: string;

}


export default function ProfileCard({name,job,avatarUrl}:ProfileCardProps) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <Avatar avatarUrl={avatarUrl} />
      <UserInfo name={name} job={job} />
    </div>
  );
}
