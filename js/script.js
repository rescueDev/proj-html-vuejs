var app = new Vue({
  el: "#app",
  data: {
    //struttura dati header
    header: [
      {
        name: "HOME",
        dropdown: [
          "Lead Customer Info",
          "Scope",
          "The Company",
          "Business Area",
          "Pricing",
        ],
      },
      {
        name: "ABOUT",
        dropdown: [
          "ABout the Comapany",
          "Us and You",
          "Our Business",
          "Contact Us",
          "More",
        ],
      },
      {
        name: "PRICING",
        dropdown: ["Your Subsciption", "Get one month", "Pricing List"],
      },
      {
        name: "BLOG",
        dropdown: ["News", "Newsletter", "Unsubscribe", "Get in Touch"],
      },
    ],
    //struttura dati footer
    footer: [
      {
        name: "About",
        categories: [
          "The Company",
          "Institutional",
          "Social & Events",
          "Innovation",
          "Environment",
          "Technology",
        ],
      },
      {
        name: "Services",
        categories: [
          "Audit & Assurance",
          "Financial Advisory",
          "Analytics M&A",
          "Middle Marketing",
          "Legal Consulting",
          "Regulatory Risk",
        ],
      },
      {
        name: "Support",
        categories: [
          "Responsibility",
          "Terms of Use",
          "ABout Cookies",
          "Privacy Policy",
          "Accessibility",
          "Information",
        ],
      },
    ],
  },
});
