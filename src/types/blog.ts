export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  featured: boolean;
  published: boolean;
  categories: string[];
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: string;
  views: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  postCount: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  postCount: number;
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
  parentId?: string;
  replies?: BlogComment[];
}

export interface BlogSearchResult {
  posts: BlogPost[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface BlogTemplate {
  id: string;
  name: string;
  description: string;
  content: string;
  category: string;
}