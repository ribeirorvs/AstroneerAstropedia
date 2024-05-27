export type ResourceDataProps = (typeof ResourceList)[0];

export const ResourceList = [{
    id: 1,
    title: 'ammonium',
    icon: 'ammonium',
    link: 'resourcesDetails',
    nugget: 'nuggetAmmonium',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        } 
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        },
        {
            id: 2,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'solidFuelThruster',
            icon: 'thruster',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'hydrazine',
            icon: 'hydrazine',
            link: ''
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 2,
    title: 'astronium',
    icon: 'astronium',
    link: 'resourcesDetails',
    nugget: 'nuggetAstronium',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'exoChip',
            icon: 'exoChip',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'packager',
            icon: 'packager',
            link: ''
        },
        {
            id: 3,
            useId: 1,
            name: 'solidFuelJumpJet',
            icon: 'thruster',
            link: ''
        },
        {
            id: 4,
            useId: 1,
            name: 'dynamite',
            icon: 'dynamite',
            link: ''
        },
        {
            id: 5,
            useId: 1,
            name: 'hydrazine',
            icon: 'hydrazine',
            link: ''
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 3,
    title: 'clay',
    icon: 'clay',
    link: 'resourcesDetails',
    nugget: 'nuggetClay',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'ceramic',
            icon: 'ceramic',
            link: 'ceramic'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 4,
    title: 'compound',
    icon: 'compound',
    link: 'resourcesDetails',
    nugget: 'nuggetCompound',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: ''
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: ''
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'smallGenerator',
            icon: 'generator',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'tether',
            icon: 'tether',
            link: ''
        },
        {
            id: 3,
            useId: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        },
        {
            id: 4,
            useId: 2,
            name: 'roverSeat',
            icon: 'roverSeat',
            link: ''
        },
        {
            id: 5,
            useId: 2,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: ''
        },
        {
            id: 6,
            useId: 2,
            name: 'trailer',
            icon: 'trailer',
            link: ''
        },
        {
            id: 7,
            useId: 3,
            name: 'researchChamber',
            icon: 'research',
            link: ''
        },
        {
            id: 8,
            useId: 3,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        },
        {
            id: 9,
            useId: 3,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 10,
            useId: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        },
        {
            id: 11,
            useId: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: ''
        },
        {
            id: 12,
            useId: 3,
            name: 'largeRoverSeat',
            icon: 'roverSeat',
            link: ''
        },
        {
            id: 13,
            useId: 3,
            name: 'buggy',
            icon: 'trailer',
            link: ''
        },
        {
            id: 14,
            useId: 4,
            name: 'plastic',
            icon: 'plastic',
            link: 'plastic'
        },
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 5,
    title: 'graphite',
    icon: 'graphite',
    link: 'resourcesDetails',
    nugget: 'nuggetGraphite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: ''
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        },
        {
            id: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'packager',
            icon: 'packager',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'splitter',
            icon: 'roverSeat',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'autoArm',
            icon: 'crane',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'graphene',
            icon: 'graphene',
            link: 'graphene'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 6,
    title: 'hematite',
    icon: 'hematite',
    link: 'resourcesDetails',
    nugget: 'nuggetHematite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'novus',
            icon: 'novus',
            link: 'Novus'
        },
        {
            id: 2,
            name: 'glacio',
            icon: 'glacio',
            link: 'Glacio'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'iron',
            icon: 'iron',
            link: 'iron'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 7,
    title: 'laterite',
    icon: 'laterite',
    link: 'resourcesDetails',
    nugget: 'nuggetLaterite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'aluminum',
            icon: 'aluminum',
            link: 'aluminum'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 8,
    title: 'lithium',
    icon: 'lithium',
    link: 'resourcesDetails',
    nugget: 'nuggetLithium',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'vesania',
            icon: 'vesania',
            link: 'Vesania'
        },
        {
            id: 2,
            name: 'novus',
            icon: 'novus',
            link: 'novus'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'mediumBattery',
            icon: 'battery',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'rtg',
            icon: 'generator',
            link: ''
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 9,
    title: 'malachite',
    icon: 'malachite',
    link: 'resourcesDetails',
    nugget: 'nuggetMalachite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sylva',
            icon: 'sylva',
            link: 'Sylva'
        },
        {
            id: 2,
            name: 'calidor',
            icon: 'calidor',
            link: 'Calidor'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'copper',
            icon: 'copper',
            link: 'copper'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 10,
    title: 'organic',
    icon: 'organic',
    link: 'resourcesDetails',
    nugget: 'nuggetOrganic',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: ''
        },
        {
            id: 2,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        },
        {
            id: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'glowsticks',
            icon: 'worklight',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'carbon',
            icon: 'carbon',
            link: 'carbon'
        },
        {
            id: 3,
            useId: 3,
            name: 'rubber',
            icon: 'rubber',
            link: 'rubber'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 11,
    title: 'quartz',
    icon: 'quartz',
    link: 'resourcesDetails',
    nugget: 'nuggetQuartz',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: ''
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: ''
        },
        {
            id: 4,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        },
        {
            id: 5,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'beacon',
            icon: 'beacon',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'storageSensor',
            icon: 'sensor',
            link: ''
        },
        {
            id: 3,
            useId: 3,
            name: 'mediumSensorArch',
            icon: 'sensor',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'largeSensorRing',
            icon: 'sensor',
            link: ''
        },
        {
            id: 5,
            useId: 3,
            name: 'largeSensorHoopA',
            icon: 'sensor',
            link: ''
        },
        {
            id: 6,
            useId: 3,
            name: 'largeSensorHoopB',
            icon: 'sensor',
            link: ''
        },
        {
            id: 7,
            useId: 3,
            name: 'xlSensorArch',
            icon: 'sensor',
            link: ''
        },
        {
            id: 8,
            useId: 3,
            name: 'xlSensorCanopy',
            icon: 'sensor',
            link: ''
        },
        {
            id: 9,
            useId: 3,
            name: 'xlSensorHoopA',
            icon: 'sensor',
            link: ''
        },
        {
            id: 10,
            useId: 3,
            name: 'xlSensorHoopB',
            icon: 'sensor',
            link: ''
        },
        {
            id: 11,
            useId: 4,
            name: 'glass',
            icon: 'glass',
            link: 'glass'
        },
        {
            id: 12,
            useId: 5,
            name: 'silicone',
            icon: 'silicone',
            link: 'silicone'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 12,
    title: 'resin',
    icon: 'resin',
    link: 'resourcesDetails',
    nugget: 'nuggetResin',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: ''
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: ''
        }
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: ''
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: ''
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: ''
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: ''
        }
    ],
    hasSub1: true,
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'canister',
            icon: 'canister',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'mediumStorage',
            icon: 'storage',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'mediumPlatformA',
            icon: 'platform',
            link: ''
        },
        {
            id: 4,
            useId: 2,
            name: 'mediumPlatformB',
            icon: 'platform',
            link: ''
        },
        {
            id: 5,
            useId: 2,
            name: 'mediumPlatformC',
            icon: 'platform',
            link: ''
        },
        {
            id: 6,
            useId: 3,
            name: 'largePlatformA',
            icon: 'platform',
            link: ''
        },
        {
            id: 7,
            useId: 3,
            name: 'largePlatformB',
            icon: 'platform',
            link: ''
        },
        {
            id: 8,
            useId: 3,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: ''
        },
        {
            id: 9,
            useId: 3,
            name: 'researchChamber',
            icon: 'research',
            link: ''
        },
        {
            id: 10,
            useId: 4,
            name: 'silicone',
            icon: 'silicone',
            link: 'silicone'
        },
        {
            id: 11,
            useId: 4,
            name: 'rubber',
            icon: 'rubber',
            link: 'rubber'
        }
    ],
    hasSub2: false,
    sub2: [],
    hasSub3: true,
    sub3: [],
    hasSub4: true,
    sub4: [],
    hasSub5: true,
    sub5: [],
},
{
    id: 13,
    title: 'sphalerite',
    icon: 'sphalerite',
    link: 'Sphalerite'
},
{
    id: 14,
    title: 'titanite',
    icon: 'titanite',
    link: 'Titanite'
},
{
    id: 15,
    title: 'wolframite',
    icon: 'wolframite',
    link: 'Wolframite'
},
{
    id: 16,
    title: 'aluminum',
    icon: 'aluminum',
    link: 'Aluminum'
},
{
    id: 17,
    title: 'carbon',
    icon: 'carbon',
    link: 'Carbon'
},
{
    id: 18,
    title: 'ceramic',
    icon: 'ceramic',
    link: 'Ceramic'
},
{
    id: 19,
    title: 'copper',
    icon: 'copper',
    link: 'Copper'
},
{
    id: 20,
    title: 'glass',
    icon: 'glass',
    link: 'Glass'
},
{
    id: 21,
    title: 'iron',
    icon: 'iron',
    link: 'Iron'
},
{
    id: 22,
    title: 'titanium',
    icon: 'titanium',
    link: 'Titanium'
},
{
    id: 23,
    title: 'tungsten',
    icon: 'tungsten',
    link: 'Tungsten'
},
{
    id: 24,
    title: 'zinc',
    icon: 'zinc',
    link: 'Zinc'
},
{
    id: 25,
    title: 'argon',
    icon: 'argon',
    link: 'Argon'
},
{
    id: 26,
    title: 'helium',
    icon: 'helium',
    link: 'Helium'
},
{
    id: 27,
    title: 'hydrogen',
    icon: 'hydrogen',
    link: 'Hydrogen'
},
{
    id: 28,
    title: 'methane',
    icon: 'methane',
    link: 'Methane'
},
{
    id: 29,
    title: 'nitrogen',
    icon: 'nitrogen',
    link: 'Nitrogen'
},
{
    id: 30,
    title: 'sulfur',
    icon: 'sulfur',
    link: 'Sulfur'
},
{
    id: 31,
    title: 'aluminumAlloy',
    icon: 'aluminumAlloy',
    link: 'AluminumAlloy'
},
{
    id: 32,
    title: 'diamond',
    icon: 'diamond',
    link: 'Diamond'
},
{
    id: 33,
    title: 'explosivePowder',
    icon: 'explosivePowder',
    link: 'ExplosivePowder'
},
{
    id: 34,
    title: 'hydrazine',
    icon: 'hydrazine',
    link: 'Hydrazine'
},
{
    id: 35,
    title: 'graphene',
    icon: 'graphene',
    link: 'Graphene'
},
{
    id: 36,
    title: 'nanocarbonAlloy',
    icon: 'nanocarbonAlloy',
    link: 'NanocarbonAlloy'
},
{
    id: 37,
    title: 'plastic',
    icon: 'plastic',
    link: 'Plastic'
},
{
    id: 38,
    title: 'rubber',
    icon: 'rubber',
    link: 'Rubber'
},
{
    id: 39,
    title: 'silicone',
    icon: 'silicone',
    link: 'Silicone'
},
{
    id: 40,
    title: 'steel',
    icon: 'steel',
    link: 'Steel'
},
{
    id: 41,
    title: 'titaniumAlloy',
    icon: 'titaniumAlloy',
    link: 'TitaniumAlloy'
},
{
    id: 42,
    title: 'tungstenCarbide',
    icon: 'tungstenCarbide',
    link: 'TungstenCarbide'
}]