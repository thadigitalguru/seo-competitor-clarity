
import { useState } from "react";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { ApiKeyModal, type ApiKeyData } from "@/components/ApiKeyModal";

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
      
      <ApiKeyModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={handleApiKeySave}
      />
    </div>
  );
};

export default Index;
