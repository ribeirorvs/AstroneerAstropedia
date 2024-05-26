import { translate } from "../libs/localization"

export const PlanetList = [{
    id: 1,
    title: 'Sylva',
    icon: 'sylva',
    link: 'planetsDetails',
    nugget: 'nuggetSylva',
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
    ],
    size: "medium",
    difficulty: "easy",
    cycle: "12",
    sun: "medium",
    sunValue: "100%",
    wind: "medium",
    windValue: "48%"
},
{
    id: 2,
    title: 'desolo',
    icon: 'desolo',
    link: 'Desolo'
},
{
    id: 3,
    title: 'calidor',
    icon: 'calidor',
    link: 'Calidor'
},
{
    id: 4,
    title: 'vesania',
    icon: 'vesania',
    link: 'Vesania'
},
{
    id: 5,
    title: 'novus',
    icon: 'novus',
    link: 'Novus'
},
{
    id: 6,
    title: 'glacio',
    icon: 'glacio',
    link: 'Glacio'
},
{
    id: 7,
    title: 'atrox',
    icon: 'atrox',
    link: 'Atrox'
}]