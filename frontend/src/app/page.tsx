"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetPosts } from "./api/post";
import { PostCard } from "./components";

export default function Home() {
  const queryClient = useQueryClient();
  const {
    data: posts = [],
    status,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: GetPosts,
    select: (res) => res.data,
  });
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {posts?.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
