import { translate } from '../libs/localization';

export type PrinterOutputListDataProps  = (typeof PrinterOutputList)[0]

export const PrinterOutputList = [
    {
        id: 1,
        printerId: 1,
        input: [translate('compound')],
        output: translate('smallPrinter'),
        cost: 'Unlocked'
    },
    {
        id: 2,
        printerId: 1,
        input: [translate('graphite')],
        output: translate('packager'),
        cost: '1.000 Bytes'
    },
    {
        id: 3,
        printerId: 1,
        input: [translate('smallCanister') + ' (' + translate('full') + ')'],
        output: translate('levelingBlock'),
        cost: '500 Bytes'
    },
    {
        id: 4,
        printerId: 1,
        input: [translate('compound')],
        output: translate('tether'),
        cost: 'Unlocked'
    },
    {
        id: 5,
        printerId: 1,
        input: [translate('resin')],
        output: translate('oxygenFilter'),
        cost: 'Unlocked'
    },
    {
        id: 6,
        printerId: 1,
        input: [translate('glass')],
        output: translate('oxygenTank'),
        cost: '2.000 Bytes'
    },
    {
        id: 7,
        printerId: 1,
        input: [translate('nanocarbonAlloy')],
        output: translate('portableOxygenator'),
        cost: '10.000 Bytes'
    },
    {
        id: 8,
        printerId: 1,
        input: [translate('resin')],
        output: translate('smallCanister'),
        cost: translate('unlocked')
    },
    {
        id: 9,
        printerId: 1,
        input: [translate('quartz')],
        output: translate('beacon'),
        cost: translate('unlocked')
    },
    {
        id: 10,
        printerId: 1,
        input: [translate('copper')],
        output: translate('worklight'),
        cost: translate('unlocked')
    },
    {
        id: 11,
        printerId: 1,
        input: [translate('organic')],
        output: translate('glowsticks'),
        cost: '350 Bytes'
    },
    {
        id: 12,
        printerId: 1,
        input: [translate('tungsten')],
        output: translate('floodlight'),
        cost: '2.000 Bytes'
    },
    {
        id: 13,
        printerId: 1,
        input: [translate('compound')],
        output: translate('smallGenerator'),
        cost: translate('unlocked')
    },
    {
        id: 14,
        printerId: 1,
        input: [translate('graphite')],
        output: translate('powerCells'),
        cost: '800 Bytes'
    },
    {
        id: 15,
        printerId: 1,
        input: [translate('copper')],
        output: translate('smallSolarPanel'),
        cost: '300 Bytes'
    },
    {
        id: 16,
        printerId: 1,
        input: [translate('ceramic')],
        output: translate('smallWindTurbine'),
        cost: '300 Bytes'
    },
    {
        id: 17,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('smallBattery'),
        cost: '2.000 Bytes'
    },
    {
        id: 18,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('boostMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 19,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('wideMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 20,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('narrowMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 21,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('inhibitorMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 22,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('alignmentMod'),
        cost: '1.000 Bytes'
    },
    {
        id: 23,
        printerId: 1,
        input: [translate('ceramic')],
        output: translate('drillMod1'),
        cost: '1.000 Bytes'
    },
    {
        id: 24,
        printerId: 1,
        input: [translate('tungstenCarbide')],
        output: translate('drillMod2'),
        cost: '2.500 Bytes'
    },
    {
        id: 25,
        printerId: 1,
        input: [translate('diamond')],
        output: translate('drillMod3'),
        cost: '3.750 Bytes'
    },
    {
        id: 26,
        printerId: 1,
        input: [translate('explosivePowder')],
        output: translate('dynamite'),
        cost: '3.750 Bytes'
    },
    {
        id: 27,
        printerId: 1,
        input: [translate('explosivePowder')],
        output: translate('fireworks'),
        cost: '3.750 Bytes'
    },
    {
        id: 28,
        printerId: 1,
        input: [translate('exoChip')],
        output: translate('smallCamera'),
        cost: '2.500 Bytes'
    },
    {
        id: 29,
        printerId: 1,
        input: [translate('plastic')],
        output: translate('smallTrumpetHorn'),
        cost: '1.000 Bytes'
    },
    {
        id: 30,
        printerId: 1,
        input: [translate('plastic')],
        output: translate('holographicFigurine'),
        cost: '3.000 Bytes'
    },
    {
        id: 31,
        printerId: 1,
        input: [translate('zinc')],
        output: translate('terrainAnalyzer'),
        cost: '2.000 Bytes'
    },
    {
        id: 32,
        printerId: 1,
        input: [translate('steel')],
        output: translate('probeScanner'),
        cost: '4.000 Bytes'
    },
    {
        id: 33,
        printerId: 1,
        input: [translate('aluminumAlloy')],
        output: translate('solidFuelJumpJet'),
        cost: '5.000 Bytes'
    },
    {
        id: 34,
        printerId: 1,
        input: [translate('titaniumAlloy')],
        output: translate('hydrazineJetPack'),
        cost: '15.000 Bytes'
    },
    {
        id: 35,
        printerId: 1,
        input: [translate('exoChip')],
        output: translate('hoverboard'),
        cost: 'Unloked via missions'
    }
]