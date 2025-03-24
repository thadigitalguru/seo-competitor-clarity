
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { ApiKeyModal, type ApiKeyData } from "@/components/ApiKeyModal";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
        <Link to="/blog">
          <Button className="rounded-full flex items-center gap-2 shadow-lg">
            <FileText className="h-4 w-4" />
            Blog
          </Button>
        </Link>
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
