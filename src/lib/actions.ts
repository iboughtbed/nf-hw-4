import { useQueryClient } from "@tanstack/react-query";
import { api, uploader } from "~/lib/api";

export async function createProduct({
  images,
  ...fields
}: {
  title: string;
  images: File[];
  price: number;
  description: string;
  category: string;
}) {
  let firstUrl = "";

  for (const image of images) {
    const { data } = await uploadImage(image);
    if (!firstUrl) {
      firstUrl = data.location;
    }
  }

  return await api.post("/products", {
    image: firstUrl,
    ...fields,
  });
}

export async function uploadImage(file: File) {
  return await uploader.post<{ location: string }>("/files/upload", {
    file,
  });
}
