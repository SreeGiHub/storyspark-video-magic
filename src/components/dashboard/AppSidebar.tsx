
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Folders, Film, Settings, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function AppSidebar() {
  const navigate = useNavigate();
  const items = [
    { title: "Folders", url: "/folders", icon: Folders },
    { title: "My Stories", url: "/stories", icon: Film },
    { title: "Settings", url: "/settings", icon: Settings },
    { title: "Help", url: "/help", icon: HelpCircle },
    { title: "Logout", url: "/logout", icon: LogOut },
  ];

  return (
    <Sidebar className="border-none bg-transparent shadow-none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="flex items-center justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton 
                        asChild 
                        tooltip={item.title}
                        className="p-3 hover:bg-accent/30 rounded-lg transition-all duration-200 flex items-center justify-center"
                      >
                        <button 
                          onClick={() => navigate(item.url)}
                          className="flex items-center justify-center"
                        >
                          <item.icon className="w-5 h-5 text-foreground" />
                          <span className="sr-only">{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      {item.title}
                    </TooltipContent>
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
