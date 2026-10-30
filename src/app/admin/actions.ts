"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

// Called after an admin saves or deletes a book, author or testimonial so the
// public pages pick up the change now instead of on the next minute's revalidate.
export async function refreshPublicPages() {
  const supabase = await createClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;
  if (!user) return;

  for (const path of ["/", "/books", "/authors", "/authors/all", "/about"]) {
    revalidatePath(path);
  }
}
