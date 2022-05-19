// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ifdpwiflmskoshqtlitl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZHB3aWZsbXNrb3NocXRsaXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5OTM0NzUsImV4cCI6MTk2ODU2OTQ3NX0.8uH-S-ScnESUrMoFFoPEOf2v4QpRIQkHibEjSrBATC0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)