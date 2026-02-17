export function calculateReadingTime(content: string): number {
  // Average reading speed: 200-250 words per minute
  // We'll use 225 as middle ground
  const wordsPerMinute = 225;
  
  // Remove frontmatter, code blocks, and MDX components for accurate count
  const cleanContent = content
    .replace(/---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/<[^>]*>/g, '') // Remove HTML/JSX tags
    .replace(/[#*`_~\[\]()]/g, ''); // Remove markdown formatting

  const words = cleanContent.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  return Math.max(1, minutes); // Minimum 1 minute
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
}
