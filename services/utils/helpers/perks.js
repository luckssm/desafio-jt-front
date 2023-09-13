const perksList = [
  {
    slug: "airline-ticket",
    name: "Passagem Aérea",
    iconPath: "/static/icons/airline-ticket.svg",
  },
  {
    slug: "wi-fi",
    name: "Wi-fi",
    iconPath: "/static/icons/wi-fi.svg",
  },
  {
    slug: "breakfast",
    name: "Café de manhã",
    iconPath: "/static/icons/coffee-cup.svg",
  },
  {
    slug: "room",
    name: "Quarto",
    iconPath: "/static/icons/home-house-big.svg",
  },
];

export const findPerkByType = ({ perkType }) => {
  return perksList.find((perk) => perk.slug === perkType);
};
