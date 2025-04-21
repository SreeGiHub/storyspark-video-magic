
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, GalleryHorizontal, Settings, MessageSquare, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    icon: Home,
    url: "/dashboard",
  },
  {
    label: "My Stories",
    icon: GalleryHorizontal,
    url: "/dashboard/stories",
  },
  {
    label: "Settings",
    icon: Settings,
    url: "/dashboard/settings",
  },
  {
    label: "Support",
    icon: MessageSquare,
    url: "/dashboard/support",
  },
];

const logoutItem = {
  label: "Logout",
  icon: LogOut,
  onClick: () => {
    // Placeholder: Integrate Supabase signout here later.
    window.location.href = "/";
  },
};

const AppSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Sidebar className="bg-gradient-to-b from-[#1A1F2C] to-[#403E43] text-white min-h-screen border-r border-[#232133] shadow-xl">
      <SidebarContent>
        <div className="flex flex-col gap-2 h-full">
          <div className="flex items-center h-20 justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text tracking-tight select-none">
              StorySparkVR
            </span>
          </div>
          <SidebarGroup>
            <SidebarGroupLabel className="uppercase tracking-wide text-xs text-gray-400 px-4">Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className="rounded-lg transition-all duration-150"
                    >
                      <a
                        href={item.url}
                        className="flex items-center gap-3 px-2"
                        onClick={e => {
                          e.preventDefault();
                          navigate(item.url);
                        }}
                        tabIndex={0}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="rounded-lg transition-all duration-150 mt-4 text-pink-400"
                  >
                    <button
                      tabIndex={0}
                      onClick={logoutItem.onClick}
                      className="flex items-center gap-3 px-2 w-full"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
