// =====================================================
// MNU-UNAD v1.0
// Configuración de Supabase
// =====================================================

const SUPABASE_URL =
    "https://oqjcpcbkrxbopizstjjg.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_nk819s0ketgJH9tNno28rA_vm8f4sAJ";

const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
