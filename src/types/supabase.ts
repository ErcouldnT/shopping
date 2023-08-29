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
      ads: {
        Row: {
          category: string
          colors: string[]
          created_at: string
          id: number
          price: string
          product_desc: string
          product_name: string
          seller_id: string | null
        }
        Insert: {
          category: string
          colors: string[]
          created_at?: string
          id?: number
          price: string
          product_desc: string
          product_name: string
          seller_id?: string | null
        }
        Update: {
          category?: string
          colors?: string[]
          created_at?: string
          id?: number
          price?: string
          product_desc?: string
          product_name?: string
          seller_id?: string | null
        }
        Relationships: []
      }
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
