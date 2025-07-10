import { useState, useEffect, useMemo } from 'react';
import { BlogPost, BlogSearchResult, BlogComment } from '../types/blog';
import { blogPosts, blogCategories, blogTags } from '../data/blogData';

export function useBlog() {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [comments, setComments] = useState<BlogComment[]>([]);

  // Get published posts only
  const publishedPosts = useMemo(() => 
    posts.filter(post => post.published), 
    [posts]
  );

  // Get featured posts
  const featuredPosts = useMemo(() => 
    publishedPosts.filter(post => post.featured), 
    [publishedPosts]
  );

  // Search posts
  const searchPosts = (
    query: string = '',
    category: string = '',
    tag: string = '',
    page: number = 1,
    limit: number = 10
  ): BlogSearchResult => {
    let filteredPosts = publishedPosts;

    // Filter by search query
    if (query) {
      const searchTerm = query.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Filter by category
    if (category) {
      filteredPosts = filteredPosts.filter(post =>
        post.categories.includes(category)
      );
    }

    // Filter by tag
    if (tag) {
      filteredPosts = filteredPosts.filter(post =>
        post.tags.includes(tag)
      );
    }

    // Sort by published date (newest first)
    filteredPosts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    // Pagination
    const totalCount = filteredPosts.length;
    const totalPages = Math.ceil(totalCount / limit);
    const startIndex = (page - 1) * limit;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + limit);

    return {
      posts: paginatedPosts,
      totalCount,
      currentPage: page,
      totalPages
    };
  };

  // Get post by slug
  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return publishedPosts.find(post => post.slug === slug);
  };

  // Get related posts
  const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
    return publishedPosts
      .filter(post => post.id !== currentPost.id)
      .filter(post => 
        post.categories.some(cat => currentPost.categories.includes(cat)) ||
        post.tags.some(tag => currentPost.tags.includes(tag))
      )
      .sort((a, b) => {
        // Score based on shared categories and tags
        const aScore = 
          a.categories.filter(cat => currentPost.categories.includes(cat)).length * 2 +
          a.tags.filter(tag => currentPost.tags.includes(tag)).length;
        const bScore = 
          b.categories.filter(cat => currentPost.categories.includes(cat)).length * 2 +
          b.tags.filter(tag => currentPost.tags.includes(tag)).length;
        return bScore - aScore;
      })
      .slice(0, limit);
  };

  // Get comments for a post
  const getPostComments = (postId: string): BlogComment[] => {
    return comments
      .filter(comment => comment.postId === postId && comment.approved)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  };

  // Add comment
  const addComment = (comment: Omit<BlogComment, 'id' | 'createdAt' | 'approved'>): void => {
    const newComment: BlogComment = {
      ...comment,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      approved: true // Auto-approve for demo
    };
    setComments(prev => [...prev, newComment]);
  };

  // Increment post views
  const incrementViews = (postId: string): void => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, views: post.views + 1 }
        : post
    ));
  };

  return {
    posts: publishedPosts,
    featuredPosts,
    categories: blogCategories,
    tags: blogTags,
    searchPosts,
    getPostBySlug,
    getRelatedPosts,
    getPostComments,
    addComment,
    incrementViews
  };
}