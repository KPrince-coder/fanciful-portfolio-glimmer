export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          created_at: string
          email: string
          id: string
          is_super_admin: boolean | null
          notification_preferences: Json | null
          secret_token: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id: string
          is_super_admin?: boolean | null
          notification_preferences?: Json | null
          secret_token?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_super_admin?: boolean | null
          notification_preferences?: Json | null
          secret_token?: string | null
        }
        Relationships: []
      }
      blogs: {
        Row: {
          author: string
          content: string
          created_at: string | null
          excerpt: string
          id: string
          image_url: string
          published_at: string | null
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          author: string
          content: string
          created_at?: string | null
          excerpt: string
          id?: string
          image_url: string
          published_at?: string | null
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          author?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          id?: string
          image_url?: string
          published_at?: string | null
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      goals: {
        Row: {
          created_at: string
          description: string
          id: string
          status: string
          title: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          status: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          status?: string
          title?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          read: boolean | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          read?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          read?: boolean | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          avatar_url: string | null
          bio: string
          created_at: string
          cv_url: string | null
          email: string
          full_name: string
          github_url: string | null
          id: string
          linkedin_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio: string
          created_at?: string
          cv_url?: string | null
          email: string
          full_name: string
          github_url?: string | null
          id?: string
          linkedin_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string
          created_at?: string
          cv_url?: string | null
          email?: string
          full_name?: string
          github_url?: string | null
          id?: string
          linkedin_url?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          created_at: string | null
          demo_url: string | null
          description: string
          github_url: string | null
          id: string
          image_url: string
          long_description: string | null
          tech_stack: string[]
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          demo_url?: string | null
          description: string
          github_url?: string | null
          id?: string
          image_url: string
          long_description?: string | null
          tech_stack?: string[]
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          demo_url?: string | null
          description?: string
          github_url?: string | null
          id?: string
          image_url?: string
          long_description?: string | null
          tech_stack?: string[]
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          id: string
          notification_email: string | null
          site_metadata: Json | null
          updated_at: string
        }
        Insert: {
          id?: string
          notification_email?: string | null
          site_metadata?: Json | null
          updated_at?: string
        }
        Update: {
          id?: string
          notification_email?: string | null
          site_metadata?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      skills: {
        Row: {
          category: string
          created_at: string
          id: string
          name: string
          proficiency: number
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          name: string
          proficiency: number
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          name?: string
          proficiency?: number
        }
        Relationships: []
      }
      timeline: {
        Row: {
          created_at: string
          date: string
          description: string
          id: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          date: string
          description: string
          id?: string
          title: string
          type: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string
          id?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
