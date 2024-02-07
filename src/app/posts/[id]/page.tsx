import { Metadata } from "next";
import { getDataPost } from "@/api";
import Link from "next/link";

interface PostProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getDataPost(id);
  return {
    title: `${post?.title} | Next App` ?? "Post error",
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getDataPost(id);

  if (!post) {
    return (
      <div className="bg-slate-700 flex-grow">
        <div className="container m-auto p-4">
          <h1 className="text-2xl font-semibold underline text-center mt-12 mb-4">
            Post {id} not found
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
            Post {id}:
          </h1>
          <div className="flex flex-col gap-1 mb-2">
            <h3 className="text-xl font-semibold">Title:</h3>
            <p className="text-lg font-normal italic">{post.title}</p>
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <h3 className="text-xl font-semibold">Text:</h3>
            <p className="text-lg font-normal italic">{post.body}</p>
          </div>
          <div className="flex justify-between">
            <Link
              href="/posts"
              className="p-2 rounded-md border-solid border-2 border-sky-500 transition-colors duration-300 hover:text-blue-400"
            >
              Back to posts
            </Link>
            <Link
              href={`/users/${post.userId}`}
              className="p-2 rounded-md border-solid border-2 border-sky-500 transition-colors duration-300 hover:text-blue-400"
            >
              Show author
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
