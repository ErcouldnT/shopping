export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          created_at: string
          from: string | null
          id: number
          text: string | null
          to: string | null
        }
        Insert: {
          created_at?: string
          from?: string | null
          id?: number
          text?: string | null
          to?: string | null
        }
        Update: {
          created_at?: string
          from?: string | null
          id?: number
          text?: string | null
          to?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string
          colors: string[]
          created_at: string
          id: number
          price: number
          product_desc: string
          product_name: string
          seller_id: string
          slug: string
        }
        Insert: {
          category: string
          colors: string[]
          created_at?: string
          id?: number
          price: number
          product_desc: string
          product_name: string
          seller_id?: string
          slug: string
        }
        Update: {
          category?: string
          colors?: string[]
          created_at?: string
          id?: number
          price?: number
          product_desc?: string
          product_name?: string
          seller_id?: string
          slug?: string
        }
        Relationships: []
      }
      sellers: {
        Row: {
          created_at: string
          id: number
          seller_id: string
          shop_name: string
        }
        Insert: {
          created_at?: string
          id?: number
          seller_id?: string
          shop_name: string
        }
        Update: {
          created_at?: string
          id?: number
          seller_id?: string
          shop_name?: string
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
