import React from "react";
import logoBig from "@/assets/logoBig.svg";
import logoConnect from "@/assets/logoConnect.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {

  const footerLinks = [
    {
      title: "Products",
      links: [
        { title: "Kobo Vault", href: "/personal" },
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

  const socialIcons = [
    {
      icon: <svg width="40" height="40" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="52.5" height="52.5" rx="26.25" fill="#009A74" />
        <path fillRule="evenodd" clipRule="evenodd" d="M27.4167 23.7747L34.1762 15.75H36.048L28.2486 25.0092L36.75 37.625H30.4909L24.7714 29.1373L17.6219 37.625H15.75L23.9394 27.9028L15.75 15.75H22.0091L27.4167 23.7747ZM31.3391 36.2541H34.2347L21.1316 17.1507H18.2507L31.3391 36.2541Z" fill="white" />
      </svg>
      , name: "X", href: "https://x.com/kobovault"
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" width="52.5" height="52.5" rx="26.25" fill="#142322" />
        <path d="M32.875 18.1021V14.1668C32.1424 14.0816 30.3026 13.9354 28.8044 14.0316C27.3062 14.1277 26.1371 14.7726 25.7398 15.083C24.1549 16.1284 23.6865 18.2724 23.6504 19.2136V22.9688H19.75V27.3247H23.6504V38.5H28.2936V27.3247H32.163L32.7202 22.9688H28.2936V19.7544C28.2936 18.8419 29.0559 18.1021 29.9962 18.1021H32.875Z" fill="#B5BBBB" />
      </svg>
      , name: "Facebook", href: "https://www.facebook.com/kobovault"
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="52.5" height="52.5" rx="26.25" fill="#142322" />
        <path d="M27.0584 22.1437H22.7061V36.7552H27.0436V28.8943C27.0436 28.539 27.1102 28.164 27.1398 28.0209C27.1546 27.8531 27.2849 27.3695 27.6284 26.8366C27.9718 26.3036 28.5808 26.0223 28.8423 25.9483C29.0347 25.8965 29.2198 25.8373 29.7823 25.8151C30.2324 25.7973 30.6311 25.9162 30.7742 25.9779C30.9445 26.0495 31.3456 26.2681 31.5884 26.5701C31.8312 26.8721 31.9906 27.2733 32.0399 27.4361C32.1939 27.8506 32.2472 28.5415 32.2546 28.8351V36.7552H36.7698V27.821C36.8349 25.8551 36.2295 24.426 35.9186 23.9572C35.5213 23.2195 34.0947 21.7336 31.5662 21.6922C29.0377 21.6507 27.5075 23.2885 27.0584 24.1126V22.1437Z" fill="#B5BBBB" />
        <rect x="15.3047" y="22.1426" width="4.51521" height="14.6115" fill="#B5BBBB" />
        <circle cx="17.5398" cy="17.5398" r="2.66481" fill="#B5BBBB" />
      </svg>
      , name: "Linkedin", href: "https://www.linkedin.com/company/kobovault"
    },
    {
      icon: <svg width="40" height="40" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" width="52.5" height="52.5" rx="26.25" fill="#142322" />
        <path fillRule="evenodd" clipRule="evenodd" d="M26.3125 20.5871C29.6816 20.5871 32.4129 23.3184 32.4129 26.6875C32.4129 30.0566 29.6816 32.7879 26.3125 32.7879C22.9434 32.7879 20.2121 30.0566 20.2121 26.6875C20.2121 23.3184 22.9434 20.5871 26.3125 20.5871ZM26.3125 22.8055C24.1685 22.8055 22.4305 24.5435 22.4305 26.6875C22.4305 28.8315 24.1685 30.5695 26.3125 30.5695C28.4565 30.5695 30.1945 28.8315 30.1945 26.6875C30.1945 24.5435 28.4565 22.8055 26.3125 22.8055Z" fill="#B5BBBB" />
        <path d="M32.6347 18.9234C33.431 18.9234 34.0766 19.569 34.0766 20.3653C34.0766 21.1617 33.431 21.8072 32.6347 21.8072C31.8383 21.8072 31.1928 21.1617 31.1928 20.3653C31.1928 19.569 31.8383 18.9234 32.6347 18.9234Z" fill="#B5BBBB" />
        <path fillRule="evenodd" clipRule="evenodd" d="M31.4701 14.875C35.1455 14.875 38.125 17.8545 38.125 21.5299V31.8451C38.125 35.4918 35.1919 38.4534 31.5561 38.4995L31.4701 38.5H21.1549L21.0689 38.4995C17.4618 38.4538 14.5462 35.5382 14.5005 31.9311L14.5 31.8451V21.5299C14.5 17.8545 17.4795 14.875 21.1549 14.875H31.4701ZM21.1549 17.0933C18.7047 17.0933 16.7183 19.0797 16.7183 21.5299V31.8451C16.7183 34.2953 18.7047 36.2817 21.1549 36.2817H31.4701C33.9203 36.2817 35.9067 34.2953 35.9067 31.8451V21.5299C35.9067 19.0797 33.9203 17.0933 31.4701 17.0933H21.1549Z" fill="#B5BBBB" />
      </svg>
      , name: "Instagram", href: "https://www.instagram.com/kobovault"
    },
  ]

  return (
    <div className='bg-[#0A1B1B]'>
      <div className='max-w-6xl mx-auto pt-8 md:pt-14 px-4 relative'>
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

            <div className='flex gap-4 mt-4'>
              {socialIcons.map((icon) => (
                <Link key={icon.name} href={icon.href} target="_blank" rel="noopener noreferrer">
                  {icon.icon}
                </Link>
              ))}
            </div>
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
