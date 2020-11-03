import { ProductLinks } from "./ProductLinks";

export const Media = {
	menu: [
		{ label: "About", route: "about", children: [] },
		{
			label: "Portfolio", route: "portfolio", children: [
				{ label: "Wedding", route: ProductLinks.Wedding, children: [] },
				{ label: "Children", route: ProductLinks.Children, children: [] },
				{ label: "Family", route: ProductLinks.Family, children: [] },
				{ label: "Seniors", route: ProductLinks.Seniors, children: [] },
			]
		},
		{ label: "Contact", route: "contact", children: [] },
	]
}