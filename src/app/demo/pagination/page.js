// Server Component - fetch หน้าแรกเท่านั้น (initial data)
const fetchPosts = async (page = 1, limit = 5) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    { cache: "no-store" }
  );
  return response.json();
};

import { PaginationClient } from "./PaginationClient";

const PaginationDemo = async () => {
  // Server fetch หน้าแรก
  const initialPosts = await fetchPosts(1, 5);

  return <PaginationClient $initialPosts={initialPosts} />;
};

export default PaginationDemo;
