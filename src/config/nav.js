const navList = [
  {
    label: 'Shape',
    value: 'shape',
  },
  {
    label: 'Size',
    value: 'size',
  },
  {
    label: 'Color',
    children: [
      {
        label: 'Default',
        value: 'color-default',
      },
      {
        label: 'Dark',
        value: 'color-dark',
      },
    ],
  },
  {
    label: 'Font',
    value: 'font',
  },
  {
    label: 'Layout',
    value: 'layout',
  },
];

export default navList;
