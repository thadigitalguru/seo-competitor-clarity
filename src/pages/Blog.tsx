
import { useState } from "react";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BlogArticle } from "@/components/BlogArticle";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("articles");
  const [showFullArticle, setShowFullArticle] = useState(false);
  
  // In a real app, these would be fetched from a database
  const blogPosts = [
    {
      id: "1",
      title: "How to Outrank Your Competitors: A Data-Driven Approach",
      description: "Discover how SEO Competitor Clarity gives you actionable insights to beat your competitors in search rankings and drive more organic traffic.",
      author: "Sarah Johnson",
      date: "June 15, 2024",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
      featured: true
    },
    {
      id: "2",
      title: "Content Length vs. Quality: What Really Matters for SEO",
      description: "We analyze data from thousands of top-ranking pages to determine whether word count or content quality has a bigger impact on search rankings.",
      author: "Michael Chen",
      date: "June 10, 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    },
    {
      id: "3",
      title: "Keyword Gap Analysis: Finding Opportunities Your Competitors Miss",
      description: "Learn how to identify valuable keyword opportunities that your competitors are overlooking, and how to capitalize on them.",
      author: "Emily Rodriguez",
      date: "June 5, 2024",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    },
    {
      id: "4",
      title: "The Complete Guide to Understanding SEO Performance Metrics",
      description: "A comprehensive breakdown of the key metrics that matter for measuring your SEO success and how to interpret them correctly.",
      author: "David Wilson",
      date: "May 28, 2024",
      readTime: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogHeader />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 pt-6 pb-16">
        {!showFullArticle ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">SEO Insights & Strategy</h1>
              <p className="text-muted-foreground max-w-3xl">
                Practical guides, industry insights, and data-driven strategies to help you dominate search rankings and outperform your competitors.
              </p>
            </div>
            
            <Tabs 
              defaultValue="articles" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full mb-8"
            >
              <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 mb-6">
                <TabsTrigger value="articles">All Articles</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="articles" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.map((post, index) => (
                    <div key={post.id} className={index === 0 ? "lg:col-span-3" : ""}>
                      <BlogPostCard 
                        {...post}
                        featured={index === 0}
                      />
                      {index === 0 && (
                        <div className="mt-4 flex justify-center">
                          <Button onClick={() => setShowFullArticle(true)}>
                            Read Featured Article
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="guides" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.filter((_, index) => index % 2 === 0).map((post) => (
                    <BlogPostCard key={post.id} {...post} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="case-studies" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogPosts.filter((_, index) => index % 2 === 1).map((post) => (
                    <BlogPostCard key={post.id} {...post} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="animate-fade-in">
            <Button 
              variant="outline" 
              onClick={() => setShowFullArticle(false)}
              className="mb-6"
            >
              ← Back to Articles
            </Button>
            <BlogArticle />
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;
