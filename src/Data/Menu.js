import { ProductLinks } from "./ProductLinks";

export const Menu = {
	menu: [
		{ label: "About", route: "about", children: [] },
		{
			label: "Portfolio", route: "portfolio", children: [
				{ label: "Seniors", route: ProductLinks.Seniors, children: [] },
				{ label: "Wedding", route: ProductLinks.Wedding, children: [] },
				{ label: "Maternity", route: ProductLinks.Maternity, children: [] },
				{ label: "Cake Smash", route: ProductLinks.CakeSmash, children: [] },
				{ label: "Children", route: ProductLinks.Children, children: [] },
				{ label: "Family", route: ProductLinks.Family, children: [] },
				{ label: "Professional", route: ProductLinks.Professional, children: [] },
			]
		},
		{ label: "Contact", route: "contact", children: [] },
	]
}