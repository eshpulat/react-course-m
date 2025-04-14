import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    // https://klnyuzeiqcyeltfqoykp.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    const { description, ...cabinData } = newCabin;

    let query = supabase.from("cabins");

    // A) create

    if (!id) query = query.insert([{ ...cabinData, image: imagePath }]);

    // B) edit

    if (id)
        query = query.update({ ...cabinData, image: imagePath }).eq("id", id);

    const { data, error } = await query.select().single();
    // .insert([{ ...newCabin, image: imagePath }]);

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be created");
    }

    // 2 Uploade image

    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.error(storageError);
        throw new Error("Cabins images could not be uploaded");
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be deleted");
    }

    return data;
}
