import supabase from "../services/supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return products;
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
