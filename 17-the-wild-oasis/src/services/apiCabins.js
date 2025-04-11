import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}

export async function createCabin(newCabin) {
    // https://klnyuzeiqcyeltfqoykp.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    const { description, ...cabinData } = newCabin;

    const { data, error } = await supabase
        .from("cabins")
        .insert([{ ...cabinData, image: imagePath }]);
    // .insert([{ ...newCabin, image: imagePath }]);

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be created");
    }

    // 2 Uploade image

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
