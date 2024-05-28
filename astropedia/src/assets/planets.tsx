
export type PlanetDataProps = (typeof PlanetList)[0]

export const PlanetList = [
{
    id: 1,
    title: 'sylva',
    icon: 'sylva',
    link: '/planet/1',
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
            link: "/resource/13",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetMalachite",
            icon: "malachite",
            name: "malachite",
            link: "/resource/9",
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
            link: "/resource/27"
        },
        {
            id: 2,
            nugget: "nuggetNitrogen",
            icon: "nitrogen",
            name: "nitrogen",
            link: "/resource/29"
        }
    ]
},
{
    id: 2,
    title: 'desolo',
    icon: 'desolo',
    link: '/planet/2',
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
            link: "/resource/15",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetSphalerite",
            icon: "sphalerite",
            name: "sphalerite",
            link: "/resource/13",
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
    title: 'calidor',
    icon: 'calidor',
    link: '/planet/3',
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
            link: "/resource/9",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetWolframite",
            icon: "wolframite",
            name: "wolframite",
            link: "/resource/15",
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
            link: "resource/27"
        },
        {
            id: 2,
            nugget: "nuggetSulfur",
            icon: "sulfur",
            name: "sulfur",
            link: "/resource/30"
        }
    ]
},
{
    id: 4,
    title: 'vesania',
    icon: 'vesania',
    link: '/planet/4',
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
            link: "/resource/8",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetTitanite",
            icon: "titanite",
            name: "titanite",
            link: "/resource/14",
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
            link: "/resource/27"
        },
        {
            id: 2,
            nugget: "nuggetNitrogen",
            icon: "nitrogen",
            name: "nitrogen",
            link: "/resource/29"
        },
        {
            id: 3,
            nugget: "nuggetArgon",
            icon: "argon",
            name: "argon",
            link: "/resource/25"
        }
    ]
},
{
    id: 5,
    title: 'novus',
    icon: 'novus',
    link: '/planet/5',
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
            link: "/resource/6",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetLithium",
            icon: "lithium",
            name: "lithium",
            link: "/resource/8",
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
            link: "/resource/27"
        },
        {
            id: 2,
            nugget: "nuggetMethane",
            icon: "methane",
            name: "methane",
            link: "/resource/28"
        }
    ]
},
{
    id: 6,
    title: 'glacio',
    icon: 'glacio',
    link: '/planet/6',
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
            link: "/resource/6",
            location: ["caveLayer"]
        },
        {
            id: 2,
            nugget: "nuggetTitanite",
            icon: "titanite",
            name: "titanite",
            link: "/resource/14",
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
            link: "/resource/25"
        }
    ]
},
{
    id: 7,
    title: 'atrox',
    icon: 'atrox',
    link: '/planet/7',
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
            link: "/resource/26"
        },
        {
            id: 2,
            nugget: "nuggetMethane",
            icon: "methane",
            name: "methane",
            link: "/resource/28"
        },
        {
            id: 3,
            nugget: "nuggetNitrogen",
            icon: "nitrogen",
            name: "nitrogen",
            link: "/resource/29"
        },
        {
            id: 4,
            nugget: "nuggetSulfur",
            icon: "sulfur",
            name: "sulfur",
            link: "/resource/30"
        }
    ]
}]