import { useNavigate, useLocation } from "react-router-dom";
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
import {
  Settings,
  LayoutDashboard,
  FileText,
  Briefcase,
  BookText,
  Clock,
  MessageSquare,
  LogOut,
  User,
  BarChart,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: User,
  },
  {
    title: "Projects",
    path: "/admin/projects",
    icon: Briefcase,
  },
  {
    title: "Blog Posts",
    path: "/admin/blogs",
    icon: BookText,
  },
  {
    title: "Timeline",
    path: "/admin/timeline",
    icon: Clock,
  },
  {
    title: "Messages",
    path: "/admin/messages",
    icon: MessageSquare,
  },
  {
    title: "Skills",
    path: "/admin/skills",
    icon: BarChart,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/admin/login");
      toast({
        title: "Signed out successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-secondary">Admin Panel</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-accent" : ""}
                  >
                    <button
                      onClick={() => navigate(item.path)}
                      className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors text-red-500"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}