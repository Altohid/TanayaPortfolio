export type Project = {
  slug: string;
  name: string;
  category: 'Shopify' | 'WordPress' | 'WooCommerce' | 'SaaS';
  url: string;
  image: string;
  description: string;
  tagline: string;
};

// Project thumbnail assets.
export const projects: Project[] = [
  { slug: 'little-spoon', name: 'Little Spoon', category: 'Shopify', url: 'https://www.littlespoon.com/', image: '/project-thumbnails/little-spoon.jpg', tagline: 'Good food for little ones.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'finishing-touches-group', name: 'Finishing Touches Group', category: 'WordPress', url: 'https://www.finishingtouchesgroup.com/', image: '/project-thumbnails/finishing-touches-group.jpg', tagline: 'Care in every detail.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'sp-real-estate', name: 'S&P Real Estate Corp', category: 'WordPress', url: 'https://sprec.com/', image: '/project-thumbnails/sp-real-estate.jpg', tagline: 'Property with perspective.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'historic-pictoric', name: 'Historic Pictoric', category: 'Shopify', url: 'https://historicpictoric.com/', image: '/project-thumbnails/historic-pictoric.jpg', tagline: 'History, collected.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'homepop-furniture', name: 'HomePop Furniture', category: 'Shopify', url: 'https://homepop.com/', image: '/project-thumbnails/homepop.jpg', tagline: 'A home of your own.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'vitaclean', name: 'Vitaclean', category: 'Shopify', url: 'https://vitacleanhq.co.uk/', image: '/project-thumbnails/vitaclean.jpg', tagline: 'Everyday wellness.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'corbin-rd', name: 'Corbin Rd', category: 'Shopify', url: 'https://corbinrd.co.nz/', image: '/project-thumbnails/corbin-rd.jpg', tagline: 'Style for the everyday.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'all-city-stick', name: 'All City Stick', category: 'WordPress', url: 'https://allcitystickdrivingschool.com/', image: '/project-thumbnails/all-city-stick.jpg', tagline: 'Built for the next move.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'emagine-a', name: 'Emagine A', category: 'Shopify', url: 'https://www.emaginea.com/', image: '/project-thumbnails/emagine-a.jpg', tagline: 'Make your next idea real.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'ally-fashion', name: 'Ally Fashion', category: 'Shopify', url: 'https://allyfashion.com/', image: '/project-thumbnails/ally-fashion.jpg', tagline: 'Fashion for every day.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'ripco-real-estate', name: 'RIPCO Real Estate', category: 'WordPress', url: 'https://www.ripcony.com/', image: '/project-thumbnails/ripco-real-estate.jpg', tagline: 'Commercial real estate, connected.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'the-lifeline-center', name: 'The LifeLine Center', category: 'WordPress', url: 'https://www.thelifelinecenter.com/', image: '/project-thumbnails/lifeline-center.jpg', tagline: 'Support, when it matters.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'westkin-associates', name: 'Westkin Associates', category: 'WordPress', url: 'https://www.westkinassociates.com/', image: '/project-thumbnails/westkin-associates.jpg', tagline: 'Clear guidance. Human support.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'kovr', name: 'KOVR', category: 'WordPress', url: 'https://wekovr.com/', image: '/project-thumbnails/kovr.jpg', tagline: 'A fresh perspective.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'jac-cleaners', name: 'JAC Cleaners', category: 'WordPress', url: 'https://jaccleaners.com/', image: '/project-thumbnails/jac-cleaners.jpg', tagline: 'A cleaner kind of care.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'helpmatch', name: 'HelpMatch', category: 'WordPress', url: 'https://helpmatch.com/', image: '/project-thumbnails/helpmatch.jpg', tagline: 'Find the help you need.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'mobimint', name: 'Mobimint', category: 'SaaS', url: 'https://mobimint.co/', image: '/project-thumbnails/mobimint.jpg', tagline: 'Digital products, in motion.', description: 'SaaS product built by Tanaya LH.' },
  { slug: 'mojo-mingle', name: 'Mojo Mingle', category: 'WordPress', url: 'https://mojomingle.com.au/', image: '/project-thumbnails/mojo-mingle.jpg', tagline: 'Bring people together.', description: 'WordPress website built by Tanaya LH.' },
  { slug: 'resume-mitra', name: 'Resume Mitra', category: 'SaaS', url: 'https://controlc.io/', image: '/project-thumbnails/resume-mitra.jpg', tagline: 'Make your next chapter count.', description: 'SaaS product built by Tanaya LH.' },
  { slug: 'monos', name: 'Monos', category: 'Shopify', url: 'https://asiaakerbrygge.no/', image: '/project-thumbnails/monos.jpg', tagline: 'A place to find your own rhythm.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'platinum-led', name: 'Platinum LED', category: 'Shopify', url: 'https://www.voyagervrcade.com/', image: '/project-thumbnails/platinum-led.jpg', tagline: 'Light up your space.', description: 'Shopify ecommerce storefront built by Tanaya LH.' },
  { slug: 'subway', name: 'Subway', category: 'WordPress', url: 'https://lightsalmon-shark-147370.hostingersite.com/', image: '/project-thumbnails/subway.png', tagline: 'Fresh ideas, made simple.', description: 'WordPress website built by Tanaya LH.' },
];
