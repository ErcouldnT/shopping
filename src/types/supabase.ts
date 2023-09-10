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
          from: string
          id: number
          isSeen: boolean
          text: string
          to: string
        }
        Insert: {
          created_at?: string
          from?: string
          id?: number
          isSeen?: boolean
          text?: string
          to?: string
        }
        Update: {
          created_at?: string
          from?: string
          id?: number
          isSeen?: boolean
          text?: string
          to?: string
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
          seller_id: string
          shop_name: string
          slug: string
        }
        Insert: {
          created_at?: string
          seller_id?: string
          shop_name: string
          slug: string
        }
        Update: {
          created_at?: string
          seller_id?: string
          shop_name?: string
          slug?: string
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
