import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { MessageSquare, FileText, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/lib/supabase";

export function RecentActivity() {
  const { data: activities } = useQuery({
    queryKey: ["recent-activities"],
    queryFn: async () => {
      const [messages, blogs, projects] = await Promise.all([
        supabase
          .from("messages")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5),
        supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5),
        supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5),
      ]);

      const allActivities = [
        ...(messages.data || []).map((m) => ({
          ...m,
          type: "message",
          icon: MessageSquare,
        })),
        ...(blogs.data || []).map((b) => ({
          ...b,
          type: "blog",
          icon: FileText,
        })),
        ...(projects.data || []).map((p) => ({
          ...p,
          type: "project",
          icon: Briefcase,
        })),
      ].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      return allActivities.slice(0, 10);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities?.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={`${activity.type}-${activity.id}`}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-accent/50"
                >
                  <Icon className="w-5 h-5 mt-1 text-secondary" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">
                      {activity.type === "message"
                        ? `New message from ${activity.name}`
                        : activity.type === "blog"
                        ? `New blog post: ${activity.title}`
                        : `New project: ${activity.title}`}
                    </p>
                    <p className="text-xs text-gray-400">
                      {format(new Date(activity.created_at), "PPp")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}