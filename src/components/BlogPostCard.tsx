
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

export const BlogPostCard = ({
  title,
  description,
  author,
  date,
  readTime,
  imageUrl,
  featured = false,
}: BlogPostCardProps) => {
  return (
    <Card className={`overflow-hidden ${featured ? 'border-primary/20' : ''}`}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="flex items-center gap-4 text-xs mt-2">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-xs text-muted-foreground">{date}</span>
        <Button variant="ghost" size="sm" className="gap-1">
          Read More <ArrowRight className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};
