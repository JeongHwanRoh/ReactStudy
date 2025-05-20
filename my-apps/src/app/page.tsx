import ProfileCard from './components/ProfileCard';


export default function HomePage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProfileCard
        name="정환 노"
        job="Frontend Developer"
        avatarUrl="https://i.pravatar.cc/150?img=3"
      />
    </main>
  );
}
