
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings } from "lucide-react";

export const BlogHeader = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-primary/10 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
        
        <h1 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-pulse">SEO Clarity Resources</h1>
        
        <div className="hidden md:flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="#key-questions" className="flex items-center gap-2">
              Key Questions
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="#tool-features" className="flex items-center gap-2">
              Features
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
