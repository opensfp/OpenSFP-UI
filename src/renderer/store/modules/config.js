const state = {
  moduleTypes: ['SFP'],
  addresses: {
    SFP: {
      'A0h [00-7F]': {
        start: '00',
        end: '7F',
        rowHeaders: [
          '00h',
          '10h',
          '20h',
          '30h',
          '40h',
          '50h',
          '60h',
          '70h',
        ],
      },
      'A0h [80-FF]': {
        start: '80',
        end: 'FF',
        rowHeaders: [
          '80h',
          '90h',
          'A0h',
          'B0h',
          'C0h',
          'D0h',
          'E0h',
          'F0h',
        ],
      },
      'A2h [00-7F]': {
        start: '00',
        end: '7F',
        rowHeaders: [
          '00h',
          '10h',
          '20h',
          '30h',
          '40h',
          '50h',
          '60h',
          '70h',
        ],
      },
      'A2h [80-FF]': {
        start: '80',
        end: 'FF',
        rowHeaders: [
          '80h',
          '90h',
          'A0h',
          'B0h',
          'C0h',
          'D0h',
          'E0h',
          'F0h',
        ],
      },
    },
  },
  colHeaders: [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '0A',
    '0B',
    '0C',
    '0D',
    '0E',
    '0F',
  ],
};

const mutations = {

};

const actions = {

};

export default {
  state,
  mutations,
  actions,
};
