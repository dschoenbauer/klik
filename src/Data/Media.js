export const Media = {
	menu: [
		{ label: "Background", route: "about", children: [] },
		{ label: "Contact", route: "contact", children: [] },
		{
			label: "Portfolio", route: "product", children: [
				{ label: "Children", route: "test1", children: [] },
				{ label: "Family", route: "test2", children: [] },
				{ label: "Seniors", route: "test3", children: [] },
			]
		},
	]
}