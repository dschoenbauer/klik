import { ProductLinks } from "./ProductLinks";

export const Menu = {
	menu: [
		{ label: "About", route: "about", children: [] },
		{
			label: "Portfolio", route: "portfolio", children: [
				{ label: "Seniors", route: ProductLinks.Seniors, children: [] },
				{ label: "Wedding", route: ProductLinks.Wedding, children: [] },
				{ label: "Little Ones", route: ProductLinks.LitteOnes, children: [] },
				{ label: "Professional", route: ProductLinks.Professional, children: [] },
				{ label: "Engagement", route: ProductLinks.Engagement, children: [] },
				{ label: "Maternity", route: ProductLinks.Maternity, children: [] },
				{ label: "Cake Smash", route: ProductLinks.CakeSmash, children: [] },
				{ label: "Fresh 48", route: ProductLinks.Fresh48, children: [] },
				{ label: "Family", route: ProductLinks.Family, children: [] },
				{ label: "Newborn", route: ProductLinks.NewBorn, children: [] },
				{ label: "Boudoir", route: ProductLinks.Boudoir, children: [] },
			]
		},
		{ label: "Contact", route: "contact", children: [] },
	]
}