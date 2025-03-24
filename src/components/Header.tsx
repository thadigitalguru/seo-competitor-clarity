
import { useState } from "react";
import { Search, Settings, Bell, Menu, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface HeaderProps {
  onOpenSettings: () => void;
}

export const Header = ({ onOpenSettings }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState("");
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full py-4 px-4 md:px-8 border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md fixed top-0 z-10 animate-slide-down">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {isMobile && (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-xl font-semibold tracking-tight hidden md:block">SEO Competitor Clarity</h1>
          <h1 className="text-lg font-semibold tracking-tight md:hidden">SEO Clarity</h1>
        </div>
        
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search domains, keywords..."
              className="pl-8 bg-secondary/50 border-0 focus-visible:ring-1"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <FileText className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <div className="p-2 font-medium text-sm">Resources</div>
              <DropdownMenuItem className="cursor-pointer">
                <Link to="/blog" className="w-full">
                  SEO Clarity Blog
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <div className="p-2 font-medium text-sm">Notifications</div>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-sm">Ranking update available</span>
                  <span className="text-xs text-muted-foreground">New SERP data for your domains is ready</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" onClick={onOpenSettings}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
