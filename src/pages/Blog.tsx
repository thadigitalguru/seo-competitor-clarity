
import { BlogHeader } from "@/components/BlogHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, PieChart, Activity, BarChart2, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Blog = () => {
  const keyQuestions = [
    {
      id: "comparison",
      icon: PieChart,
      question: "How do I compare to my competitors in search results?",
      answer: "Where I Rank SEO provides side-by-side SERP position comparisons for your domains against direct competitors, giving you clear visibility into where you stand in the rankings race.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    },
    {
      id: "content",
      icon: Activity,
      question: "What content strategies are winning in my industry?",
      answer: "Our tool analyzes top-performing content in your niche, comparing metrics like word count, keyword density, and content structure to reveal what's working for industry leaders.",
      imageUrl: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    },
    {
      id: "keywords",
      icon: Search,
      question: "Which keywords should I be targeting?",
      answer: "Discover untapped keyword opportunities by analyzing competitor gaps – identifying valuable terms they rank for that you don't, or keywords with high search volume but low competition.",
      imageUrl: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    },
    {
      id: "outranking",
      icon: BarChart2,
      question: "Why are my competitors outranking me?",
      answer: "Gain insights into competitors' SEO advantages through comprehensive analysis of backlink profiles, content quality, technical SEO health, and user engagement metrics that affect rankings.",
      imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80"
    }
  ];

  const features = [
    {
      title: "Competitor Tracking",
      description: "Monitor your SERP positions against direct competitors in real-time"
    },
    {
      title: "Content Analysis",
      description: "Compare content metrics like word count and keyword usage across top performers"
    },
    {
      title: "Keyword Intelligence",
      description: "Discover what terms your competitors are ranking for that you're missing"
    },
    {
      title: "Performance Metrics",
      description: "Track SEO effectiveness over time with visual historical data"
    },
    {
      title: "Responsive Design",
      description: "Access insights on any device with our mobile-friendly interface"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogHeader />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 pt-6 pb-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">SEO Insights & Strategy</h1>
          <p className="text-muted-foreground max-w-3xl">
            Where I Rank SEO gives you crystal-clear insights into how you stack up against your competition in the search engine battlefield.
          </p>
        </div>
        
        <section id="key-questions" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Key Questions We Answer</h2>
            <div className="h-1 bg-primary/20 flex-1 ml-4 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {keyQuestions.map((item) => (
              <Card key={item.id} className="overflow-hidden border-t-4 border-t-primary/70 transition-all hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={item.imageUrl} 
                    alt={item.question} 
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                  <Button variant="link" className="px-0 mt-2">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <Separator className="my-10" />
        
        <section id="tool-features" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <div className="h-1 bg-primary/20 flex-1 ml-4 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button className="gap-2 px-6" size="lg">
              Try SEO Competitor Clarity Today <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
        
        <Separator className="my-10" />
        
        <section className="bg-primary/5 p-6 md:p-10 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to outrank your competitors?</h2>
            <p className="text-muted-foreground mb-6">
              Stop guessing what works in SEO. Get the data-driven insights you need to dominate search rankings in your industry.
            </p>
            <Button size="lg" className="mx-auto">Get Started Today</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
