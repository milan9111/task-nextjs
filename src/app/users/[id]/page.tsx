import { Metadata } from "next";
import { getDataUser } from "@/api";
import Link from "next/link";

interface PostProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const user = await getDataUser(id);
  return {
    title: `${user?.name} | Next App` ?? "User error",
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const user = await getDataUser(id);

  if (!user) {
    return (
      <div className="bg-slate-700 flex-grow">
        <div className="container m-auto p-4">
          <h1 className="text-2xl font-semibold underline text-center mt-12 mb-4">
            User {id} not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 flex-grow">
      <div className="container m-auto p-4 flex justify-center">
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-semibold underline mt-12 mb-4">
            User {id}:
          </h1>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-2">
              <h3 className="text-xl font-semibold">Name:</h3>
              <p className="text-lg font-normal italic">{user.name}</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-4">
              <h3 className="text-xl font-semibold">Email:</h3>
              <a
                href={`mailto:${user.email}`}
                className="text-lg font-normal italic"
              >
                {user.email}
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-4">
              <h3 className="text-xl font-semibold">Phone:</h3>
              <a
                href={`tel:${user.phone}`}
                className="text-lg font-normal italic"
              >
                {user.phone}
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-4">
              <h3 className="text-xl font-semibold">Website:</h3>
              <a
                href={`https://${user.website}`}
                className="text-lg font-normal italic"
                target="_blank"
              >
                {user.website}
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-4">
              <h3 className="text-xl font-semibold">Company:</h3>
              <p className="text-lg font-normal italic">{user.company.name}</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-4">
              <h3 className="text-xl font-semibold">Address:</h3>
              <a
                href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`}
                className="text-lg font-normal italic"
                target="_blank"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          <div className="flex justify-between">
            <Link
              href="/users"
              className="p-2 rounded-md border-solid border-2 border-sky-500 transition-colors duration-300 hover:text-blue-400"
            >
              Back to users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
