var app = new Vue({
  el: "#app",

  data: {
    indexDrop: "",
    //struttura dati header
    header: [
      {
        name: "HOME",
        selected: false,
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
        selected: false,
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
        selected: false,
        dropdown: ["Your Subsciption", "Get one month", "Pricing List"],
      },
      {
        name: "BLOG",
        selected: false,
        dropdown: ["News", "Newsletter", "Unsubscribe", "Get in Touch"],
      },
      {
        name: "GET IN TOUCH",
        selected: false,
        dropdown: ["Your Subsciption", "Get one month", "Pricing List"],
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
  methods: {
    clickDrop(voci, index) {
      this.indexDrop = index;
      voci.selected = !voci.selected;
      console.log(this.header);
      console.log(this.indexDrop);
    },
    closeDrop() {
      voci.selected;
    },
  },
});
