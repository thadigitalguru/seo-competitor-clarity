
import { useState } from "react";
import { ArrowDown, ArrowUp, Link, BarChart3, FileText, ExternalLink } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";

interface CompetitorCardProps {
  competitorData: {
    domain: string;
    rank: number;
    change: number;
    wordCount: number;
    keywordCount: number;
    performance: number;
    topKeywords: Array<{ keyword: string; position: number }>;
  };
}

export const CompetitorCard = ({ competitorData }: CompetitorCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-100 dark:border-gray-800 animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              {competitorData.domain}
              <a 
                href={`https://${competitorData.domain}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardTitle>
            <CardDescription>
              Rank: #{competitorData.rank} 
              <span className={`ml-2 inline-flex items-center ${competitorData.change > 0 ? 'text-green-500' : competitorData.change < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                {competitorData.change > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : competitorData.change < 0 ? <ArrowDown className="h-3 w-3 mr-1" /> : null}
                {Math.abs(competitorData.change)}
              </span>
            </CardDescription>
          </div>
          <Badge variant={competitorData.rank <= 3 ? "default" : "secondary"} className="font-normal">
            {competitorData.rank <= 3 ? "Top Performer" : "Competitor"}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Content Length</span>
            <span className="text-lg font-medium flex items-center gap-1">
              <FileText className="h-4 w-4 text-muted-foreground" />
              {competitorData.wordCount.toLocaleString()}
            </span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">Keywords</span>
            <span className="text-lg font-medium flex items-center gap-1">
              <Link className="h-4 w-4 text-muted-foreground" />
              {competitorData.keywordCount}
            </span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground mb-1">SEO Score</span>
            <span className="text-lg font-medium flex items-center gap-1">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              {competitorData.performance}/100
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between mb-1 text-xs">
            <span>Performance</span>
            <span className="font-medium">{competitorData.performance}%</span>
          </div>
          <Progress value={competitorData.performance} className="h-1.5" />
        </div>
        
        {isExpanded && (
          <div className="mt-4 animate-slide-up">
            <h4 className="text-sm font-medium mb-2">Top Keywords</h4>
            <div className="space-y-2">
              {competitorData.topKeywords.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <span className="cursor-help truncate max-w-[200px]">{item.keyword}</span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80" align="start">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">Keyword Details</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Position:</div>
                          <div className="font-medium">{item.position}</div>
                          <div>Search Volume:</div>
                          <div className="font-medium">~2.4k/mo</div>
                          <div>Difficulty:</div>
                          <div className="font-medium">Medium</div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <Badge variant="outline" className="ml-2 font-normal">
                    #{item.position}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-center pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs w-full" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </CardFooter>
    </Card>
  );
};
