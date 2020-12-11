var app = new Vue({
  el: "#app",
  data: {
    closeAllDrop: true,
    //indice dropdown
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
          "About the Comapany",
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
          "About Cookies",
          "Privacy Policy",
          "Accessibility",
          "Information",
        ],
      },
    ],
    cardsNews: [
      {
        name: "Andrea Miller",
        date: "2 Days Ago",
        preview: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        hover: false,
      },
      {
        name: "Andrea Miller",
        date: "2 Days Ago",
        preview: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        hover: false,
      },
      {
        name: "Andrea Miller",
        date: "2 Days Ago",
        preview: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        hover: false,
      },
    ],
  },
  methods: {
    //funzione per aprire singolo dropdown nav e richiuderlo automaticamente all'apertura di un altro
    clickDrop(voci, index) {
      this.indexDrop = index;
      voci.selected = !voci.selected;
    },
    //funzione per chiudere automaticamente dropdown uscendo da una voce all'altra o uscendo solo dalla voce
    closeDrop(voci, index) {
      this.indexDrop = index;
      voci.selected = !voci.selected;
      this.indexDrop = "";
      console.log("ciao");
    },
    overcards() {},
  },
});
