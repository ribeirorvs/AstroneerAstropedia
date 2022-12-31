import { translate } from '../libs/localization';

export const mediumPrinterList = [
    {
        input: ['3x ' + translate('compound')],
        output: translate('largePrinter'),
        cost: translate('unlocked')
    },
    {
        input: [
            '2x ' + translate('resin'),
            '\n',
            translate('compound')
        ],
        output: translate('smeltingFurnace'),
        cost: '250 Bytes'
    },
    {
        input: [translate('aluminum'), '\n', '2x ' + translate('compound')],
        output: translate('soilCentrifuge'),
        cost: '750 Bytes'
    },
    {
        input: [
            translate('tungsten'),
            '\n',
            translate('glass'),
            '\n',
            translate('ceramic')
        ],
        output: translate('chemistryLab'),
        cost: '1.600 Bytes'
    },
    {
        input: [
            translate('iron'),
            '\n',
            translate('glass'),
            '\n',
            translate('plastic')
        ],
        output: translate('atmosphericCondenser'),
        cost: '2.200 Bytes'
    },
    {
        input: [
            translate('resin'),
            '\n',
            '2x ' + translate('compound')
        ],
        output: translate('researchChamber'),
        cost: translate('unlocked')
    },
    {
        input: [
            '2x ' + translate('resin'),
            '\n',
            translate('ceramic')
        ],
        output: translate('exoRequestPlatform'),
        cost: translate('unlocked')
    },
    {
        input: [
            translate('exoChip'),
            '\n',
            translate('tungsten'),
            '\n',
            translate('iron')
        ],
        output: translate('tradePlatform'),
        cost: '2.500 Bytes'
    },
    {
        input: [
            translate('iron'),
            '\n',
            translate('sourceTungstenCarbide'),
            '\n',
            translate('exoChip')
        ],
        output: translate('largeShredder'),
        cost: '2.500 Bytes'
    },
    {
        input: [
            translate('sourceAluminumAlloy'),
            '\n',
            translate('glass'),
            '\n',
            translate('ceramic')
        ],
        output: translate('largeSolarPanel'),
        cost: '4.000 Bytes'
    },
    {
        input: [
            translate('sourceAluminumAlloy'),
            '\n',
            translate('glass'),
            '\n',
            translate('ceramic')
        ],
        output: translate('largeWindTurbine'),
        cost: '3.500 Bytes'
    },
    {
        input: ['2x ' + translate('resin')],
        output: translate('largePlatformA'),
        cost: translate('unlocked')
    },
    {
        input: ['3x ' + translate('resin')],
        output: translate('largePlatformB'),
        cost: '500 Bytes'
    },
    {
        input: [
            translate('resin'),
            '\n',
            translate('iron'),
            '\n',
            translate('ceramic')
        ],
        output: translate('largePlatformC'),
        cost: '1.000 Bytes'
    },
    {
        input: [
            '2x ' + translate('aluminum'),
            '\n',
            translate('resin')
        ],
        output: translate('largeTPlatform'),
        cost: '1.000 Bytes'
    },
    {
        input: [
            '2x ' + translate('ceramic'),
            '\n',
            translate('compound')
        ],
        output: translate('largeCurvedPlatform'),
        cost: '1.000 Bytes'
    },
    {
        input: ['2x ' + translate('resin')],
        output: translate('largeExtendedPlatform'),
        cost: '500 Bytes'
    },
    {
        input: [
            translate('glass'),
            '\n',
            translate('titanium'),
            '\n',
            translate('sourceNanocarbonAlloy')
        ],
        output: translate('largeResourceCanister'),
        cost: '5.000 Bytes'
    },
    {
        input: ['3x ' + translate('ceramic')],
        output: translate('largeStorage'),
        cost: '2.000 Bytes'
    },
    {
        input: [
            '2x ' + translate('aluminum'),
            '\n',
            translate('steel')
        ],
        output: translate('largeStorageSiloA'),
        cost: '5.000 Bytes'
    },
    {
        input: ['3x ' + translate('steel')],
        output: translate('largeStorageSiloB'),
        cost: '7.500 Bytes'
    },
    {
        input: [
            translate('zinc'),
            '\n',
            translate('aluminum'),
            '\n',
            translate('resin')
        ],
        output: translate('largeActiveStorage'),
        cost: '2.000 Bytes'
    },
    {
        input: [
            translate('aluminum'),
            '\n',
            translate('compound')
        ],
        output: translate('buggy'),
        cost: '1.500 Bytes'
    },
    {
        input: [
            translate('compound'),
            '\n',
            '2x ' + translate('plastic')
        ],
        output: translate('largeRoverSeat'),
        cost: '2.000 Bytes'
    },
    {
        input: [
            translate('rubber'),
            '\n',
            '2x ' + translate('plastic')
        ],
        output: translate('mediumRover'),
        cost: '3.750 Bytes'
    },
    {
        input: [
            translate('titanium'),
            '\n',
            translate('silicone'),
            '\n',
            translate('steel')
        ],
        output: translate('crane'),
        cost: '4.500 Bytes'
    },
    {
        input: [
            translate('steel'),
            '\n',
            translate('rubber'),
            '\n',
            translate('plastic')
        ],
        output: translate('largeFogHorn'),
        cost: '4.000 Bytes'
    },
    {
        input: [
            translate('exoChip'),
            '\n',
            translate('sourceTungstenCarbide'),
            '\n',
            translate('silicone')
        ],
        output: translate('sourceVtol'),
        cost: 'Unlocked via mission'
    },
    {
        input: [
            translate('rubber'),
            '\n',
            translate('sourceAluminumAlloy')
        ],
        output: translate('recreationalSphere'),
        cost: '4.500 Bytes'
    }
]