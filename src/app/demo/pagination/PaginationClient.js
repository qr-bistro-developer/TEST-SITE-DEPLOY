"use client";

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const PostItem = styled.li`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 12px;
  background: #fff;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin: 0 0 8px 0;
`;

const PostBody = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ $disabled = false }) => ($disabled ? "#ccc" : "#e74c3c")};
  color: #fff;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #c0392b;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #666;
`;

const LoadingText = styled.p`
  text-align: center;
  color: #666;
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #495057;
`;

// Client-side fetch function
const fetchPosts = async (page = 1, limit = 5) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  return response.json();
};

export const PaginationClient = ({ $initialPosts = [] }) => {
  const [posts, setPosts] = useState($initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = async (newPage) => {
    setIsLoading(true);
    try {
      // Client fetch หน้าถัดไป
      const newPosts = await fetchPosts(newPage, 5);
      setPosts(newPosts);
      setCurrentPage(newPage);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Pagination Demo</Title>

      <InfoBox>
        <strong>How it works:</strong>
        <br />
        - Server Component: fetch หน้าแรก (initial data)
        <br />
        - Client Component: fetch หน้าถัดไป (user interaction)
        <br />
        <br />
        <strong>หน้าแรก:</strong> Server fetch (เร็ว, SEO ดี)
        <br />
        <strong>หน้าถัดไป:</strong> Client fetch (ไม่ต้อง reload ทั้งหน้า)
      </InfoBox>

      {isLoading ? (
        <LoadingText>กำลังโหลด...</LoadingText>
      ) : (
        <PostList>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <PostTitle>
                {post.id}. {post.title}
              </PostTitle>
              <PostBody>{post.body}</PostBody>
            </PostItem>
          ))}
        </PostList>
      )}

      <ButtonGroup>
        <Button
          $disabled={currentPage === 1}
          disabled={currentPage === 1 || isLoading}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          ก่อนหน้า
        </Button>
        <PageInfo>หน้า {currentPage}</PageInfo>
        <Button
          $disabled={currentPage === 20}
          disabled={currentPage === 20 || isLoading}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          ถัดไป
        </Button>
      </ButtonGroup>
    </Container>
  );
};
