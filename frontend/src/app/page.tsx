"use client";
import { useQuery } from "@tanstack/react-query";
import { GetPosts } from "./api/post";
import { PostCard } from "./components";
import { Post } from "./types";
import { Masonry } from "@mui/lab";

export default function Home() {
  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: GetPosts,
    select: (res) => res.data,
  });
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Masonry columns={4} spacing={2}>
        {posts?.map((post: Post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Masonry>
    </div>
  );
}
