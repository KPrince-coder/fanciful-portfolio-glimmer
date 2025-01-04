import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-primary">
      <nav className="bg-accent p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-secondary">Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </nav>
      
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
        <p className="text-gray-400">
          This dashboard will allow you to manage your portfolio content.
        </p>
      </div>
    </div>
  );
}