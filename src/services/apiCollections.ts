import supabase from "./supabase";

export async function getCollections() {
  const { data: collections, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return collections;
}
