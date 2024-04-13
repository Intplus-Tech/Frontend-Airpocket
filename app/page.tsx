import Image from "next/image";

import MaxwidthWrapper from "@/shared/MaxWidthWrapper/MaxWidthWrapper";
import Hero from "@/components/Hero/Hero";
import Places from "@/components/Places/Places";
import Testimonials from "@/components/Testimonials/Testimonials";
import Newsletter from "@/components/Newsletter/Newletter";
import Footer from "@/shared/Footer/Footer";

export default function Home() {
  return (
    <MaxwidthWrapper>
      <Hero />
      <Places />
      <Testimonials />
      <Newsletter />
      <Footer />
    </MaxwidthWrapper>
  );
}
