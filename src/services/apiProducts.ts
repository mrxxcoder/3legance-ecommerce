import supabase from "../services/supabase";
import { PAGE_SIZE } from "../utils";

export async function getProducts({
  filter,
  page,
}: {
  filter: { field: string; value: string } | null;
  page: number;
}) {
  let query = supabase
    .from("products")
    .select("*, categories(id,title)", { count: "exact" });

  //FILTER
  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return { data, count };
}

export async function getProduct(productId: string | undefined) {
  const { data: product, error } = await supabase
    .from("products")
    .select()
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return product;
}
