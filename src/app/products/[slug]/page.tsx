import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { FlavorSwitcher } from "@/components/product/FlavorSwitcher";
import { BuyPanel } from "@/components/product/BuyPanel";
import { NutritionPanel } from "@/components/product/NutritionPanel";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { products } from "@/data/products";

export const generateStaticParams = () => {
  return Object.keys(products).map((slug) => ({ slug }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];
  if (!product) {
    return { title: "Flavor not found — CRISPO" };
  }
  return {
    title: `${product.name} — CRISPO`,
    description: product.tagline,
  };
}

async function ProductPageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductHero product={product} />
      <FlavorSwitcher currentId={slug} />
      <BuyPanel product={product} />
      <NutritionPanel product={product} />
      <RelatedProducts currentId={slug} />
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <ProductPageContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
