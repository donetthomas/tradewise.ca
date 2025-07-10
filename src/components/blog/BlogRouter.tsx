import React, { useState } from 'react';
import { BlogLayout } from './BlogLayout';
import { BlogList } from './BlogList';
import { BlogPost } from './BlogPost';
import { BlogAdmin } from './BlogAdmin';

type BlogView = 'list' | 'post' | 'admin';

interface BlogState {
  view: BlogView;
  currentSlug?: string;
}

export function BlogRouter() {
  const [state, setState] = useState<BlogState>({ view: 'list' });

  const handlePostClick = (slug: string) => {
    setState({ view: 'post', currentSlug: slug });
  };

  const handleBackToList = () => {
    setState({ view: 'list' });
  };

  const handleAdminAccess = () => {
    // In a real app, you'd check authentication here
    setState({ view: 'admin' });
  };

  return (
    <BlogLayout>
      {state.view === 'list' && (
        <>
          <BlogList onPostClick={handlePostClick} />
          {/* Admin Access Button (hidden in production) */}
          <div className="fixed bottom-4 right-4">
            <button
              onClick={handleAdminAccess}
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-colors"
              title="Admin Access"
            >
              ⚙️
            </button>
          </div>
        </>
      )}
      
      {state.view === 'post' && state.currentSlug && (
        <BlogPost 
          slug={state.currentSlug} 
          onBack={handleBackToList}
          onPostClick={handlePostClick}
        />
      )}
      
      {state.view === 'admin' && (
        <BlogAdmin />
      )}
    </BlogLayout>
  );
}