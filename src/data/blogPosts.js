// blogPosts.js - Blog data structure
import { posts } from './posts.js';

export const blogPosts = posts;

// Helper function to get posts by tag
export const getPostsByTag = (tag) => {
  return blogPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};

// Helper function to get recent posts
export const getRecentPosts = (count = 3) => {
  return blogPosts.slice(0, count);
};

// Helper function to get post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};
