import { translate } from '../libs/localization';
import { FavoriteType } from './enums';

export type PrinterOutputListDataProps  = (typeof PrinterOutputList)[0]

export const PrinterOutputList = [
    {
        id: 1,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallPrinter'),
        cost: 'Unlocked'
    },
    {
        id: 2,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('packager'),
        cost: '1.000 Bytes'
    },
    {
        id: 3,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('levelingBlock'),
        cost: '500 Bytes'
    },
    {
        id: 4,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('tether'),
        cost: 'Unlocked'
    },
    {
        id: 5,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('oxygenFilter'),
        cost: 'Unlocked'
    },
    {
        id: 6,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('oxygenTank'),
        cost: '2.000 Bytes'
    },
    {
        id: 7,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 36,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('portableOxygenator'),
        cost: '10.000 Bytes'
    },
    {
        id: 8,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallCanister'),
        cost: translate('unlocked')
    },
    {
        id: 9,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('beacon'),
        cost: translate('unlocked')
    },
    {
        id: 10,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('worklight'),
        cost: translate('unlocked')
    },
    {
        id: 11,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 10,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('glowsticks'),
        cost: '350 Bytes'
    },
    {
        id: 12,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 23,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('floodlight'),
        cost: '2.000 Bytes'
    },
    {
        id: 13,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallGenerator'),
        cost: translate('unlocked')
    },
    {
        id: 14,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('powerCells'),
        cost: '800 Bytes'
    },
    {
        id: 15,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallSolarPanel'),
        cost: '300 Bytes'
    },
    {
        id: 16,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallWindTurbine'),
        cost: '300 Bytes'
    },
    {
        id: 17,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallBattery'),
        cost: '2.000 Bytes'
    },
    {
        id: 18,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('boostMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 19,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('wideMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 20,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('narrowMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 21,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('inhibitorMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 22,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('alignmentMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 23,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('drillMod1'),
        cost: '1.000 Bytes'
    },
    {
        id: 24,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('drillMod2'),
        cost: '2.500 Bytes'
    },
    {
        id: 25,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 32,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('drillMod3'),
        cost: '3.750 Bytes'
    },
    {
        id: 26,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 33,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('dynamite'),
        cost: '3.750 Bytes'
    },
    {
        id: 27,
        printerId: 1,
        input: [
            {
                id: 1,
                listId:33,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('fireworks'),
        cost: '3.750 Bytes'
    },
    {
        id: 28,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('smallCamera'),
        cost: '2.500 Bytes'
    },
    {
        id: 29,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallTrumpetHorn'),
        cost: '1.000 Bytes'
    },
    {
        id: 30,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('holographicFigurine'),
        cost: '3.000 Bytes'
    },
    {
        id: 31,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('terrainAnalyzer'),
        cost: '2.000 Bytes'
    },
    {
        id: 32,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('probeScanner'),
        cost: '4.000 Bytes'
    },
    {
        id: 33,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('solidFuelJumpJet'),
        cost: '5.000 Bytes'
    },
    {
        id: 34,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 41,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('hydrazineJetPack'),
        cost: '15.000 Bytes'
    },
    {
        id: 35,
        printerId: 1,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('hoverboard'),
        cost: 'Unloked via missions'
    },
    {
        id: 36,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumPrinter'),
        cost: 'Unlocked'
    },
    {
        id: 37,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('oxygenator'),
        cost: '1.800 Bytes'
    },
    {
        id: 38,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 21,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumShredder'),
        cost: '1.250 Bytes'
    },
    {
        id: 39,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 35,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 39,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('fieldShelter'),
        cost: '8.000 Bytes'
    },
    {
        id: 40,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('autoArm'),
        cost: '1.500 Bytes'
    },
    {
        id: 41,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumResourceCanister'),
        cost: '2.000 Bytes'
    },
    {
        id: 42,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumFluidSoilCanister'),
        cost: '2.500 Bytes'
    },
    {
        id: 43,
        printerId: 2,
        input: [
            {
                id: 20,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 39,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumGasCanister'),
        cost: '4.000 Bytes'
    },
    {
        id: 44,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('powerSensor'),
        cost: '500 Bytes'
    },
    {
        id: 45,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('storageSensor'),
        cost: '750 Bytes'
    },
    {
        id: 46,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('batterySensor'),
        cost: '750 Bytes'
    },
    {
        id: 47,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('buttonRepeater'),
        cost: '300 Bytes'
    },
    {
        id: 48,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('delayRepeater'),
        cost: '1.000 Bytes'
    },
    {
        id: 49,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('countRepeater'),
        cost: '1.000 Bytes'
    },
    {
        id: 50,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('extenders'),
        cost: '500 Bytes'
    },
    {
        id: 51,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('powerSwitch'),
        cost: '750 Bytes'
    },
    {
        id: 52,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('splitter'),
        cost: '1.000 Bytes'
    },
    {
        id: 53,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 23,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumGenerator'),
        cost: '2.000 Bytes'
    },
    {
        id: 54,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumSolarPanel'),
        cost: '2.000 Bytes'
    },
    {
        id: 55,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumWindTurbine'),
        cost: '2.500 Bytes'
    },
    {
        id: 56,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 8,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumBattery'),
        cost: '3.750 Bytes'
    },
    {
        id: 57,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 8,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 36,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('rtg'),
        cost: '12.500 Bytes'
    },
    {
        id: 58,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumPlatformA'),
        cost: 'Unlocked'
    },
    {
        id: 59,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumPlatformB'),
        cost: '250 Bytes'
    },
    {
        id: 60,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumPlatformC'),
        cost: '400 Bytes'
    },
    {
        id: 61,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('tallPlatform'),
        cost: '750 Bytes'
    },
    {
        id: 62,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumTPlatform'),
        cost: '400 Bytes'
    },
    {
        id: 63,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumStorage'),
        cost: 'Unlocked'
    },
    {
        id: 64,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 22,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumStorageSilo'),
        cost: '3.000 Bytes'
    },
    {
        id: 65,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('tallStorage'),
        cost: '400 Bytes'
    },
    {
        id: 66,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('roverSeat'),
        cost: 'Unlocked'
    },
    {
        id: 67,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('tractor'),
        cost: '1.000 Bytes'
    },
    {
        id: 68,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('trailer'),
        cost: '1.500 Bytes'
    },
    {
        id: 69,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('mediumBuggyHorn'),
        cost: '2.000 Bytes'
    },
    {
        id: 70,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('winch'),
        cost: '3.750 Bytes'
    },
    {
        id: 71,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 39,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 36,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('paver'),
        cost: '5.000 Bytes'
    },
    {
        id: 72,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('drillStrength1'),
        cost: '2.500 Bytes'
    },
    {
        id: 73,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 41,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('drillStrength2'),
        cost: '5.000 Bytes'
    },
    {
        id: 74,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 41,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 32,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('drillStrength3'),
        cost: '7.500 Bytes'
    },
    {
        id: 75,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('solidFuelThruster'),
        cost: '500 Bytes'
    },
    {
        id: 76,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('hydrazineThruster'),
        cost: '3.750 Bytes'
    },
    {
        id: 77,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('packager'),
        cost: '1.000 Bytes'
    },
    {
        id: 78,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smallCanister'),
        cost: 'Unlocked'
    },
    {
        id: 79,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 33,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('dynamite'),
        cost: '3.750 Bytes'
    },
    {
        id: 80,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 33,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('fireworks'),
        cost: '3.750 Bytes'
    },
    {
        id: 81,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('worklight'),
        cost: 'Unlocked'
    },
    {
        id: 82,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 23,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('floodlight'),
        cost: '2.000 Bytes'
    },
    {
        id: 83,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('automoton001'),
        cost: translate('event')
    },
    {
        id: 84,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('automoton002'),
        cost: translate('event')
    },
    {
        id: 85,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 17,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('cubicObject'),
        cost: translate('event')
    },
    {
        id: 86,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('stellarObject'),
        cost: translate('event')
    },
    {
        id: 87,
        printerId: 2,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            }
        ],
        output: translate('cosmigBauble'),
        cost: translate('event')
    },
    {
        id: 88,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 3,
                type: FavoriteType.Resource
            }
        ],
        output: translate('largePrinter'),
        cost: translate('unlocked')
    },
    {
        id: 89,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('smeltingFurnace'),
        cost: '250 Bytes'
    },
    {
        id: 90,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 2,
                type: FavoriteType.Resource
            }
        ],
        output: translate('soilCentrifuge'),
        cost: '750 Bytes'
    },
    {
        id: 91,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 23,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            }
        ],
        output: translate('chemistryLab'),
        cost: '1.600 Bytes'
    },
    {
        id: 92,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 21,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('atmosphericCondenser'),
        cost: '2.200 Bytes'
    },
    {
        id: 93,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('researchChamber'),
        cost: translate('unlocked')
    },
    {
        id: 94,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('exoRequestPlatform'),
        cost: translate('unlocked')
    },
    {
        id: 95,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 23,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('tradePlatform'),
        cost: '2.500 Bytes'
    },
    {
        id: 96,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 21,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('largeShredder'),
        cost: '2.500 Bytes'
    },
    {
        id: 97,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeSolarPanel'),
        cost: '4.000 Bytes'
    },
    {
        id: 98,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeWindTurbine'),
        cost: '3.500 Bytes'
    },
    {
        id: 99,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largePlatformA'),
        cost: translate('unlocked')
    },
    {
        id: 100,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largePlatformB'),
        cost: '500 Bytes'
    },
    {
        id: 101,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 21,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largePlatformC'),
        cost: '1.000 Bytes'
    },
    {
        id: 102,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeTPlatform'),
        cost: '1.000 Bytes'
    },
    {
        id: 103,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeCurvedPlatform'),
        cost: '1.000 Bytes'
    },
    {
        id: 104,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeExtendedPlatform'),
        cost: '500 Bytes'
    },
    {
        id: 105,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 22,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 36,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeResourceCanister'),
        cost: '5.000 Bytes'
    },
    {
        id: 106,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeStorage'),
        cost: '2.000 Bytes'
    },
    {
        id: 107,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeStorageSiloA'),
        cost: '5.000 Bytes'
    },
    {
        id: 108,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 40,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeStorageSiloB'),
        cost: '7.500 Bytes'
    },
    {
        id: 109,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeActiveStorage'),
        cost: '2.000 Bytes'
    },
    {
        id: 110,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('buggy'),
        cost: '1.500 Bytes'
    },
    {
        id: 111,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 37,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeRoverSeat'),
        cost: '2.000 Bytes'
    },
    {
        id: 112,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 37,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('mediumRover'),
        cost: '3.750 Bytes'
    },
    {
        id: 113,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 22,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 39,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('crane'),
        cost: '4.500 Bytes'
    },
    {
        id: 114,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 37,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeFogHorn'),
        cost: '4.000 Bytes'
    },
    {
        id: 115,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('sourceVtol'),
        cost: 'Unlocked via mission'
    },
    {
        id: 116,
        printerId: 3,
        input: [
            {
                id: 1,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('recreationalSphere'),
        cost: '4.500 Bytes'
    },
    {
        id: 117,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 39,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 37,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('shelter'),
        cost: translate('unlocked')
    },
    {
        id: 118,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 4,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('autoExtractor'),
        cost: '7.500 Bytes'
    },
    {
        id: 119,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 42,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 2,
                quantity: 2,
                type: FavoriteType.Item
            },
        
        ],
        output: translate('extraLargeShredder'),
        cost: '5.000 Bytes'
    },
    {
        id: 120,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 35,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 20,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 4,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('solarArray'),
        cost: '6.000 Bytes'
    },
    {
        id: 121,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 35,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 4,
                listId: 21,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('xlWindTurbine'),
        cost: '4.500 Bytes'
    },
    {
        id: 122,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('mediumSensorArch'),
        cost: '500 Bytes'
    },
    {
        id: 123,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('xlSensorArch'),
        cost: '1.000 Bytes'
    },
    {
        id: 124,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('xlSensorCanopy'),
        cost: '1.000 Bytes'
    },
    {
        id: 125,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeSensorRing'),
        cost: '500 Bytes'
    },
    {
        id: 126,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeSensorHoopA'),
        cost: '750 Bytes'
    },
    {
        id: 127,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('largeSensorHoopB'),
        cost: '750 Bytes'
    },
    {
        id: 128,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('xlSensorHoopA'),
        cost: '750 Bytes'
    },
    {
        id: 129,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 24,
                quantity: 3,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('xlSensorHoopB'),
        cost: '1.000 Bytes'
    },
    {
        id: 130,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 21,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('extraLargePlatformA'),
        cost: '2.000 Bytes'
    },
    {
        id: 131,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 21,
                quantity: 4,
                type: FavoriteType.Resource
            },
        ],
        output: translate('extraLargePlatformB'),
        cost: '3.000 Bytes'
    },
    {
        id: 132,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 21,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('extraLargePlatformC'),
        cost: '2.000 Bytes'
    },
    {
        id: 133,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 4,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('extraLargeCurvedPlatform'),
        cost: '2.000 Bytes'
    },
    {
        id: 134,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: translate('xlExtendedPlatform'),
        cost: '750 Bytes'
    },
    {
        id: 135,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 21,
                quantity: 4,
                type: FavoriteType.Resource
            },
        ],
        output: translate('figurinePlatform'),
        cost: '3.000 Bytes'
    },
    {
        id: 136,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 21,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('extraLargeStorage'),
        cost: '2.000 Bytes'
    },
    {
        id: 137,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 38,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 2,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: translate('largeRover'),
        cost: '5.000 Bytes'
    },
    {
        id: 138,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('landingPad'),
        cost: '750 Bytes'
    },
    {
        id: 139,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('smallShuttle'),
        cost: '1.500 Bytes'
    },
    {
        id: 140,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 31,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('mediumShuttle'),
        cost: '3.750 Bytes'
    },
    {
        id: 141,
        printerId: 4,
        input: [
            {
                id: 1,
                listId: 18,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 41,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 2,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: translate('largeShuttle'),
        cost: '5.000 Bytes'
    },
    {
        id: 142,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 10,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('carbon'),
        cost: '-'
    },
    {
        id: 143,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('glass'),
        cost: '-'
    },
    {
        id: 144,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('ceramic'),
        cost: '-'
    },
    {
        id: 145,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 9,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('copper'),
        cost: '-'
    },
    {
        id: 146,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 7,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('aluminum'),
        cost: '-'
    },
    {
        id: 147,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 13,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('zinc'),
        cost: '-'
    },
    {
        id: 148,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 6,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('iron'),
        cost: '-'
    },
    {
        id: 149,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 15,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('tungsten'),
        cost: '-'
    },
    {
        id: 150,
        printerId: 5,
        input: [
            {
                id: 1,
                listId: 14,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('titanium'),
        cost: '-'
    },
    {
        id: 151,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: '8x ' + translate('compound'),
        cost: '-'
    },
    {
        id: 152,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: '8x ' + translate('resin'),
        cost: '-'
    },
    {
        id: 153,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: '8x ' + translate('organic'),
        cost: '-'
    },
    {
        id: 154,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: '6x ' + translate('clay'),
        cost: '-'
    },
    {
        id: 155,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: '4x ' + translate('quartz'),
        cost: '-'
    },
    {
        id: 156,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('graphite'),
        cost: '-'
    },
    {
        id: 157,
        printerId: 6,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: translate('ammonium'),
        cost: '-'
    },
    {
        id: 158,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 10,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('rubber'),
        cost: '-'
    },
    {
        id: 159,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 17,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('plastic'),
        cost: '-'
    },
    {
        id: 160,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 16,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 19,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('aluminumAlloy'),
        cost: '-'
    },
    {
        id: 161,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 17,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 23,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('tungstenCarbide'),
        cost: '-'
    },
    {
        id: 162,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 34,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('graphene'),
        cost: '-'
    },
    {
        id: 163,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 2,
                type: FavoriteType.Resource
            },
        ],
        output: translate('diamond'),
        cost: '-'
    },
    {
        id: 164,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 27,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('hydrazine'),
        cost: '-'
    },
    {
        id: 165,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 12,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 11,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 28,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('silicone'),
        cost: '-'
    },
    {
        id: 166,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 17,
                quantity: 2,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 30,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('explosivePowder'),
        cost: '-'
    },
    {
        id: 167,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 17,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 21,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 25,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('steel'),
        cost: '-'
    },
    {
        id: 168,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 22,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 35,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 29,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('titaniumAlloy'),
        cost: '-'
    },
    {
        id: 169,
        printerId: 7,
        input: [
            {
                id: 1,
                listId: 40,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 2,
                listId: 41,
                quantity: 1,
                type: FavoriteType.Resource
            },
            {
                id: 3,
                listId: 26,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: translate('nanocarbonAlloy'),
        cost: '-'
    },
    {
        id: 170,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('hydrogen') + ' (75)',
        cost: '-'
    },
    {
        id: 171,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('nitrogen') + ' (100)',
        cost: '-'
    },
    {
        id: 172,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('hydrogen') + ' (50)',
        cost: '-'
    },
    {
        id: 173,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 3,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('sulfur') + ' (100)',
        cost: '-'
    },
    {
        id: 174,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('hydrogen') + ' (100)',
        cost: '-'
    },
    {
        id: 175,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 4,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('argon') + ' (50)',
        cost: '-'
    },
    {
        id: 176,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('hydrogen') + ' (25)',
        cost: '-'
    },
    {
        id: 177,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 5,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('methane') + ' (75)',
        cost: '-'
    },
    {
        id: 178,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 6,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('argon') + ' (100)',
        cost: '-'
    },
    {
        id: 179,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 7,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('methane') + ' (100)',
        cost: '-'
    },
    {
        id: 180,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 7,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('nitrogen') + ' (50)',
        cost: '-'
    },
    {
        id: 181,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 7,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('sulfur') + ' (75)',
        cost: '-'
    },
    {
        id: 182,
        printerId: 8,
        input: [
            {
                id: 1,
                listId: 7,
                quantity: 1,
                type: FavoriteType.Planet
            },
        ],
        output: translate('helium') + ' (25)',
        cost: '-'
    },
    {
        id: 183,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('compound'),
        cost: '-'
    },
    {
        id: 184,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('resin'),
        cost: '-'
    },
    {
        id: 185,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('organic'),
        cost: '-'
    },
    {
        id: 186,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('clay'),
        cost: '-'
    },
    {
        id: 187,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('quartz'),
        cost: '-'
    },
    {
        id: 188,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('graphite'),
        cost: '-'
    },
    {
        id: 189,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('sphalerite'),
        cost: '-'
    },
    {
        id: 190,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('ammonium'),
        cost: '-'
    },
    {
        id: 191,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('laterite'),
        cost: '-'
    },
    {
        id: 192,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 1,
                type: FavoriteType.Item
            },
        ],
        output: translate('malachite'),
        cost: '-'
    },
    {
        id: 193,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 3,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('wolframite'),
        cost: '-'
    },
    {
        id: 194,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 3,
                type: FavoriteType.Item
            },
        ],
        output: '2x ' + translate('hematite'),
        cost: '-'
    },
    {
        id: 195,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: translate('titanite'),
        cost: '-'
    },
    {
        id: 196,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 1,
                quantity: 2,
                type: FavoriteType.Item
            },
        ],
        output: translate('lithium'),
        cost: '-'
    },
    {
        id: 197,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: translate('exoChip'),
        cost: '-'
    },
    {
        id: 198,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: '4x ' + translate('packager'),
        cost: '-'
    },
    {
        id: 199,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 1,
                type: FavoriteType.Resource
            },
        ],
        output: '2x ' + translate('solidFuelJumpJet'),
        cost: '-'
    },
    {
        id: 200,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: '4x ' + translate('dynamite'),
        cost: '-'
    },
    {
        id: 201,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 3,
                type: FavoriteType.Resource
            },
        ],
        output: '4x ' + translate('hydrazine'),
        cost: '-'
    },
    {
        id: 202,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 8,
                type: FavoriteType.Resource
            },
        ],
        output: translate('sourcePortableSmeltingFurnace'),
        cost: '-'
    },
    {
        id: 203,
        printerId: 9,
        input: [
            {
                id: 1,
                listId: 2,
                quantity: 8,
                type: FavoriteType.Resource
            },
        ],
        output: translate('gravityGlobe'),
        cost: '-'
    }
]