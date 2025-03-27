
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Share2, BookOpen, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

export const BlogHeader = () => {
  const { toast } = useToast();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Where I Rank SEO Resources',
        text: 'Check out these SEO insights and strategies',
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast({
            title: "Link copied",
            description: "The URL has been copied to your clipboard",
          });
        })
        .catch((error) => console.error('Error copying text: ', error));
    }
  };
  
  const handleResourceClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    toast({
      title: "Resource saved",
      description: "SEO resource guide has been saved to your dashboard",
    });
  };
  
  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-primary/10 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        
        <h1 className={`text-xl font-semibold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isAnimating ? 'animate-pulse' : ''}`}>
          Where I Rank SEO Resources
        </h1>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare} className="hidden md:flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Resources
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleResourceClick} className="cursor-pointer">
                <Download className="h-4 w-4 mr-2" />
                Download SEO Guide
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#key-questions" className="flex items-center gap-2 cursor-pointer">
                  Key Questions
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="#tool-features" className="flex items-center gap-2 cursor-pointer">
                  Features
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
