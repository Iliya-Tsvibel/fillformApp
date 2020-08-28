const categories = [
  {
    id: "bank_forms",
    name: "Bank Forms",
    tags: ["forms", "Financial", "bank"],
    count: 10,
    image: require("../assets/icons/bankforms.png")
  },
  {
    id: "tax_forms",
    name: "Tax Forms",
    tags: ["forms", "financial", "tax"],
    count: 4,
    image: require("../assets/icons/taxforms.png")
  },
];

const forms = [
  {
    id: 1,
    name: "Forms for filling",
    description:
      "Choose, fill and send any forms you need",
    tags: ["Financial", "Fill Forms", "Bank", "Tax"],
    images: [
      require("../assets/images/bankforms_1.png"),
      require("../assets/images/bankforms_2.png"),
      require("../assets/images/bankforms_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/bankforms_1.png"),
      require("../assets/images/bankforms_2.png"),
      require("../assets/images/bankforms_3.png"),
      require("../assets/images/bankforms_1.png"),
      require("../assets/images/bankforms_2.png"),
      require("../assets/images/bankforms_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png")
];

const profile = {
  username: "Iliya",
  location: "Israel",
  email: "contact@fillforms.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, forms, profile };
