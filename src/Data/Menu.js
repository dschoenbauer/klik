import { ProductLinks } from "./ProductLinks";

const pp = (route) => `/portfolio/${route}`;

export const Menu = {
	menu: [
		{
			label: "About", route: "/about", children: [
				{ label: "Photographer", route: "/about/photographer" },
				{ label: "Studio", route: "/about/studio" },
			]
		},
		{
			label: "Portfolio", route: "/portfolio", children: [
				{ label: "Seniors", route: pp(ProductLinks.Seniors) },
				{ label: "Wedding", route: pp(ProductLinks.Wedding) },
				{ label: "Little Ones", route: pp(ProductLinks.LitteOnes) },
				{ label: "Professional", route: pp(ProductLinks.Professional) },
				{ label: "Engagement", route: pp(ProductLinks.Engagement) },
				{ label: "Maternity", route: pp(ProductLinks.Maternity) },
				{ label: "Cake Smash", route: pp(ProductLinks.CakeSmash) },
				{ label: "Fresh 48", route: pp(ProductLinks.Fresh48) },
				{ label: "Family", route: pp(ProductLinks.Family) },
				{ label: "Newborn", route: pp(ProductLinks.NewBorn) },
				{ label: "Boudoir", route: pp(ProductLinks.Boudoir) },
			]
		},
		{ label: "Contact", route: "/contact" },
		// { label: "Booking", route: "https://sessionl.ink/klik_photography507", external: true },
	]
}