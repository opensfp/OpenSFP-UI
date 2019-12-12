import { fillSheetData } from '@/utils';

const EEPROMs = fillSheetData(8, 16, '00');

const state = {
  moduleType: 'SFP',
  addressTable: 'A0h [00-7F]',
  EEPROMs,
};

const mutations = {
  changeModuleType(state, type) {
    state.moduleType = type;
  },
  changeAddressTable(state, address) {
    state.addressTable = address;
  },
  changeEEPROMs(state, data) {
    state.data = data;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
