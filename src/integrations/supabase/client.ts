import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase: SupabaseClient | { functions: { invoke: (name: string, opts?: any) => Promise<never> } }

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn('Supabase não configurado: defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY na integração do Supabase.')
  supabase = {
    functions: {
      async invoke() {
        throw new Error('Supabase não configurado')
      }
    }
  } as any
}

export { supabase }