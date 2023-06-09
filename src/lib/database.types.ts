export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      products: {
        Row: {
          create_by: string | null
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          create_by?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          create_by?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      purchase_request_items: {
        Row: {
          created_at: string | null
          created_by: string
          id: string
          product_id: string
          purchase_request_id: string
          quantity: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: string
          product_id: string
          purchase_request_id: string
          quantity: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: string
          product_id?: string
          purchase_request_id?: string
          quantity?: number
          updated_at?: string | null
        }
      }
      purchase_requests: {
        Row: {
          created_at: string | null
          created_by: string
          delivery_date: string | null
          id: string
          status: string | null
          supplier_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          delivery_date?: string | null
          id?: string
          status?: string | null
          supplier_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          delivery_date?: string | null
          id?: string
          status?: string | null
          supplier_id?: string
          updated_at?: string | null
        }
      }
      roles: {
        Row: {
          key: string
          name: string
        }
        Insert: {
          key: string
          name: string
        }
        Update: {
          key?: string
          name?: string
        }
      }
      status: {
        Row: {
          key: string
          name: string
        }
        Insert: {
          key: string
          name: string
        }
        Update: {
          key?: string
          name?: string
        }
      }
      supplier_products: {
        Row: {
          created_at: string | null
          id: string
          price: number | null
          product_id: string
          supplier_id: string
          unit: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          price?: number | null
          product_id: string
          supplier_id: string
          unit?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          price?: number | null
          product_id?: string
          supplier_id?: string
          unit?: string | null
        }
      }
      suppliers: {
        Row: {
          created_at: string | null
          created_by: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
      }
      trader_products: {
        Row: {
          created_at: string | null
          id: string
          price: number | null
          product_id: string
          trader_id: string
          unit: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          price?: number | null
          product_id: string
          trader_id: string
          unit?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          price?: number | null
          product_id?: string
          trader_id?: string
          unit?: string | null
        }
      }
      trader_users: {
        Row: {
          created_at: string | null
          role: string | null
          status: string | null
          trader_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          role?: string | null
          status?: string | null
          trader_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          role?: string | null
          status?: string | null
          trader_id?: string
          updated_at?: string | null
          user_id?: string
        }
      }
      traders: {
        Row: {
          created_at: string | null
          id: string
          name: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          status?: string | null
          updated_at?: string | null
        }
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          emailVerified: string | null
          id: string
          image: string | null
          name: string
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          emailVerified?: string | null
          id?: string
          image?: string | null
          name: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          emailVerified?: string | null
          id?: string
          image?: string | null
          name?: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
