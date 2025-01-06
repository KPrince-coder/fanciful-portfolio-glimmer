import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Mail, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => navigate("/admin/projects/new")}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => navigate("/admin/blogs/new")}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Blog Post
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => navigate("/admin/messages")}
        >
          <Mail className="mr-2 h-4 w-4" />
          View Messages
        </Button>
      </CardContent>
    </Card>
  );
}