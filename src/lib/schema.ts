// Datos estructurados para SEO (Schema.org JSON-LD)
// Estos datos ayudan a Google a entender tu negocio

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "La Mansa Paraguay",
  "alternateName": "La Mansa",
  "description": "Café de especialidad, wine bar y restaurante con fusión paraguaya-italiana. Vinos propios, pastelería artesanal y experiencias gastronómicas únicas en Ciudad del Este.",
  "image": "https://lamansapy.com/logo la mansa.jpg",
  "logo": "https://lamansapy.com/logo la mansa.jpg",
  "url": "https://lamansapy.com",
  "@id": "https://lamansapy.com",
  "telephone": "+595933366000",
  "email": "lamansapy@gmail.com",
  "priceRange": "$$",
  "currenciesAccepted": "PYG, USD",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "servesCuisine": ["Italian", "Paraguayan", "Cafe", "Wine Bar"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. España",
    "addressLocality": "Ciudad del Este",
    "addressRegion": "Alto Paraná",
    "postalCode": "",
    "addressCountry": "PY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.5095,
    "longitude": -54.6160
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "menu": "https://lamansapy.com/menu-general",
  "sameAs": [
    "https://www.instagram.com/lamansapy",
    "https://www.facebook.com/lamansapy"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "La Mansa Paraguay",
  "url": "https://lamansapy.com",
  "logo": "https://lamansapy.com/logo la mansa.jpg",
  "sameAs": [
    "https://www.instagram.com/lamansapy",
    "https://www.facebook.com/lamansapy"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+595933366000",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "Portuguese"]
  }
};
