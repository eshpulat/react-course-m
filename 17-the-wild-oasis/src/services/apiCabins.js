import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabin").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}
