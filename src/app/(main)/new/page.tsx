import { NewProductForm } from "../_components/new-product-form";

export default async function NewProductPage() {
  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          <NewProductForm />
        </div>
      </div>
    </div>
  );
}
