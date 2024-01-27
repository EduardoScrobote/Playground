import List from "@/components/list/List";

export default function Home() {
  return (
    <div className="w-full h-screen justify-center bg-black">
      <div className="w-full flex h-16 border-b-2 border-purple-500 justify-center items-center">
        <h1 className="text-5xl font-bold text-purple-500">Playground</h1>
      </div>
      <div className="flex w-full text-purple-500 mt-16 justify-center h-[90%]">
        <List />
      </div>
    </div>
  );
}
