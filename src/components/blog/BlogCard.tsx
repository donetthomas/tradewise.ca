import React from 'react';
import { Clock, Eye, User, Calendar } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { blogCategories } from '../../data/blogData';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  onClick: () => void;
}

export function BlogCard({ post, featured = false, onClick }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (categoryId: string) => {
    const category = blogCategories.find(cat => cat.id === categoryId);
    return category?.color || 'blue';
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      orange: 'bg-orange-100 text-orange-800',
      teal: 'bg-teal-100 text-teal-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <article 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer overflow-hidden ${
        featured ? 'lg:col-span-2' : ''
      }`}
      onClick={onClick}
    >
      {/* Featured Image */}
      {post.featuredImage && (
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {post.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.slice(0, 2).map(categoryId => {
            const category = blogCategories.find(cat => cat.id === categoryId);
            if (!category) return null;
            
            return (
              <span 
                key={categoryId}
                className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(category.color)}`}
              >
                {category.name}
              </span>
            );
          })}
        </div>

        {/* Title */}
        <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors ${
          featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 line-clamp-3 ${
          featured ? 'text-lg' : 'text-base'
        }`}>
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {post.tags.slice(0, 3).map(tag => (
              <span 
                key={tag}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-400">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}