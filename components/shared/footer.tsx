import React from "react";
import logoBig from "@/assets/logoBig.svg";
import logoConnect from "@/assets/logoConnect.svg";
import Image from "next/image";

function Footer() {

  const footerLinks = [
    {
      title: "Products",
      links: [
        { title: "Kobo Vault", href: "/" },
        { title: "Kobo Chat", href: "/" },
        { title: "Kobo Ride", href: "/" },
        { title: "Kobo Send & Delivery", href: "/" },
        { title: "Kobo Market", href: "/" },
        { title: "Kobo Eat", href: "/" },
        { title: "Kobo Square", href: "/" },
        { title: "Kobo Wave", href: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "Leadership Team", href: "/leadership" },
        { title: "Careers", href: "/careers" },
        { title: "Press", href: "/press" },
        { title: "Affiliate program", href: "/affiliate" },
        { title: "Partners", href: "/partners" },
        { title: "Suppliers", href: "/suppliers" },
      ],
    },
    {
      title: "Help",
      links: [
        { title: "Customer Support", href: "/customer-support" },
        { title: "Sitemap", href: "/sitemap" },
        { title: "Financial crime policies", href: "/sitemap" },
      ],
    },
  ];

  return (
    <div className='bg-[#0A1B1B]'>
      <div className='container mx-auto pt-8 md:pt-14 px-4 relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8 md:mb-16'>
          <div className='flex flex-col gap-4 '>
            <Image
              src={logoConnect}
              width={163}
              height={44}
              alt='Kobo Connect'
            />
            <p className='text-[#B5BBBB] max-w-md'>
              From rides and deliveries to food, services, and healthcare
              powered by Kobo Vault’s seamless and inclusive digital
              finance tools.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>

            {footerLinks.map((link) => (
              <div key={link.title}>
                <h3 className='text-[#009A74] font-semibold text-lg mb-2'>{link.title}</h3>
                <ul>
                  {link.links.map((item) => (
                    <li key={item.title} className='text-[#B5BBBB] leading-loose'>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        <Image
          src={logoBig}
          alt='logo'
          width={1558}
          height={275}
          className=''
        />
      </div>
    </div>
  );
}

export default Footer;
