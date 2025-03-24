
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ApiKeyData) => void;
}

export interface ApiKeyData {
  googleSearchApiKey: string;
  googleSearchEngineId: string;
  semrushApiKey?: string;
}

export const ApiKeyModal = ({ isOpen, onClose, onSave }: ApiKeyModalProps) => {
  const { toast } = useToast();
  const [apiData, setApiData] = useState<ApiKeyData>({
    googleSearchApiKey: "",
    googleSearchEngineId: "",
    semrushApiKey: "",
  });
  
  const handleSave = () => {
    if (!apiData.googleSearchApiKey || !apiData.googleSearchEngineId) {
      toast({
        title: "Required fields missing",
        description: "Please enter required API credentials",
        variant: "destructive",
      });
      return;
    }
    
    // Save to local storage (in a real app, consider more secure options)
    localStorage.setItem("seo_api_credentials", JSON.stringify(apiData));
    
    toast({
      title: "API keys saved",
      description: "Your credentials have been stored securely",
    });
    
    onSave(apiData);
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-xl">API Credentials</DialogTitle>
          <DialogDescription>
            Enter your API keys to enable full functionality. Your data remains private and is stored only on your device.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="googleSearchApiKey" className="text-sm font-medium">
              Google API Key <span className="text-red-500">*</span>
            </Label>
            <Input
              id="googleSearchApiKey"
              placeholder="Enter Google Search API key"
              value={apiData.googleSearchApiKey}
              onChange={(e) => setApiData({ ...apiData, googleSearchApiKey: e.target.value })}
              className="focus-visible:ring-1"
            />
            <p className="text-xs text-muted-foreground">
              Get this from Google Cloud Console with Custom Search API enabled
            </p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="googleSearchEngineId" className="text-sm font-medium">
              Search Engine ID <span className="text-red-500">*</span>
            </Label>
            <Input
              id="googleSearchEngineId"
              placeholder="Enter Google Custom Search Engine ID"
              value={apiData.googleSearchEngineId}
              onChange={(e) => setApiData({ ...apiData, googleSearchEngineId: e.target.value })}
              className="focus-visible:ring-1"
            />
            <p className="text-xs text-muted-foreground">
              Create this at programmablesearchengine.google.com
            </p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="semrushApiKey" className="text-sm font-medium">
              SEMrush API Key <span className="text-muted-foreground text-xs">(optional)</span>
            </Label>
            <Input
              id="semrushApiKey"
              placeholder="Enter SEMrush API key for enhanced data"
              value={apiData.semrushApiKey}
              onChange={(e) => setApiData({ ...apiData, semrushApiKey: e.target.value })}
              className="focus-visible:ring-1"
            />
          </div>
        </div>
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save and Connect
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
