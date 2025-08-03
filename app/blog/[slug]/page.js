import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";

// Map slugs to dynamic imports
const blogComponents = {
  "5_marketing_hiba-20250331": () =>
    import("@/components/blog-posts/5_marketing_hiba-20250331"),
  "Hogyan_szerezhet_tobb_pacienst-20250431": () =>
    import("@/components/blog-posts/Hogyan_szerezhet_tobb_pacienst-20250431"),
  "Teljesitmenyalapu_marketing-20250531": () =>
    import("@/components/blog-posts/Teljesitmenyalapu_marketing-20250531"),
};

// ✅ Dynamic metadata loading
export async function generateMetadata({ params }) {
  // Await params first
  const awaitedParams = await params;
  const slug = awaitedParams.slug;

  const loader = blogComponents[slug];
  if (!loader) return notFound();

  const mod = await loader();

  return mod.metadata || {};
}

// ✅ Static routes
export async function generateStaticParams() {
  return Object.keys(blogComponents).map((slug) => ({ slug }));
}

// ✅ Page component
export default async function BlogPostPage({ params }) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;

  const loader = blogComponents[slug];
  if (!loader) return notFound();

  const mod = await loader();
  const BlogComponent = mod.default;

  return (
    <div id="article" className="blog spacer layer1 h-max">
      <Navbar btnText={"VISSZA"} />
      <div className="bg-black/20 py-16">
        <div className="max-w-4xl mx-auto btn-shadow rounded-4xl backdrop-blur-xs backdrop-brightness-40 p-12">
          <BlogComponent />
        </div>
      </div>
      <hr className="opacity-0" />
    </div>
  );
}
