import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
  onPostClick: (slug: string) => void;
}

export function RelatedPosts({ posts, onPostClick }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
          <ArrowRight className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => onPostClick(post.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}