
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
import { Home, FileText, Settings, MessageSquare, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AppSidebar() {
  const navigate = useNavigate();
  const items = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "My Stories", url: "/stories", icon: FileText },
    { title: "Settings", url: "/settings", icon: Settings },
    { title: "Support", url: "/support", icon: MessageSquare },
    { title: "Logout", url: "/logout", icon: LogOut },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button onClick={() => navigate(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
