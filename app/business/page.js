import { Fragment } from "react";
import Breakingnews from "@/Components/Breakingnews";
import Business from "@/Components/PageSections/Business";
const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";
export const metadata = {
  title: "أخبار الاقتصاد - تحديثات حصرية عن الاقتصاد في الشرق الأوسط",
  description:
    "عصفوره موقع أخباري متخصص في أخبار الاقتصاد في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الاقتصاد في المنطقة.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "اقتصاد",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online/Business",
  openGraph: {
    title: "أخبار الاقتصاد - تحديثات حصرية عن الاقتصاد في الشرق الأوسط",
    description:
      "عصفوره موقع أخباري متخصص في أخبار الاقتصاد في الشرق الأوسط. نقدم آخر الأخبار والمقالات والتحليلات حول الاقتصاد في المنطقة.",
    siteName: "عصفوره",
    type: "website",
  },
};



const page = async () => {
  const req = await fetch(`${base_url}/category/business?page=1&limit=9`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Fragment>
      <Breakingnews />
      <Business news={res} />
    </Fragment>
  );
};

export default page;
