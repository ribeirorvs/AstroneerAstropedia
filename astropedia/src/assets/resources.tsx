export type ResourceDataProps = (typeof ResourceList)[0];

export const ResourceList = [
{
    id: 1,
    title: 'ammonium',
    icon: 'ammonium',
    link: '/resource/1',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        } 
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
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
            link: '/resource/34'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 2,
    title: 'astronium',
    icon: 'astronium',
    link: '/resource/2',
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
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
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
            link: '/resource/34'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 3,
    title: 'clay',
    icon: 'clay',
    link: '/resource/3',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'ceramic',
            icon: 'ceramic',
            link: '/resource/18'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 4,
    title: 'compound',
    icon: 'compound',
    link: '/resource/4',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
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
            link: '/printer/2'
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
            link: '/printer/3'
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
            link: '/printer/5'
        },
        {
            id: 9,
            useId: 3,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 10,
            useId: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 11,
            useId: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
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
            link: '/printer/37'
        },
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 5,
    title: 'graphite',
    icon: 'graphite',
    link: '/resource/5',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
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
            link: '/resource/35'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 6,
    title: 'hematite',
    icon: 'hematite',
    link: '/resource/6',
    nugget: 'nuggetHematite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 2,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'iron',
            icon: 'iron',
            link: 'resource/21'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 7,
    title: 'laterite',
    icon: 'laterite',
    link: '/resource/7',
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
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'aluminum',
            icon: 'aluminum',
            link: '/resource/16'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 8,
    title: 'lithium',
    icon: 'lithium',
    link: '/resource/8',
    nugget: 'nuggetLithium',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 2,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        }
    ],
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
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 9,
    title: 'malachite',
    icon: 'malachite',
    link: '/resource/9',
    nugget: 'nuggetMalachite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 2,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'copper',
            icon: 'copper',
            link: '/resource/19'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 10,
    title: 'organic',
    icon: 'organic',
    link: '/resource/10',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        },
        {
            id: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
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
            link: '/resource/17'
        },
        {
            id: 3,
            useId: 3,
            name: 'rubber',
            icon: 'rubber',
            link: '/resource/38'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 11,
    title: 'quartz',
    icon: 'quartz',
    link: '/resource/11',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 4,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        },
        {
            id: 5,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
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
            link: '/resource/20'
        },
        {
            id: 12,
            useId: 5,
            name: 'silicone',
            icon: 'silicone',
            link: '/resource/39'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 12,
    title: 'resin',
    icon: 'resin',
    link: '/resource/12',
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
            link: '/printer/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
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
            link: '/printer/5'
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
            link: '/resource/39'
        },
        {
            id: 11,
            useId: 4,
            name: 'rubber',
            icon: 'rubber',
            link: '/resource/38'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 13,
    title: 'sphalerite',
    icon: 'sphalerite',
    link: '/resource/13',
    nugget: 'nuggetSphalerite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 2,
            name: 'desolo',
            icon: 'desolo',
            link: '/planet/2'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'zinc',
            icon: 'zinc',
            link: '/resource/24'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 14,
    title: 'titanite',
    icon: 'titanite',
    link: '/resource/14',
    nugget: 'nuggetTitanite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 2,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'titanium',
            icon: 'titanium',
            link: '/resource/22'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 15,
    title: 'wolframite',
    icon: 'wolframite',
    link: '/resource/15',
    nugget: 'nuggetWolframite',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'desolo',
            icon: 'desolo',
            link: '/planet/2'
        },
        {
            id: 2,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub1: [],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smeltingFurnace',
            icon: 'smeltingFurnace',
            link: '/printer/5'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'tungsten',
            icon: 'tungsten',
            link: '/resource/23'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 16,
    title: 'aluminum',
    icon: 'aluminum',
    link: '/resource/16',
    nugget: 'nuggetAluminum',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'laterite',
            icon: 'laterite',
            link: '/resource/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 1,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'oxygenator',
            icon: 'oxygenator',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'mediumGenerator',
            icon: 'generator',
            link: ''
        },
        {
            id: 3,
            useId: 1,
            name: 'mediumWindTurbine',
            icon: 'generator',
            link: ''
        },
        {
            id: 4,
            useId: 1,
            name: 'tractor',
            icon: 'trailer',
            link: ''
        },
        {
            id: 5,
            useId: 1,
            name: 'trailer',
            icon: 'trailer',
            link: ''
        },
        {
            id: 6,
            useId: 1,
            name: 'solidFuelThruster',
            icon: 'thruster',
            link: ''
        },
        {
            id: 7,
            useId: 1,
            name: 'autoArm',
            icon: 'crane',
            link: ''
        },
        {
            id: 8,
            useId: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 9,
            useId: 2,
            name: 'buggy',
            icon: 'trailer',
            link: ''
        },
        {
            id: 10,
            useId: 2,
            name: 'largeTPlatform',
            icon: 'platform',
            link: ''
        },
        {
            id: 11,
            useId: 3,
            name: 'smallShuttle',
            icon: 'shuttle',
            link: ''
        },
        {
            id: 12,
            useId: 3,
            name: 'landingPad',
            icon: 'landingPad',
            link: ''
        },
        {
            id: 13,
            useId: 4,
            name: 'aluminumAlloy',
            icon: 'aluminumAlloy',
            link: '/resource/31'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 17,
    title: 'carbon',
    icon: 'carbon',
    link: '/resource/17',
    nugget: 'nuggetCarbon',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'plastic',
            icon: 'plastic',
            link: '/resource/37'
        },
        {
            id: 2,
            useId: 1,
            name: 'tungstenCarbide',
            icon: 'tungstenCarbide',
            link: '/resource/42'
        },
        {
            id: 3,
            useId: 1,
            name: 'explosivePowder',
            icon: 'explosivePowder',
            link: '/resource/33'
        },
        {
            id: 4,
            useId: 1,
            name: 'steel',
            icon: 'steel',
            link: '/resource/40'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 18,
    title: 'ceramic',
    icon: 'ceramic',
    link: '/resource/18',
    nugget: 'nuggetCeramic',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'clay',
            icon: 'clay',
            link: '/resource/3'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'plastic',
            icon: 'plastic',
            link: '/resource/37'
        },
        {
            id: 2,
            useId: 1,
            name: 'tungstenCarbide',
            icon: 'tungstenCarbide',
            link: '/resource/42'
        },
        {
            id: 3,
            useId: 1,
            name: 'explosivePowder',
            icon: 'explosivePowder',
            link: '/resource/33'
        },
        {
            id: 4,
            useId: 1,
            name: 'steel',
            icon: 'steel',
            link: '/resource/40'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 19,
    title: 'copper',
    icon: 'copper',
    link: '/resource/19',
    nugget: 'nuggetCopper',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'malachite',
            icon: 'malachite',
            link: '/resource/9'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 2,
            useId: 1,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 5,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        },
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'worklight',
            icon: 'worklight',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'smallSolarPanel',
            icon: 'solar',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'mediumSolarPanel',
            icon: 'solar',
            link: ''
        },
        {
            id: 4,
            useId: 2,
            name: 'splitter',
            icon: 'splitter',
            link: ''
        },
        {
            id: 5,
            useId: 2,
            name: 'powerSensor',
            icon: 'sensor',
            link: ''
        },
        {
            id: 6,
            useId: 2,
            name: 'extenders',
            icon: 'extenders',
            link: ''
        },
        {
            id: 7,
            useId: 3,
            name: 'largeSolarPanel',
            icon: 'solar',
            link: ''
        },
        {
            id: 8,
            useId: 4,
            name: 'solarArray',
            icon: 'solar',
            link: ''
        },
        {
            id: 9,
            useId: 5,
            name: 'aluminumAlloy',
            icon: 'aluminumAlloy',
            link: '/resource/31'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 20,
    title: 'glass',
    icon: 'glass',
    link: '/resource/20',
    nugget: 'nuggetGlass',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'quartz',
            icon: 'quartz',
            link: '/resource/11'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'oxygenTank',
            icon: 'oxygenTank',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'mediumSolarPanel',
            icon: 'solar',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'mediumResourceCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 4,
            useId: 2,
            name: 'mediumFluidSoilCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 5,
            useId: 2,
            name: 'mediumGasCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 6,
            useId: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        },
        {
            id: 7,
            useId: 3,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        },
        {
            id: 8,
            useId: 3,
            name: 'largeSolarPanel',
            icon: 'solar',
            link: ''
        },
        {
            id: 9,
            useId: 3,
            name: 'largeWindTurbine',
            icon: 'windTurbine',
            link: ''
        },
        {
            id: 10,
            useId: 4,
            name: 'solarArray',
            icon: 'solar',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 21,
    title: 'iron',
    icon: 'iron',
    link: '/resource/21',
    nugget: 'nuggetIron',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'hematite',
            icon: 'hematite',
            link: '/resource/6'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 2,
            useId: 1,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'mediumShredder',
            icon: 'shredder',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        },
        {
            id: 3,
            useId: 2,
            name: 'largeShredder',
            icon: 'shredder',
            link: ''
        },
        {
            id: 4,
            useId: 2,
            name: 'largePlatformC',
            icon: 'platform',
            link: ''
        },
        {
            id: 5,
            useId: 2,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 6,
            useId: 3,
            name: 'xlWindTurbine',
            icon: 'windTurbine',
            link: ''
        },
        {
            id: 7,
            useId: 3,
            name: 'extraLargePlatformA',
            icon: 'platform',
            link: ''
        },
        {
            id: 8,
            useId: 3,
            name: 'extraLargePlatformB',
            icon: 'platform',
            link: ''
        },
        {
            id: 9,
            useId: 3,
            name: 'extraLargePlatformC',
            icon: 'platform',
            link: ''
        },
        {
            id: 10,
            useId: 3,
            name: 'figurinePlatform',
            icon: 'platform',
            link: ''
        },
        {
            id: 11,
            useId: 4,
            name: 'steel',
            icon: 'steel',
            link: '/resource/40'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 22,
    title: 'titanium',
    icon: 'titanium',
    link: '/resource/22',
    nugget: 'nuggetTitanium',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'titanite',
            icon: 'titanite',
            link: '/resource/14'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 2,
            useId: 1,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'mediumStorageSilo',
            icon: 'storage',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'crane',
            icon: 'crane',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'largeResourceCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'titaniumAlloy',
            icon: 'titaniumAlloy',
            link: '/resource/41'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 23,
    title: 'tungsten',
    icon: 'tungsten',
    link: '/resource/23',
    nugget: 'nuggetTungsten',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'wolframite',
            icon: 'wolframite',
            link: '/resource/15'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'desolo',
            icon: 'desolo',
            link: '/planet/2'
        },
        {
            id: 2,
            useId: 1,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'floodlight',
            icon: 'worklight',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'mediumGenerator',
            icon: 'generator',
            link: ''
        },
        {
            id: 3,
            useId: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        },
        {
            id: 4,
            useId: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 5,
            useId: 4,
            name: 'tungstenCarbide',
            icon: 'tungstenCarbide',
            link: '/resource/42'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 24,
    title: 'zinc',
    icon: 'zinc',
    link: '/resource/24',
    nugget: 'nuggetZinc',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'sphalerite',
            icon: 'sphalerite',
            link: '/resource/13'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 2,
            useId: 1,
            name: 'desolo',
            icon: 'desolo',
            link: '/planet/2'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'powerCells',
            icon: 'powerCells',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'wideMod',
            icon: 'augment',
            link: ''
        },
        {
            id: 3,
            useId: 1,
            name: 'alignmentMod',
            icon: 'augment',
            link: ''
        },
        {
            id: 4,
            useId: 1,
            name: 'inhibitorMod',
            icon: 'augment',
            link: ''
        },
        {
            id: 5,
            useId: 1,
            name: 'boostMod',
            icon: 'augment',
            link: ''
        },
        {
            id: 6,
            useId: 1,
            name: 'narrowMod',
            icon: 'augment',
            link: ''
        },
        {
            id: 7,
            useId: 1,
            name: 'terrainAnalyzer',
            icon: 'augment',
            link: ''
        },
        {
            id: 8,
            useId: 1,
            name: 'smallBattery',
            icon: 'battery',
            link: ''
        },
        {
            id: 9,
            useId: 2,
            name: 'mediumBattery',
            icon: 'battery',
            link: ''
        },
        {
            id: 10,
            useId: 2,
            name: 'powerSensor',
            icon: 'sensor',
            link: ''
        },
        {
            id: 11,
            useId: 2,
            name: 'storageSensor',
            icon: 'sensor',
            link: ''
        },
        {
            id: 12,
            useId: 2,
            name: 'batterySensor',
            icon: 'sensor',
            link: ''
        },
        {
            id: 13,
            useId: 2,
            name: 'buttonRepeater',
            icon: 'sensor',
            link: ''
        },
        {
            id: 14,
            useId: 2,
            name: 'proximityRepeater',
            icon: 'sensor',
            link: ''
        },
        {
            id: 15,
            useId: 2,
            name: 'delayRepeater',
            icon: 'sensor',
            link: ''
        },
        {
            id: 16,
            useId: 2,
            name: 'countRepeater',
            icon: 'sensor',
            link: ''
        },
        {
            id: 17,
            useId: 3,
            name: 'mediumSensorArch',
            icon: 'sensor',
            link: ''
        },
        {
            id: 18,
            useId: 3,
            name: 'largeSensorRing',
            icon: 'sensor',
            link: ''
        },
        {
            id: 19,
            useId: 3,
            name: 'largeSensorHoopA',
            icon: 'sensor',
            link: ''
        },
        {
            id: 20,
            useId: 3,
            name: 'largeSensorHoopB',
            icon: 'sensor',
            link: ''
        },
        {
            id: 21,
            useId: 3,
            name: 'xlSensorArch',
            icon: 'sensor',
            link: ''
        },
        {
            id: 22,
            useId: 3,
            name: 'xlSensorCanopy',
            icon: 'sensor',
            link: ''
        },
        {
            id: 23,
            useId: 3,
            name: 'xlSensorHoopA',
            icon: 'sensor',
            link: ''
        },
        {
            id: 24,
            useId: 3,
            name: 'xlSensorHoopB',
            icon: 'sensor',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 25,
    title: 'argon',
    icon: 'argon',
    link: '/resource/25',
    nugget: 'nuggetArgon',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 2,
            useId: 1,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'steel',
            icon: 'steel',
            link: '/resource/40'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 26,
    title: 'helium',
    icon: 'helium',
    link: '/resource/26',
    nugget: 'nuggetHelium',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'nanocarbonAlloy',
            icon: 'nanocarbonAlloy',
            link: '/resource/36'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 27,
    title: 'hydrogen',
    icon: 'hydrogen',
    link: '/resource/27',
    nugget: 'nuggetHydrogen',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 2,
            useId: 1,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            useId: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 4,
            useId: 1,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'hydrazine',
            icon: 'hydrazine',
            link: '/resource/34'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 28,
    title: 'methane',
    icon: 'methane',
    link: '/resource/28',
    nugget: 'nuggetMethane',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 2,
            useId: 1,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'silicone',
            icon: 'silicone',
            link: '/resource/39'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 29,
    title: 'nitrogen',
    icon: 'nitrogen',
    link: '/resource/29',
    nugget: 'nuggetNitrogen',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 2,
            useId: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 3,
            useId: 1,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'titaniumAlloy',
            icon: 'titaniumAlloy',
            link: '/resource/41'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 30,
    title: 'sulfur',
    icon: 'sulfur',
    link: '/resource/30',
    nugget: 'nuggetSulfur',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 2,
            useId: 1,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        }
    ],
    resourceSub2: [],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'explosivePowder',
            icon: 'explosivePowder',
            link: '/resource/33'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 31,
    title: 'aluminumAlloy',
    icon: 'aluminumAlloy',
    link: '/resource/31',
    nugget: 'nuggetAluminumAlloy',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'aluminum',
            icon: 'aluminum',
            link: '/resource/16'
        },
        {
            id: 2,
            useId: 1,
            name: 'copper',
            icon: 'copper',
            link: '/resource/19'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'laterite',
            icon: 'laterite',
            link: '/resource/7'
        },
        {
            id: 2,
            useId: 2,
            name: 'malachite',
            icon: 'malachite',
            link: '/resource/9'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 3,
            useId: 2,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 4,
            useId: 2,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 5,
            useId: 2,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'explosivePowder',
            icon: 'explosivePowder',
            link: '/resource/33'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 32,
    title: 'diamond',
    icon: 'diamond',
    link: '/resource/32',
    nugget: 'nuggetDiamond',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'graphene',
            icon: 'graphene',
            link: '/resource/35'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'graphite',
            icon: 'graphite',
            link: '/resource/5'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'drillMod3',
            icon: 'augment',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'drillStrength3',
            icon: 'drill',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 33,
    title: 'explosivePowder',
    icon: 'explosivePowder',
    link: '/resource/33',
    nugget: 'nuggetExplosivePowder',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'carbon',
            icon: 'carbon',
            link: '/resource/17'
        },
        {
            id: 2,
            useId: 1,
            name: 'sulfur',
            icon: 'sulfur',
            link: '/resource/30'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        },
        {
            id: 2,
            useId: 2,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            useId: 2,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'dynamite',
            icon: 'dynamite',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'fireworks',
            icon: 'fireworks',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 34,
    title: 'hydrazine',
    icon: 'hydrazine',
    link: '/resource/34',
    nugget: 'nuggetHydrazine',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'ammonium',
            icon: 'ammonium',
            link: '/resource/1'
        },
        {
            id: 2,
            useId: 1,
            name: 'hydrogen',
            icon: 'hydrogen',
            link: '/resource/27'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 2,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 5,
            useId: 2,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 6,
            useId: 2,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 7,
            useId: 2,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        }
    ],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'graphene',
            icon: 'graphene',
            link: '/resource/35'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 35,
    title: 'graphene',
    icon: 'graphene',
    link: '/resource/35',
    nugget: 'nuggetGraphene',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'graphite',
            icon: 'graphite',
            link: '/resource/5'
        },
        {
            id: 2,
            useId: 1,
            name: 'hydrazine',
            icon: 'hydrazine',
            link: '/resource/34'
        },
        {
            id: 3,
            useId: 1,
            name: 'hydrogen',
            icon: 'hydrogen',
            link: '/resource/27'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 2,
            name: 'ammonium',
            icon: 'ammonium',
            link: '/resource/1'
        },
        {
            id: 5,
            useId: 3,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 6,
            useId: 3,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 7,
            useId: 3,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 8,
            useId: 3,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 4,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 4,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 4,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 3,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'fieldShelter',
            icon: 'shelter',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'solarArray',
            icon: 'solar',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'xlWindTurbine',
            icon: 'windTurbine',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'diamond',
            icon: 'diamond',
            link: '/resource/32'
        },
        {
            id: 5,
            useId: 3,
            name: 'titaniumAlloy',
            icon: 'titaniumAlloy',
            link: '/resource/41'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 36,
    title: 'nanocarbonAlloy',
    icon: 'nanocarbonAlloy',
    link: '/resource/36',
    nugget: 'nuggetNanocarbonAlloy',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'steel',
            icon: 'steel',
            link: '/resource/40'
        },
        {
            id: 2,
            useId: 1,
            name: 'helium',
            icon: 'helium',
            link: '/resource/26'
        },
        {
            id: 3,
            useId: 1,
            name: 'titaniumAlloy',
            icon: 'titaniumAlloy',
            link: '/resource/41'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'carbon',
            icon: 'carbon',
            link: '/resource/17'
        },
        {
            id: 2,
            useId: 1,
            name: 'argon',
            icon: 'argon',
            link: '/resource/25'
        },
        {
            id: 3,
            useId: 1,
            name: 'iron',
            icon: 'iron',
            link: '/resource/21'
        },
        {
            id: 4,
            useId: 2,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        },
        {
            id: 5,
            useId: 3,
            name: 'titanium',
            icon: 'titanium',
            link: '/resource/22'
        },
        {
            id: 6,
            useId: 3,
            name: 'nitrogen',
            icon: 'nitrogen',
            link: '/resource/29'
        },
        {
            id: 7,
            useId: 3,
            name: 'graphene',
            icon: 'graphene',
            link: '/resource/35'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        },
        {
            id: 2,
            useId: 2,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 3,
            useId: 2,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 4,
            useId: 3,
            name: 'hematite',
            icon: 'hematite',
            link: '/resource/6'
        },
        {
            id: 5,
            useId: 5,
            name: 'titanite',
            icon: 'titanite',
            link: '/resource/14'
        },
        {
            id: 6,
            useId: 6,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 7,
            useId: 6,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 8,
            useId: 6,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        },
        {
            id: 9,
            useId: 7,
            name: 'graphite',
            icon: 'graphite',
            link: '/resource/5'
        },
        {
            id: 10,
            useId: 7,
            name: 'hydrazine',
            icon: 'hydrazine',
            link: '/resource/34'
        }
    ],
    resourceSub4: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 4,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 5,
            useId: 4,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 6,
            useId: 4,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 7,
            useId: 5,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 8,
            useId: 5,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 9,
            useId: 5,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 10,
            useId: 9,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 11,
            useId: 9,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 12,
            useId: 9,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 13,
            useId: 10,
            name: 'ammonium',
            icon: 'ammonium',
            link: '/resource/1'
        },
        {
            id: 14,
            useId: 10,
            name: 'hydrogen',
            icon: 'hydrogen',
            link: '/resource/27'
        }
    ],
    resourceSub5: [
        {
            id: 1,
            useId: 13,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 13,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 13,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 14,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 5,
            useId: 14,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 4,
            useId: 14,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 4,
            useId: 14,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
    ],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'portableOxygenator',
            icon: 'oxygenator',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'rtg',
            icon: 'generator',
            link: ''
        },
        {
            id: 3,
            useId: 3,
            name: 'largeResourceCanister',
            icon: 'canister',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 37,
    title: 'plastic',
    icon: 'plastic',
    link: '/resource/37',
    nugget: 'nuggetPlastic',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'compound',
            icon: 'compound',
            link: '/resource/4'
        },
        {
            id: 2,
            useId: 1,
            name: 'carbon',
            icon: 'carbon',
            link: '/resource/17'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 2,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 4,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 4,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 4,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'holographicFigurine',
            icon: 'figurine',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'mediumFluidSoilCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'mediumResourceCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'largeRoverSeat',
            icon: 'roverSeat',
            link: ''
        },
        {
            id: 5,
            useId: 3,
            name: 'atmosphericCondenser',
            icon: 'atmosphericCondenser',
            link: '/printer/8'
        },
        {
            id: 6,
            useId: 3,
            name: 'mediumRover',
            icon: 'trailer',
            link: ''
        },
        {
            id: 7,
            useId: 4,
            name: 'shelter',
            icon: 'shelter',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 38,
    title: 'rubber',
    icon: 'rubber',
    link: '/resource/38',
    nugget: 'nuggetRubber',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        },
        {
            id: 2,
            useId: 1,
            name: 'resin',
            icon: 'resin',
            link: '/resource/12'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 2,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 5,
            useId: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 6,
            useId: 2,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'winch',
            icon: 'winch',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'mediumRover',
            icon: 'trailer',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'recreationalSphere',
            icon: 'recreationalSphere',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'largeRover',
            icon: 'trailer',
            link: ''
        },
        {
            id: 5,
            useId: 3,
            name: 'autoExtractor',
            icon: 'autoExtractor',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 39,
    title: 'silicone',
    icon: 'silicone',
    link: '/resource/39',
    nugget: 'nuggetSilicone',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'resin',
            icon: 'resin',
            link: '/resource/12'
        },
        {
            id: 2,
            useId: 1,
            name: 'methane',
            icon: 'methane',
            link: '/resource/28'
        },
        {
            id: 3,
            useId: 1,
            name: 'quartz',
            icon: 'quartz',
            link: '/resource/11'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 2,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 5,
            useId: 2,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        },
        {
            id: 6,
            useId: 3,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 7,
            useId: 3,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 8,
            useId: 3,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub3: [],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 2,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'fieldShelter',
            icon: 'shelter',
            link: ''
        },
        {
            id: 2,
            useId: 1,
            name: 'paver',
            icon: 'paver',
            link: ''
        },
        {
            id: 3,
            useId: 1,
            name: 'mediumGasCanister',
            icon: 'canister',
            link: ''
        },
        {
            id: 4,
            useId: 2,
            name: 'crane',
            icon: 'crane',
            link: ''
        },
        {
            id: 5,
            useId: 3,
            name: 'shelter',
            icon: 'shelter',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 40,
    title: 'steel',
    icon: 'steel',
    link: '/resource/40',
    nugget: 'nuggetSteel',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'carbon',
            icon: 'carbon',
            link: '/resource/17'
        },
        {
            id: 2,
            useId: 1,
            name: 'argon',
            icon: 'argon',
            link: '/resource/25'
        },
        {
            id: 3,
            useId: 1,
            name: 'iron',
            icon: 'iron',
            link: '/resource/21'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        },
        {
            id: 2,
            useId: 2,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 3,
            useId: 2,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 4,
            useId: 3,
            name: 'hematite',
            icon: 'hematite',
            link: '/resource/6'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 1,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 4,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
        {
            id: 5,
            useId: 4,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 6,
            useId: 4,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 5,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'probeScanner',
            icon: 'probeScanner',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'hydrazineThruster',
            icon: 'thruster',
            link: ''
        },
        {
            id: 3,
            useId: 3,
            name: 'crane',
            icon: 'crane',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'largeStorageSiloA',
            icon: 'storage',
            link: ''
        },
        {
            id: 5,
            useId: 3,
            name: 'largeStorageSiloB',
            icon: 'storage',
            link: ''
        },
        {
            id: 5,
            useId: 4,
            name: 'extraLargeShredder',
            icon: 'shredder',
            link: ''
        },
        {
            id: 5,
            useId: 4,
            name: 'autoExtractor',
            icon: 'autoExtractor',
            link: ''
        },
        {
            id: 5,
            useId: 5,
            name: 'nanocarbonAlloy',
            icon: 'nanocarbonAlloy',
            link: '/resource/36'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 41,
    title: 'titaniumAlloy',
    icon: 'titaniumAlloy',
    link: '/resource/41',
    nugget: 'nuggetTitaniumAlloy',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'titanium',
            icon: 'titanium',
            link: '/resource/22'
        },
        {
            id: 2,
            useId: 1,
            name: 'nitrogen',
            icon: 'nitrogen',
            link: '/resource/29'
        },
        {
            id: 3,
            useId: 1,
            name: 'graphene',
            icon: 'graphene',
            link: '/resource/35'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'titanite',
            icon: 'titanite',
            link: '/resource/14'
        },
        {
            id: 2,
            useId: 2,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 3,
            useId: 2,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 4,
            useId: 2,
            name: 'atrox',
            icon: 'atrox',
            link: '/planet/7'
        },
        {
            id: 5,
            useId: 3,
            name: 'graphite',
            icon: 'graphite',
            link: '/resource/5'
        },
        {
            id: 6,
            useId: 3,
            name: 'hydrazine',
            icon: 'hydrazine',
            link: '/resource/34'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 2,
            useId: 1,
            name: 'glacio',
            icon: 'glacio',
            link: '/planet/6'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 5,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 5,
            useId: 5,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 6,
            useId: 5,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 7,
            useId: 6,
            name: 'ammonium',
            icon: 'ammonium',
            link: '/resource/1'
        },
        {
            id: 8,
            useId: 6,
            name: 'hydrogen',
            icon: 'hydrogen',
            link: '/resource/27'
        },
    ],
    resourceSub4: [
        {
            id: 1,
            useId: 7,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 2,
            useId: 7,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 3,
            useId: 7,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 8,
            name: 'sylva',
            icon: 'sylva',
            link: '/planet/1'
        },
        {
            id: 5,
            useId: 8,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 6,
            useId: 8,
            name: 'vesania',
            icon: 'vesania',
            link: '/planet/4'
        },
        {
            id: 7,
            useId: 8,
            name: 'novus',
            icon: 'novus',
            link: '/planet/5'
        },
    ],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        },
        {
            id: 4,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'hydrazineJetPack',
            icon: 'thruster',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'drillStrength2',
            icon: 'drill',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'drillStrength3',
            icon: 'drill',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'largeShuttle',
            icon: 'shuttle',
            link: ''
        },
        {
            id: 5,
            useId: 3,
            name: 'autoExtractor',
            icon: 'autoExtractor',
            link: ''
        },
        {
            id: 5,
            useId: 4,
            name: 'nanocarbonAlloy',
            icon: 'nanocarbonAlloy',
            link: '/resource/36'
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
},
{
    id: 42,
    title: 'tungstenCarbide',
    icon: 'tungstenCarbide',
    link: '/resource/42',
    nugget: 'nuggetTungstenCarbide',
    hasResourceItem: true,
    resourceItem: [
        {
            id: 1,
            name: 'chemistryLab',
            icon: 'chemistryLab',
            link: '/printer/7'
        }
    ],
    resourceSub1: [
        {
            id: 1,
            useId: 1,
            name: 'tungsten',
            icon: 'tungsten',
            link: '/resource/23'
        },
        {
            id: 2,
            useId: 1,
            name: 'carbon',
            icon: 'carbon',
            link: '/resource/17'
        }
    ],
    resourceSub2: [
        {
            id: 1,
            useId: 1,
            name: 'wolframite',
            icon: 'wolframite',
            link: '/resource/15'
        },
        {
            id: 2,
            useId: 2,
            name: 'organic',
            icon: 'organic',
            link: '/resource/10'
        }
    ],
    resourceSub3: [
        {
            id: 1,
            useId: 1,
            name: 'desolo',
            icon: 'desolo',
            link: '/planet/2'
        },
        {
            id: 2,
            useId: 1,
            name: 'calidor',
            icon: 'calidor',
            link: '/planet/3'
        },
        {
            id: 3,
            useId: 1,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        },
        {
            id: 4,
            useId: 2,
            name: 'sourceAllPlanets',
            icon: 'sylva',
            link: 'planets'
        },
        {
            id: 5,
            useId: 2,
            name: 'soilCentrifuge',
            icon: 'soilCentrifuge',
            link: '/printer/6'
        },
        {
            id: 6,
            useId: 2,
            name: 'tradePlatform',
            icon: 'tradePlatform',
            link: '/printer/9'
        }
    ],
    resourceSub4: [],
    resourceSub5: [],
    hasUse: true,
    use: [
        {
            id: 1,
            name: 'backpackPrinter',
            icon: 'backpackPrinter',
            link: '/printer/1'
        },
        {
            id: 2,
            name: 'smallPrinter',
            icon: 'smallPrinter',
            link: '/printer/2'
        },
        {
            id: 3,
            name: 'mediumPrinter',
            icon: 'mediumPrinter',
            link: '/printer/3'
        },
        {
            id: 4,
            name: 'largePrinter',
            icon: 'largePrinter',
            link: '/printer/4'
        }
    ],
    sub1: [
        {
            id: 1,
            useId: 1,
            name: 'drillMod2',
            icon: 'augment',
            link: ''
        },
        {
            id: 2,
            useId: 2,
            name: 'drillStrength1',
            icon: 'drill',
            link: ''
        },
        {
            id: 3,
            useId: 2,
            name: 'drillStrength2',
            icon: 'drill',
            link: ''
        },
        {
            id: 4,
            useId: 3,
            name: 'largeShuttle',
            icon: 'shuttle',
            link: ''
        },
        {
            id: 5,
            useId: 4,
            name: 'extraLargeShredder',
            icon: 'shredder',
            link: '/resource/36'
        },
        {
            id: 5,
            useId: 4,
            name: 'autoExtractor',
            icon: 'autoExtractor',
            link: ''
        }
    ],
    sub2: [],
    sub3: [],
    sub4: [],
    sub5: [],
}]