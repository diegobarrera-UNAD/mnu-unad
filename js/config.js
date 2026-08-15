const SUPABASE_URL =
    "https://oqjcpcbkrxbopizstjjg.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_nk819s0ketgJH9tNno28rA_vm8f4sAJ";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

console.log("MNU-UNAD: Supabase conectado");
