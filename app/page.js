import SwipeToDelete from "@/components/SwipeToDelete";
import Title from "@/components/Title";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen py-20">
      <Title title="Shopping List" subtitle="Swipe left to delete" />
      <SwipeToDelete />
    </div>
  );
}
