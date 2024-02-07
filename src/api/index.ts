import { IPost } from "@/interfaces/IPost";
import { IUser } from "@/interfaces/IUser";

export async function getDataPosts(): Promise<IPost[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getDataPost(id: string): Promise<IPost | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getDataUsers(): Promise<IUser[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getDataUser(id: string): Promise<IUser | null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch data");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
