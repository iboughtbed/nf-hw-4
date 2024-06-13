import Image from "next/image";

import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Product } from "~/types";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Card className="flex size-full flex-col overflow-hidden rounded-lg">
      <CardHeader className="p-0">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover"
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
            fill
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex-1 space-y-1.5 p-4">
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardDescription className="line-clamp-1">
          ${product.price}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-1">
        <Badge>{product.category}</Badge>
      </CardFooter>
    </Card>
  );
}
