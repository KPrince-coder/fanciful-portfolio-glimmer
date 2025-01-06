import { useQuery } from "@tanstack/react-query";
import { Loader2, Users, BookText, Briefcase, MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { StatsCard } from "@/components/admin/dashboard/StatsCard";
import { RecentActivity } from "@/components/admin/dashboard/RecentActivity";
import { QuickActions } from "@/components/admin/dashboard/QuickActions";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const [projects, blogs, messages] = await Promise.all([
        supabase.from("projects").select("id", { count: "exact" }),
        supabase.from("blogs").select("id", { count: "exact" }),
        supabase.from("messages").select("id", { count: "exact" }),
      ]);

      return {
        projects: projects.count || 0,
        blogs: blogs.count || 0,
        messages: messages.count || 0,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  const cards = [
    {
      title: "Total Projects",
      value: stats?.projects || 0,
      icon: Briefcase,
    },
    {
      title: "Blog Posts",
      value: stats?.blogs || 0,
      icon: BookText,
    },
    {
      title: "Messages",
      value: stats?.messages || 0,
      icon: MessageSquare,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <StatsCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
}