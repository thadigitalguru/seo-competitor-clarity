
import { useState, useEffect } from "react";
import { CompetitorCard } from "./CompetitorCard";
import { ApiKeyModal, type ApiKeyData } from "./ApiKeyModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, AlertTriangle, Globe, Search } from "lucide-react";

// Mock data - in a real app, this would come from an API
const MOCK_COMPETITORS = [
  {
    domain: "competitor1.com",
    rank: 1,
    change: 2,
    wordCount: 2450,
    keywordCount: 87,
    performance: 92,
    topKeywords: [
      { keyword: "best seo tools 2024", position: 3 },
      { keyword: "competitor analysis software", position: 2 },
      { keyword: "keyword research tools", position: 5 },
      { keyword: "seo competitor comparison", position: 1 },
    ]
  },
  {
    domain: "competitor2.com",
    rank: 2,
    change: -1,
    wordCount: 1890,
    keywordCount: 64,
    performance: 85,
    topKeywords: [
      { keyword: "seo competitor analysis", position: 4 },
      { keyword: "compare website keywords", position: 3 },
      { keyword: "serp position tracker", position: 2 },
      { keyword: "best seo comparison tools", position: 5 },
    ]
  },
  {
    domain: "competitor3.com",
    rank: 3,
    change: 0,
    wordCount: 2150,
    keywordCount: 72,
    performance: 78,
    topKeywords: [
      { keyword: "track competitor rankings", position: 2 },
      { keyword: "seo competitor tracking", position: 7 },
      { keyword: "keyword gap analysis", position: 3 },
      { keyword: "seo performance metrics", position: 6 },
    ]
  },
  {
    domain: "competitor4.com",
    rank: 4,
    change: 5,
    wordCount: 1750,
    keywordCount: 58,
    performance: 72,
    topKeywords: [
      { keyword: "seo competitive analysis", position: 8 },
      { keyword: "serp position monitoring", position: 4 },
      { keyword: "compare website seo", position: 9 },
      { keyword: "keyword rank tracker", position: 5 },
    ]
  },
];

export const Dashboard = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isApiConfigured, setIsApiConfigured] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [competitorData, setCompetitorData] = useState(MOCK_COMPETITORS);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Check if API keys are configured
  useEffect(() => {
    const savedApiData = localStorage.getItem("seo_api_credentials");
    if (savedApiData) {
      try {
        const parsedData = JSON.parse(savedApiData);
        if (parsedData.googleSearchApiKey && parsedData.googleSearchEngineId) {
          setIsApiConfigured(true);
        }
      } catch (error) {
        console.error("Error parsing saved API data", error);
      }
    }
  }, []);
  
  const handleApiKeySave = (data: ApiKeyData) => {
    setIsApiConfigured(true);
  };
  
  const handleSearch = () => {
    if (!url && !keyword) {
      toast({
        title: "Input needed",
        description: "Please enter a URL or keyword to analyze",
        variant: "destructive",
      });
      return;
    }
    
    if (!isApiConfigured) {
      setIsApiKeyModalOpen(true);
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be replaced with actual API calls
      // to fetch data based on the URL or keyword
      toast({
        title: "Analysis complete",
        description: `Results for ${url || keyword} are ready`,
      });
      setIsSearching(false);
    }, 1500);
  };
  
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-24 pb-16 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SEO Competitor Analysis</h2>
        
        <div className="glass-panel rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Enter domain or keyword to analyze</h3>
          
          <div className="grid gap-4 md:grid-cols-[1fr,auto]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Your domain (e.g., yourdomain.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Target keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleSearch} 
              disabled={isSearching}
              className="w-full md:w-auto"
            >
              {isSearching ? "Analyzing..." : "Analyze"}
              {!isSearching && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          </div>
          
          {!isApiConfigured && (
            <Alert variant="destructive" className="mt-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="flex justify-between items-center">
                <span>API credentials are required for analysis</span>
                <Button size="sm" onClick={() => setIsApiKeyModalOpen(true)}>
                  Configure API
                </Button>
              </AlertDescription>
            </Alert>
          )}
        </div>
        
        <Tabs 
          defaultValue="overview" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {competitorData.map((competitor, index) => (
                <CompetitorCard key={index} competitorData={competitor} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="keywords" className="mt-0">
            <div className="glass-panel rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Keyword Analysis</h3>
              <p className="text-muted-foreground">
                Enter a domain or keyword above to analyze keyword rankings and opportunities
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="content" className="mt-0">
            <div className="glass-panel rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Content Analysis</h3>
              <p className="text-muted-foreground">
                Enter a domain above to analyze content length, readability, and structure
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <ApiKeyModal 
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onSave={handleApiKeySave}
      />
    </div>
  );
};
