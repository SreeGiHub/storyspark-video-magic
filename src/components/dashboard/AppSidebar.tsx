
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
                <SidebarMenuItem key={item.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton 
                        asChild 
                        tooltip={item.title}
                      >
                        <button 
                          onClick={() => navigate(item.url)}
                          className="p-3 hover:bg-white/30 rounded-lg transition-all duration-200"
                        >
                          <item.icon className="w-5 h-5 text-gray-700" />
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
