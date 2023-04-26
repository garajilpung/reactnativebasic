/* eslint-disable no-array-constructor */
const ListData = [
  {
    title: 'Basic',
    data: [
      {title: 'LotsOfStyles', id: 'LotsOfStyles', desc: 'desc'},
      {title: 'PropsAndState', id: 'PropsAndState', desc: 'Props & useState'},
    ],
  },
  {
    title: 'Design',
    data: [
      {
        title: 'FixedDimentions',
        id: 'FixedDimentions',
        desc: 'FixedDimentions',
      },
      {
        title: 'FlexDimensions',
        id: 'FlexDimensions',
        desc: 'FlexDimensions',
      },
      {
        title: 'PercentageDimensions',
        id: 'PercentageDimensions',
        desc: 'PercentageDimensions',
      },
      {
        title: 'Flex',
        id: 'Flex',
        desc: 'Flex',
      },
      {
        title: 'FlexDirection',
        id: 'FlexDirection',
        desc: 'FlexDirection',
      },
      {
        title: 'LayoutDirection',
        id: 'LayoutDirection',
        desc: 'LayoutDirection',
      },
      {
        title: 'JustifyContent',
        id: 'JustifyContent',
        desc: 'JustifyContent',
      },
      {
        title: 'AlignItemLayout',
        id: 'AlignItemLayout',
        desc: 'AlignItemLayout',
      },
      {
        title: 'AlignSelfLayout',
        id: 'AlignSelfLayout',
        desc: 'AlignSelfLayout',
      },
      {
        title: 'AlignContentLayout',
        id: 'AlignContentLayout',
        desc: 'AlignContentLayout',
      },
      {
        title: 'FlexWrapLayout',
        id: 'FlexWrapLayout',
        desc: 'FlexWrapLayout',
      },
      {
        title: 'FlexGrowShrinkLayout',
        id: 'FlexGrowShrinkLayout',
        desc: 'FlexGrowShrinkLayout',
      },
      {
        title: 'RowGapAndColumnGap',
        id: 'RowGapAndColumnGap',
        desc: 'RowGapAndColumnGap',
      },
      {
        title: 'WidthHeightBasics',
        id: 'WidthHeightBasics',
        desc: 'WidthHeightBasics',
      },
      {
        title: 'PositionLayout',
        id: 'PositionLayout',
        desc: 'PositionLayout',
      },
      {
        title: 'ImageView',
        id: 'ImageView',
        desc: 'ImageView',
      },
      {
        title: 'ButtonBasics',
        id: 'ButtonBasics',
        desc: 'ButtonBasics',
      },
      {
        title: 'Touchalbes',
        id: 'Touchalbes',
        desc: 'Touchalbes',
      },
      {
        title: 'AniView',
        id: 'AniView',
        desc: 'AniView',
      },
      {
        title: 'GestureAction',
        id: 'GestureAction',
        desc: 'GestureAction',
      },
      {
        title: 'TimerExample',
        id: 'TimerExample',
        desc: 'TimerExample',
      },
      {
        title: 'NativeModuleiOS',
        id: 'NativeModuleiOS',
        desc: 'NativeModuleiOS',
      },
    ],
  },
  {
    title: 'Drinks',
    data: [
      {title: 'Water', id: 'Water', desc: 'desc'},
      {title: 'Coke', id: 'Coke', desc: 'desc'},
      {title: 'Beer', id: 'Beer', desc: 'desc'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {title: 'Cheese Cake', id: 'Cheese Cake', desc: 'desc'},
      {title: 'Ice Cream', id: 'Ice Cream', desc: 'desc'},
    ],
  },
];

const ListComponent = [
  'LotsOfStyles',
  'PropsAndState',
  'FixedDimentions',
  'FlexDimensions',
  'PercentageDimensions',
];

var ListComponents: string[] = [];

function makeListComponents() {
  ListData.forEach(el => el.data.forEach(e => ListComponents.push(e.id)));
}

export {ListData, ListComponent, ListComponents, makeListComponents};
