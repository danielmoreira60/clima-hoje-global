import { createClient } from '@supabase/supabase-js'

// Lovable's native Supabase integration provides credentials differently
// Try multiple possible environment variable patterns used by Lovable
const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.SUPABASE_URL ||
  import.meta.env.REACT_APP_SUPABASE_URL ||
  'https://your-project.supabase.co' // fallback for development

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.SUPABASE_ANON_KEY ||
  import.meta.env.REACT_APP_SUPABASE_ANON_KEY ||
  'your-anon-key' // fallback for development

// Create client with error handling for development
let supabase: any;

try {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} catch (error) {
  console.warn('Supabase client creation failed. Using mock client for development.');
  
  // Create a mock client for development when Supabase isn't properly connected
  supabase = {
    functions: {
      invoke: async (name: string, options?: any) => {
        console.warn(`Mock Supabase function call: ${name}`, options);
        return { data: null, error: new Error('Supabase not connected. Please connect through Lovable\'s native integration.') };
      }
    },
    auth: {
      signUp: async () => ({ data: null, error: new Error('Supabase not connected') }),
      signIn: async () => ({ data: null, error: new Error('Supabase not connected') }),
      signOut: async () => ({ error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: null }, error: null })
    },
    from: () => ({
      insert: async () => ({ data: null, error: new Error('Supabase not connected') }),
      select: async () => ({ data: [], error: null }),
      update: async () => ({ data: null, error: new Error('Supabase not connected') }),
      delete: async () => ({ data: null, error: new Error('Supabase not connected') })
    })
  };
}

export { supabase }