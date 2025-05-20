'use client';

interface userInfoProps{

    name: string;
    job: string;
}


export default function UserInfo({name,job}: userInfoProps) {
  return (
    <div className="text-center mt-2">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{job}</p>
    </div>
  );
}
