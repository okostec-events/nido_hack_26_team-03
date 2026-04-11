export interface Resource {
  id: string;
  title: string;
  creator: string;
  platform: 'youtube' | 'udemy' | 'coursera' | 'skillshare' | 'free';
  type: 'youtube' | 'free' | 'paid';
  thumbnailUrl: string;
  resourceUrl: string;
  rating: number;
  reviewCount: number;
  price: number;
  shortDescription: string;
  tags: string[];
  views?: number;
  enrollments?: number;
}

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Complete Dropshipping Course 2026 - Build a $10K/Month Store',
    creator: 'Wholesale Ted',
    platform: 'youtube',
    type: 'youtube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop',
    resourceUrl: 'https://youtube.com/watch?v=example1',
    rating: 4.8,
    reviewCount: 12400,
    price: 0,
    shortDescription: 'Learn how to build a profitable dropshipping business from scratch with proven strategies and real case studies.',
    tags: ['dropshipping', 'ecommerce', 'business'],
    views: 1240000,
  },
  {
    id: '2',
    title: 'Shopify Dropshipping Masterclass',
    creator: 'Sebastian Ghiorghiu',
    platform: 'youtube',
    type: 'youtube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
    resourceUrl: 'https://youtube.com/watch?v=example2',
    rating: 4.7,
    reviewCount: 8900,
    price: 0,
    shortDescription: 'Step-by-step guide to launching your first Shopify store and scaling to 6 figures.',
    tags: ['dropshipping', 'shopify', 'ecommerce'],
    views: 890000,
  },
  {
    id: '3',
    title: 'The Complete Dropshipping Blueprint',
    creator: 'Udemy Business',
    platform: 'udemy',
    type: 'paid',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop',
    resourceUrl: 'https://udemy.com/course/dropshipping-blueprint',
    rating: 4.6,
    reviewCount: 15600,
    price: 89.99,
    shortDescription: 'Comprehensive course covering product research, supplier management, and Facebook ads for dropshipping.',
    tags: ['dropshipping', 'marketing', 'facebook ads'],
    enrollments: 45000,
  },
  {
    id: '4',
    title: 'Python for Everybody Specialization',
    creator: 'Dr. Charles Severance',
    platform: 'coursera',
    type: 'free',
    thumbnailUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
    resourceUrl: 'https://coursera.org/specializations/python',
    rating: 4.9,
    reviewCount: 234000,
    price: 0,
    shortDescription: 'Learn Python programming from basics to data structures. Perfect for absolute beginners.',
    tags: ['python', 'programming', 'beginner'],
    enrollments: 2340000,
  },
  {
    id: '5',
    title: 'Complete Python Bootcamp: Go from Zero to Hero',
    creator: 'Jose Portilla',
    platform: 'udemy',
    type: 'paid',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=225&fit=crop',
    resourceUrl: 'https://udemy.com/course/complete-python-bootcamp',
    rating: 4.8,
    reviewCount: 487000,
    price: 94.99,
    shortDescription: 'Master Python 3 with projects, exercises, and quizzes. Includes OOP, decorators, and more.',
    tags: ['python', 'programming', 'intermediate'],
    enrollments: 1500000,
  },
  {
    id: '6',
    title: 'Quantum Physics for Beginners',
    creator: 'MIT OpenCourseWare',
    platform: 'free',
    type: 'free',
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop',
    resourceUrl: 'https://ocw.mit.edu/quantum-physics',
    rating: 4.7,
    reviewCount: 8900,
    price: 0,
    shortDescription: 'Introduction to quantum mechanics covering wave functions, uncertainty principle, and Schrödinger equation.',
    tags: ['physics', 'quantum', 'science'],
    enrollments: 125000,
  },
  {
    id: '7',
    title: 'Understanding Quantum Physics: An Advanced Course',
    creator: 'Leonard Susskind',
    platform: 'youtube',
    type: 'youtube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=225&fit=crop',
    resourceUrl: 'https://youtube.com/playlist/quantum-mechanics',
    rating: 4.9,
    reviewCount: 34500,
    price: 0,
    shortDescription: 'Stanford lecture series on quantum mechanics, covering advanced topics and mathematical foundations.',
    tags: ['physics', 'quantum', 'advanced'],
    views: 3450000,
  },
  {
    id: '8',
    title: 'Sales Mastery: The Ultimate Sales Training',
    creator: 'Grant Cardone',
    platform: 'udemy',
    type: 'paid',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=225&fit=crop',
    resourceUrl: 'https://udemy.com/course/sales-mastery',
    rating: 4.5,
    reviewCount: 23400,
    price: 129.99,
    shortDescription: 'Learn proven sales techniques, objection handling, and closing strategies from a sales expert.',
    tags: ['sales', 'business', 'communication'],
    enrollments: 89000,
  },
  {
    id: '9',
    title: 'The Psychology of Selling',
    creator: 'Brian Tracy',
    platform: 'youtube',
    type: 'youtube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=225&fit=crop',
    resourceUrl: 'https://youtube.com/watch?v=psychology-selling',
    rating: 4.8,
    reviewCount: 45600,
    price: 0,
    shortDescription: 'Understand the psychological principles behind successful selling and customer persuasion.',
    tags: ['sales', 'psychology', 'business'],
    views: 2340000,
  },
  {
    id: '10',
    title: 'Digital Marketing Masterclass - 23 Courses in 1',
    creator: 'Phil Ebiner',
    platform: 'udemy',
    type: 'paid',
    thumbnailUrl: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=225&fit=crop',
    resourceUrl: 'https://udemy.com/course/digital-marketing-masterclass',
    rating: 4.6,
    reviewCount: 67800,
    price: 99.99,
    shortDescription: 'Complete digital marketing course covering SEO, social media, email marketing, and analytics.',
    tags: ['marketing', 'digital marketing', 'seo'],
    enrollments: 234000,
  },
  {
    id: '11',
    title: 'Google Digital Marketing & E-commerce Certificate',
    creator: 'Google Career Certificates',
    platform: 'coursera',
    type: 'free',
    thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=225&fit=crop',
    resourceUrl: 'https://coursera.org/google-digital-marketing',
    rating: 4.8,
    reviewCount: 123000,
    price: 0,
    shortDescription: 'Professional certificate in digital marketing and e-commerce from Google. Job-ready skills in 6 months.',
    tags: ['marketing', 'google', 'certificate'],
    enrollments: 567000,
  },
  {
    id: '12',
    title: 'Mathematics for Machine Learning',
    creator: 'Imperial College London',
    platform: 'coursera',
    type: 'free',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=225&fit=crop',
    resourceUrl: 'https://coursera.org/math-ml',
    rating: 4.7,
    reviewCount: 45600,
    price: 0,
    shortDescription: 'Learn the essential mathematics for machine learning: linear algebra, calculus, and statistics.',
    tags: ['math', 'machine learning', 'data science'],
    enrollments: 234000,
  },
  {
    id: '13',
    title: 'Calculus Made Easy - Complete Course',
    creator: '3Blue1Brown',
    platform: 'youtube',
    type: 'youtube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=225&fit=crop',
    resourceUrl: 'https://youtube.com/playlist/calculus',
    rating: 5.0,
    reviewCount: 89000,
    price: 0,
    shortDescription: 'Visual and intuitive approach to understanding calculus concepts from derivatives to integrals.',
    tags: ['math', 'calculus', 'education'],
    views: 8900000,
  },
  {
    id: '14',
    title: 'Stock Trading & Investing for Beginners',
    creator: 'Ricky Gutierrez',
    platform: 'youtube',
    type: 'youtube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
    resourceUrl: 'https://youtube.com/watch?v=trading-basics',
    rating: 4.6,
    reviewCount: 34500,
    price: 0,
    shortDescription: 'Learn the fundamentals of stock trading, technical analysis, and risk management strategies.',
    tags: ['trading', 'stocks', 'investing'],
    views: 1230000,
  },
  {
    id: '15',
    title: 'Advanced Trading Strategies & Technical Analysis',
    creator: 'Udemy Trading Academy',
    platform: 'udemy',
    type: 'paid',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=225&fit=crop',
    resourceUrl: 'https://udemy.com/course/advanced-trading',
    rating: 4.7,
    reviewCount: 23400,
    price: 149.99,
    shortDescription: 'Master advanced chart patterns, indicators, and algorithmic trading strategies for consistent profits.',
    tags: ['trading', 'technical analysis', 'advanced'],
    enrollments: 67000,
  },
];

export function getResourcesByTopic(topic: string, level: string, contentType: string): Resource[] {
  const topicLower = topic.toLowerCase();
  
  let filtered = mockResources.filter(resource => {
    const matchesTopic = resource.tags.some(tag => 
      tag.toLowerCase().includes(topicLower) || 
      topicLower.includes(tag.toLowerCase()) ||
      resource.title.toLowerCase().includes(topicLower)
    );
    
    const matchesLevel = level === 'all' || 
      resource.tags.includes(level.toLowerCase()) ||
      (level === 'beginner' && !resource.tags.includes('advanced') && !resource.tags.includes('intermediate'));
    
    const matchesType = contentType === 'mixed' || 
      (contentType === 'free' && resource.price === 0) ||
      (contentType === 'paid' && resource.price > 0);
    
    return matchesTopic && matchesLevel && matchesType;
  });

  // If no matches, return all resources
  if (filtered.length === 0) {
    filtered = mockResources;
  }

  // Sort by rating and review count
  return filtered.sort((a, b) => {
    const scoreA = a.rating * Math.log(a.reviewCount + 1);
    const scoreB = b.rating * Math.log(b.reviewCount + 1);
    return scoreB - scoreA;
  }).slice(0, 15);
}
