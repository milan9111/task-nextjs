export default function Home() {
  return (
    <div className="bg-slate-700 flex-grow">
      <div className="container m-auto p-4 flex justify-center">
        <h1 className="mt-14 w-2/3 text-center text-base sm:text-xl lg:text-3xl font-semibold">
          This test app was written with the help of Next.js, TypeScript, and
          Tailwind CSS. A mock remote API was used from{" "}
          <a
            href="https://jsonplaceholder.typicode.com"
            className="transition-colors duration-300 hover:text-blue-400"
            target="_blank"
          >
            JSONplaceholder
          </a>
          .
        </h1>
      </div>
    </div>
  );
}
