import React, { useState, useEffect } from 'react';
import { blogPosts, getPostsByTag } from '../data/blogPosts';
import './Blog2.css';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter posts based on selected tag
  const filteredPosts = selectedTag ? getPostsByTag(selectedTag) : blogPosts;

  const handleTagClick = (tag) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const formatContent = (content) => {
    const paragraphs = content.split('\n').filter(p => p.trim());
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph.trim()}</p>
    ));
  };

  const getPreviewContent = (content) => {
    const paragraphs = content.split('\n').filter(p => p.trim());
    // Show first paragraph completely
    const firstParagraph = paragraphs[0] || '';
    return firstParagraph;
  };

  const getRemainingContent = (content) => {
    const paragraphs = content.split('\n').filter(p => p.trim());
    // Return all paragraphs except the first one
    const remainingParagraphs = paragraphs.slice(1);
    return remainingParagraphs.map((paragraph, index) => (
      <p key={index}>{paragraph.trim()}</p>
    ));
  };

  const shouldShowExpand = (content) => {
    const paragraphs = content.split('\n').filter(p => p.trim());
    return paragraphs.length > 1;
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-title">My Blog</h1>

      </div>

      {/* Tag Filter */}
      <div className="tag-filter">
        <h3>Filter by topic:</h3>
        <div className="tag-list">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button 
              className="clear-filter"
              onClick={() => setSelectedTag(null)}
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="blog-posts">
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>No posts found for the selected filter.</p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <article key={post.id} className="blog-post">
              <div className="post-header">
                <h2 className="post-title">{post.title}</h2>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
              
              <div className="post-content-preview">
                {shouldShowExpand(post.content) ? (
                  <>
                    <p>{getPreviewContent(post.content)}</p>
                    {expandedPost !== post.id && (
                      <div className="content-fade">
                        <div className="fade-overlay"></div>
                        <button 
                          className="expand-btn"
                          onClick={() => togglePost(post.id)}
                        >
                          <span className="expand-icon">⌄</span>
                          <span>read more</span>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <p>{post.content}</p>
                )}
              </div>

              {expandedPost === post.id && shouldShowExpand(post.content) && (
                <div className="post-content-expanded">
                  {getRemainingContent(post.content)}
                  <button 
                    className="collapse-btn"
                    onClick={() => togglePost(post.id)}
                  >
                    <span className="collapse-icon">⌃</span>
                    <span>show less</span>
                  </button>
                </div>
              )}

              {(expandedPost === post.id || !shouldShowExpand(post.content)) && (
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="post-tag"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
