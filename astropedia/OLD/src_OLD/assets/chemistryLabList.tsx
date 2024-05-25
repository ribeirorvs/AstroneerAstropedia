import { translate } from '../libs/localization';

export const chemistryLabList = [
    {
        input: [
            translate('organic'),
            '\n',
            translate('resin')
        ],
        output: translate('rubber'),
        cost: '-'
    },
    {
        input: [
            translate('compound'),
            '\n',
            translate('carbon')
        ],
        output: translate('plastic'),
        cost: '-'
    },
    {
        input: [
            translate('aluminum'),
            '\n',
            translate('copper')
        ],
        output: translate('sourceAluminumAlloy'),
        cost: '-'
    },
    {
        input: [
            translate('carbon'),
            '\n',
            translate('tungsten')
        ],
        output: translate('sourceTungstenCarbide'),
        cost: '-'
    },
    {
        input: [
            translate('graphite'),
            '\n',
            translate('hydrazine')
        ],
        output: translate('graphene'),
        cost: '-'
    },
    {
        input: [
            '2x ' + translate('graphite'),
        ],
        output: translate('diamond'),
        cost: '-'
    },
    {
        input: [
            '2x ' + translate('ammonium'),
            '\n',
            translate('hydrogen')
        ],
        output: translate('hydrazine'),
        cost: '-'
    },
    {
        input: [
            translate('resin'),
            '\n',
            translate('quartz'),
            '\n',
            translate('methane')
        ],
        output: translate('silicone'),
        cost: '-'
    },
    {
        input: [
            '2x ' + translate('carbon'),
            '\n',
            translate('sulfur')
        ],
        output: translate('sourceExplosivePowder'),
        cost: '-'
    },
    {
        input: [
            translate('carbon'),
            '\n',
            translate('iron'),
            '\n',
            translate('argon')
        ],
        output: translate('steel'),
        cost: '-'
    },
    {
        input: [
            translate('titanium'),
            '\n',
            translate('graphene'),
            '\n',
            translate('nitrogen')
        ],
        output: translate('titaniumAlloy'),
        cost: '-'
    },
    {
        input: [
            translate('steel'),
            '\n',
            translate('titaniumAlloy'),
            '\n',
            translate('helium')
        ],
        output: translate('sourceNanocarbonAlloy'),
        cost: '-'
    },
]