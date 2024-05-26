import { translate } from "../libs/localization"

export const PlanetList = [{
    id: 1,
    title: 'Sylva',
    icon: 'sylva',
    link: 'planetsDetails',
    nugget: 'nuggetSylva',
    size: "medium",
    difficulty: "easy",
    cycle: "12",
    sun: "medium",
    sunValue: "100%",
    wind: "medium",
    windValue: "48%",
    hasNaturalResources: true,
    naturalResources: [
        {
            id: 1,
            nugget: "nuggetSphalerite",
            icon: "sphalerite",
            name: "sphalerite",
            link: "Sphalerite",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetMalachite",
            icon: "malachite",
            name: "malachite",
            link: "Malachite",
            location: [
                "caveLayer",
                "mantleLayer"
            ]
        }
    ],
    hasAtmosphericResources: true,
    atmosphericResources: [
        {
            id: 1,
            nugget: "nuggetHydrogen",
            icon: "hydrogen",
            name: "hydrogen",
            link: "Hydrogen"
        },
        {
            id: 2,
            nugget: "nuggetNitrogen",
            icon: "nitrogen",
            name: "nitrogen",
            link: "Nitrogen"
        }
    ]
},
{
    id: 2,
    title: 'Desolo',
    icon: 'desolo',
    link: 'planetsDetails',
    nugget: 'nuggetDesolo',
    size: "small",
    difficulty: "easy",
    cycle: "1.55",
    sun: "high",
    sunValue: "150%",
    wind: "veryLow",
    windValue: "25%",
    hasNaturalResources: true,
    naturalResources: [
        {
            id: 1,
            nugget: "nuggetWolframite",
            icon: "wolframite",
            name: "wolframite",
            link: "Wolframite",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetSphalerite",
            icon: "sphalerite",
            name: "sphalerite",
            link: "Sphalerite",
            location: [
                "grayPlains",
                "mantleLayer"
            ]
        }
    ],
    hasAtmosphericResources: false,
    atmosphericResources: []
},
{
    id: 3,
    title: 'Calidor',
    icon: 'calidor',
    link: 'planetsDetails',
    nugget: 'nuggetCalidor',
    size: "medium",
    difficulty: "medium",
    cycle: "13.5",
    sun: "veryHigh",
    sunValue: "175%",
    wind: "low",
    windValue: "40%",
    hasNaturalResources: true,
    naturalResources: [
        {
            id: 1,
            nugget: "nuggetMalachite",
            icon: "malachite",
            name: "malachite",
            link: "Malachite",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetWolframite",
            icon: "wolframite",
            name: "wolframite",
            link: "Wolframite",
            location: [
                "mountains",
                "mantleLayer"
            ]
        }
    ],
    hasAtmosphericResources: true,
    atmosphericResources: [
        {
            id: 1,
            nugget: "nuggetHydrogen",
            icon: "hydrogen",
            name: "hydrogen",
            link: "Hydrogen"
        },
        {
            id: 2,
            nugget: "nuggetSulfur",
            icon: "sulfur",
            name: "sulfur",
            link: "Sulfur"
        }
    ]
},
{
    id: 4,
    title: 'Vesania',
    icon: 'vesania',
    link: 'planetsDetails',
    nugget: 'nuggetVesania',
    size: "medium",
    difficulty: "medium",
    cycle: "13.5",
    sun: "low",
    sunValue: "50%",
    wind: "high",
    windValue: "56%",
    hasNaturalResources: true,
    naturalResources: [
        {
            id: 1,
            nugget: "nuggetLithium",
            icon: "lithium",
            name: "lithium",
            link: "Lithium",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetTitanite",
            icon: "titanite",
            name: "titanite",
            link: "Titanite",
            location: [
                "purpleHills",
                "mantleLayer"
            ]
        }
    ],
    hasAtmosphericResources: true,
    atmosphericResources: [
        {
            id: 1,
            nugget: "nuggetHydrogen",
            icon: "hydrogen",
            name: "hydrogen",
            link: "Hydrogen"
        },
        {
            id: 2,
            nugget: "nuggetNitrogen",
            icon: "nitrogen",
            name: "nitrogen",
            link: "Nitrogen"
        },
        {
            id: 3,
            nugget: "nuggetArgon",
            icon: "argon",
            name: "argon",
            link: "Argon"
        }
    ]
},
{
    id: 5,
    title: 'Novus',
    icon: 'novus',
    link: 'planetsDetails',
    nugget: 'nuggetNovus',
    size: "small",
    difficulty: "medium",
    cycle: "3.5",
    sun: "high",
    sunValue: "150%",
    wind: "high",
    windValue: "58%",
    hasNaturalResources: true,
    naturalResources: [
        {
            id: 1,
            nugget: "nuggetHematite",
            icon: "hematite",
            name: "hematite",
            link: "Hematite",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetLithium",
            icon: "lithium",
            name: "lithium",
            link: "Lithium",
            location: [
                "mountains",
                "mantleLayer"
            ]
        }
    ],
    hasAtmosphericResources: true,
    atmosphericResources: [
        {
            id: 1,
            nugget: "nuggetHydrogen",
            icon: "hydrogen",
            name: "hydrogen",
            link: "Hydrogen"
        },
        {
            id: 2,
            nugget: "nuggetMethane",
            icon: "methane",
            name: "methane",
            link: "Methane"
        }
    ]
},
{
    id: 6,
    title: 'Glacio',
    icon: 'glacio',
    link: 'planetsDetails',
    nugget: 'nuggetGlacio',
    size: "medium",
    difficulty: "hard",
    cycle: "~20",
    sun: "veryLow",
    sunValue: "25%",
    wind: "high",
    windValue: "56%",
    hasNaturalResources: true,
    naturalResources: [
        {
            id: 1,
            nugget: "nuggetHematite",
            icon: "hematite",
            name: "hematite",
            link: "Hematite",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetTitanite",
            icon: "titanite",
            name: "titanite",
            link: "Titanite",
            location: [
                "icePlains",
                "mantleLayer"
            ]
        }
    ],
    hasAtmosphericResources: true,
    atmosphericResources: [
        {
            id: 1,
            nugget: "nuggetArgon",
            icon: "argon",
            name: "argon",
            link: "Argon"
        }
    ]
},
{
    id: 7,
    title: 'Atrox',
    icon: 'atrox',
    link: 'planetsDetails',
    nugget: 'nuggetAtrox',
    size: "medium",
    difficulty: "veryHard",
    cycle: "~20",
    sun: "low",
    sunValue: "50%",
    wind: "veryLow",
    windValue: "25%",
    hasNaturalResources: false,
    naturalResources: [],
    hasAtmosphericResources: true,
    atmosphericResources: [
        {
            id: 1,
            nugget: "nuggetHelium",
            icon: "helium",
            name: "helium",
            link: "Helium"
        },
        {
            id: 2,
            nugget: "nuggetMethane",
            icon: "methane",
            name: "methane",
            link: "Methane"
        },
        {
            id: 3,
            nugget: "nuggetNitrogen",
            icon: "nitrogen",
            name: "nitrogen",
            link: "Nitrogen"
        },
        {
            id: 4,
            nugget: "nuggetSulfur",
            icon: "sulfur",
            name: "sulfur",
            link: "Sulfur"
        }
    ]
}]