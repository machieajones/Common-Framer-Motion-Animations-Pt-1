import SwipeToDelete from "@/components/SwipeToDelete";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen py-20">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <p className="text-sm text-gray-500">Swipe left to delete</p>
      <SwipeToDelete />
    </div>
  );
}
