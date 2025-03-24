
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { ApiKeyModal, type ApiKeyData } from "@/components/ApiKeyModal";
import { Button } from "@/components/ui/button";
import { FileText, Settings } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const handleApiKeySave = (data: ApiKeyData) => {
    // Handle API key saved from settings
    console.log("API keys saved from settings", data);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />
      <Dashboard />
      
      <div className="fixed bottom-6 right-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full shadow-lg">
              <Settings className="h-5 w-5 mr-2" />
              Resources
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to="/blog" className="flex items-center gap-2 cursor-pointer">
                <FileText className="h-4 w-4" />
                SEO Blog & Insights
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsSettingsOpen(true)} className="cursor-pointer">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <ApiKeyModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleApiKeySave}
      />
    </div>
  );
};

export default Index;
