"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { ArrowRight, Package, Search } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Collection",          id: "collection"},
        {
          name: "Process",          id: "process"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Jam Pure"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "plain"}}
      title="Boutique Style, Delivered"
      description="Elevate your wardrobe with Jam Pure’s curated collection of designer pieces available for rent. Sustainable, chic, and always ready for you."
      testimonials={[
        {
          name: "Anna S.",          handle: "@annastyle",          testimonial: "The perfect dress for my event! Super easy process.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-outdoor_624325-50.jpg"},
        {
          name: "Claire B.",          handle: "@clairelooks",          testimonial: "High quality pieces and excellent customer service.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-female-friends-sitting-together-using-tablet-discussing-clothes-purchases-fashion-store-copy-space-consumerism-shopping-concept_74855-11590.jpg"},
        {
          name: "Jessica M.",          handle: "@jessm",          testimonial: "Sustainable and so stylish. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-sexy-woman-with-two-horns-hairstyle-shows-tongue_158538-5924.jpg"},
        {
          name: "Sarah P.",          handle: "@sarahp",          testimonial: "Jam Pure made my gala night seamless.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/groom-balcony-holding-glass-engjoying-sunny-weather-balcony_8353-12235.jpg"},
        {
          name: "Emily V.",          handle: "@emilyv",          testimonial: "The best way to try new designers.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-talking-phone_23-2148660693.jpg"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-clothing-boutique-interior_23-2151961902.jpg"
      imageAlt="Boutique collection display"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/empty-clothing-store-with-casual-formal-wear-items-retail-shop-with-stylish-clothes-hangers-racks-modern-boutique-inside-shopping-centre-fashionable-merchandise-sale_482257-63323.jpg",          alt: "Customer portrait 1"},
        {
          src: "http://img.b2bpic.net/free-photo/empty-clothing-showroom_482257-79289.jpg",          alt: "Customer portrait 2"},
        {
          src: "http://img.b2bpic.net/free-photo/sympathetic-girl-stands-near-bulding_8353-213.jpg",          alt: "Customer portrait 3"},
        {
          src: "http://img.b2bpic.net/free-photo/empty-workshop-with-tools-sketches-luxury-handcrafting-services-with-tailoring-equipment-modern-fabric-tailor-atelier-with-workstations-instruments-small-business_482257-65197.jpg",          alt: "Customer portrait 4"},
        {
          src: "http://img.b2bpic.net/free-photo/empty-clothing-store-filled-casual-formal-wear-items-hanging-fashion-store-racks-hangers-full-with-fashionable-clothes-accessories-discount-small-business-commercial-activity_482257-65075.jpg",          alt: "Customer portrait 5"},
      ]}
      avatarText="Join 500+ happy renters"
      marqueeItems={[
        {
          type: "text",          text: "Sustainable Luxury"},
        {
          type: "text",          text: "Premium Designers"},
        {
          type: "text",          text: "Seamless Rental"},
        {
          type: "text",          text: "Fast Shipping"},
        {
          type: "text",          text: "Cleaned to Perfection"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Curated for the Moment"
      description="At Jam Pure, we believe fashion should be accessible and sustainable. Our boutique rental collection is hand-picked for those who value individuality and quality."
      bulletPoints={[
        {
          title: "Sustainable Luxury",          description: "Reduce waste while staying perfectly styled."},
        {
          title: "Designer Access",          description: "Wear the latest collections for a fraction of the cost."},
        {
          title: "Simplified Process",          description: "From selection to return, we handle the details."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/girl-wearing-floral-dress-wearing-hat-sitting_1150-19274.jpg"
      imageAlt="Inside our boutique"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="collection" data-section="collection">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Silk Evening Gown",          price: "$95",          imageSrc: "http://img.b2bpic.net/free-photo/womens-clothes-accessories_93675-129971.jpg"},
        {
          id: "p2",          name: "Designer Handbag",          price: "$60",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-fashion-details-taupe-trendy-colors-woman-wearing-elegant-coat-floral-maxi-dress-crossbody-bag-trendy-accessories-jewelry-spring-autumn-time-burgundy-manicure_291049-635.jpg"},
        {
          id: "p3",          name: "Floral Cocktail Dress",          price: "$75",          imageSrc: "http://img.b2bpic.net/free-photo/reflection-girl-wedding-dress-window_8353-12581.jpg"},
        {
          id: "p4",          name: "Tailored Blazer",          price: "$85",          imageSrc: "http://img.b2bpic.net/free-photo/3d-dress-fire-with-flames_23-2151073807.jpg"},
        {
          id: "p5",          name: "Velvet Wrap Dress",          price: "$110",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-suit-chair-shoes-briefcase_181624-10463.jpg"},
        {
          id: "p6",          name: "Modern Midi Skirt",          price: "$50",          imageSrc: "http://img.b2bpic.net/free-photo/young-business-owner-preparing-her-store_23-2149300872.jpg"},
      ]}
      title="Explore Our Collection"
      description="Find your next signature look from our carefully curated rental inventory."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureBento
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Browse Styles",          description: "Select your favorites from our collection.",          bentoComponent: "reveal-icon",          icon: Search,
        },
        {
          title: "Wear Your Style",          description: "Receive it perfectly cleaned and ready to wear.",          bentoComponent: "reveal-icon",          icon: Package,
        },
        {
          title: "Return Easily",          description: "Send it back in the provided pre-paid mailer.",          bentoComponent: "reveal-icon",          icon: ArrowRight,
        },
      ]}
      title="Easy as 1, 2, 3"
      description="How it works: Select, Receive, Return."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Marketing",          company: "GrowthCo",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-joyful-lady-with-dark-curly-hair-sunglasses-standing-happily-looking-camera-while-spending-time-summer-terrace-cafe_574295-5934.jpg"},
        {
          id: "2",          name: "Michael C.",          role: "CTO",          company: "TechLab",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-personal-shopper-helping-cutomer_23-2148924090.jpg"},
        {
          id: "3",          name: "Emily R.",          role: "Creative",          company: "DesignCo",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-lady-formal-wear-showing-peace-sign_197531-16827.jpg"},
        {
          id: "4",          name: "David K.",          role: "PM",          company: "Startup",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-posing-with-elegant-clothes-office_291650-564.jpg"},
        {
          id: "5",          name: "Alex T.",          role: "Developer",          company: "Innovate",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-friends-shopping-clothes_23-2148385702.jpg"},
      ]}
      title="Client Stories"
      description="Hear what our boutique community has to say."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "How long is the rental period?",          content: "Our standard rental period is 4 days."},
        {
          id: "q2",          title: "Are cleaning fees included?",          content: "Yes, dry cleaning is fully covered."},
        {
          id: "q3",          title: "What if something happens?",          content: "Minor wear is expected; accidental damage insurance is available."},
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Stay in Touch"
      title="Need Assistance?"
      description="Reach out to us for personal styling help or order support."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Policies",          items: [
            {
              label: "Returns",              href: "#"},
            {
              label: "Privacy",              href: "#"},
          ],
        },
      ]}
      logoText="Jam Pure"
      copyrightText="© 2025 Jam Pure Boutique Rental"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
