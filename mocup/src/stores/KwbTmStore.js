export default {
  namespaced: true,
  state: {
    selectedObs: {
      obsFcd: null,
      itmkndCd: null
    },
    obsTypeOnDetailTab: "",
    obsDetail: {
      common: {
        obsName: "",
        rsysName: "",
        rvrName: "",
        obsKana: "",
        rsysKana: "",
        rvrKana: "",
        manager: "",
        lonlat: "",
        address: "",
        zeroHigh: 0
      },
      qwtr: {
        spec: {
          phLolmt: 6.5,
          phUplmt: 8.5,
          doxLolmt: 7.5,
          codUplmt: null
        },
        current: {
          min10: {},
          hour: {
            obsTime: "2019/01/15 13:00",
            tmp: 6.6,
            ph: 8.6,
            do: 14.3,
            conduct: 31.1,
            turbdty: 14.2,
            amn: null,
            slt: null,
            cod: 4.1
          }
        },
        history: {
          min10: [],
          hour: [
            {
              obsTime: "2019/01/15 12:00",
              tmp: 6.3,
              ph: 8.5,
              do: 14.2,
              conduct: 31.1,
              turbdty: 13.8,
              amn: null,
              slt: null,
              cod: 4.1
            },
            {
              obsTime: "2019/01/15 11:00",
              tmp: 6.4,
              ph: 8.5,
              do: 14.3,
              conduct: 31.1,
              turbdty: 15.2,
              amn: null,
              slt: null,
              cod: 3.9
            },
            {
              obsTime: "2019/01/15 10:00",
              tmp: 6.2,
              ph: 8.3,
              do: 14.0,
              conduct: 31.1,
              turbdty: 15.0,
              amn: null,
              slt: null,
              cod: 3.8
            },
            {
              obsTime: "2019/01/15 12:00",
              tmp: 6.3,
              ph: 8.5,
              do: 14.2,
              conduct: 31.1,
              turbdty: 13.8,
              amn: null,
              slt: null,
              cod: 4.1
            },
            {
              obsTime: "2019/01/15 11:00",
              tmp: 6.4,
              ph: 8.5,
              do: 14.3,
              conduct: 31.1,
              turbdty: 15.2,
              amn: null,
              slt: null,
              cod: 3.9
            },
            {
              obsTime: "2019/01/15 10:00",
              tmp: 6.2,
              ph: 8.3,
              do: 14.0,
              conduct: 31.1,
              turbdty: 15.0,
              amn: null,
              slt: null,
              cod: 3.8
            },
            {
              obsTime: "2019/01/15 12:00",
              tmp: 6.3,
              ph: 8.5,
              do: 14.2,
              conduct: 31.1,
              turbdty: 13.8,
              amn: null,
              slt: null,
              cod: 4.1
            },
            {
              obsTime: "2019/01/15 11:00",
              tmp: 6.4,
              ph: 8.5,
              do: 14.3,
              conduct: 31.1,
              turbdty: 15.2,
              amn: null,
              slt: null,
              cod: 3.9
            },
            {
              obsTime: "2019/01/15 10:00",
              tmp: 6.2,
              ph: 8.3,
              do: 14.0,
              conduct: 31.1,
              turbdty: 15.0,
              amn: null,
              slt: null,
              cod: 3.8
            },
            {
              obsTime: "2019/01/15 12:00",
              tmp: 6.3,
              ph: 8.5,
              do: 14.2,
              conduct: 31.1,
              turbdty: 13.8,
              amn: null,
              slt: null,
              cod: 4.1
            },
            {
              obsTime: "2019/01/15 10:00",
              tmp: 6.2,
              ph: 8.3,
              do: 14.0,
              conduct: 31.1,
              turbdty: 15.0,
              amn: null,
              slt: null,
              cod: 3.8
            },
            {
              obsTime: "2019/01/15 12:00",
              tmp: 6.3,
              ph: 8.5,
              do: 14.2,
              conduct: 31.1,
              turbdty: 13.8,
              amn: null,
              slt: null,
              cod: 4.1
            }
          ]
        }
      },
      coast: {
        spec: {
          wvHghtCaut: null,
          wvHghtWarn: null,
          tidlvlCaut: 3.0,
          tidlvlWarn: 2.5,
          wndSpdCaut: null,
          wndSpdWarn: null
        },
        current: {
          min10: {},
          hour: {
            obsTime: "2019/01/15 18:00",
            maxwvHght: 2.75,
            maxwvCycl: 6.7,
            onthwvHght: 1.79,
            onthwvCycl: 6.4,
            tidlvl: null,
            avewndSpd: 5.9,
            avewndDir: 15
          }
        },
        history: {
          min10: [],
          hour: [
            {
              obsTime: "2019/01/15 18:00",
              maxwvHght: 2.75,
              maxwvCycl: 6.7,
              onthwvHght: 1.79,
              onthwvCycl: 6.4,
              tidlvl: null,
              avewndSpd: 5.9,
              avewndDir: 15
            },
            {
              obsTime: "2019/01/15 17:00",
              maxwvHght: 2.75,
              maxwvCycl: 7.5,
              onthwvHght: 1.65,
              onthwvCycl: 6.2,
              tidlvl: null,
              avewndSpd: 6.0,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 16:00",
              maxwvHght: 2.87,
              maxwvCycl: 7.5,
              onthwvHght: 1.75,
              onthwvCycl: 6.2,
              tidlvl: null,
              avewndSpd: 5.7,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 15:00",
              maxwvHght: 2.66,
              maxwvCycl: 5.3,
              onthwvHght: 1.65,
              onthwvCycl: 6.2,
              tidlvl: null,
              avewndSpd: 5.6,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 14:00",
              maxwvHght: 2.91,
              maxwvCycl: 6.1,
              onthwvHght: 1.56,
              onthwvCycl: 6.2,
              tidlvl: null,
              avewndSpd: 4.8,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 13:00",
              maxwvHght: 2.59,
              maxwvCycl: 5.1,
              onthwvHght: 1.52,
              onthwvCycl: 6.0,
              tidlvl: null,
              avewndSpd: 5.5,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 12:00",
              maxwvHght: 4.01,
              maxwvCycl: 7.9,
              onthwvHght: 2.05,
              onthwvCycl: 7.2,
              tidlvl: null,
              avewndSpd: 5.9,
              avewndDir: 16
            },
            {
              obsTime: "2019/01/15 11:00",
              maxwvHght: 3.36,
              maxwvCycl: 5.6,
              onthwvHght: 2.32,
              onthwvCycl: 7.8,
              tidlvl: null,
              avewndSpd: 8.2,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 10:00",
              maxwvHght: 3.93,
              maxwvCycl: 8.2,
              onthwvHght: 2.41,
              onthwvCycl: 8.2,
              tidlvl: null,
              avewndSpd: 6.1,
              avewndDir: 14
            },
            {
              obsTime: "2019/01/15 09:00",
              maxwvHght: 4.03,
              maxwvCycl: 9.1,
              onthwvHght: 2.29,
              onthwvCycl: 8.5,
              tidlvl: null,
              avewndSpd: 2.1,
              avewndDir: 11
            },
            {
              obsTime: "2019/01/15 08:00",
              maxwvHght: 3.61,
              maxwvCycl: 9.4,
              onthwvHght: 2.28,
              onthwvCycl: 8.5,
              tidlvl: null,
              avewndSpd: 0.9,
              avewndDir: 10
            },
            {
              obsTime: "2019/01/15 07:00",
              maxwvHght: 3.77,
              maxwvCycl: 9.5,
              onthwvHght: 2.31,
              onthwvCycl: 8.6,
              tidlvl: null,
              avewndSpd: 3.3,
              avewndDir: 12
            },
            {
              obsTime: "2019/01/15 06:00",
              maxwvHght: 3.23,
              maxwvCycl: 8.8,
              onthwvHght: 1.99,
              onthwvCycl: 8.1,
              tidlvl: null,
              avewndSpd: 5.2,
              avewndDir: 13
            },
            {
              obsTime: "2019/01/15 05:00",
              maxwvHght: 3.23,
              maxwvCycl: 9.2,
              onthwvHght: 2.08,
              onthwvCycl: 8.8,
              tidlvl: null,
              avewndSpd: 1.4,
              avewndDir: 9
            },
            {
              obsTime: "2019/01/15 04:00",
              maxwvHght: 3.22,
              maxwvCycl: 8.4,
              onthwvHght: 1.75,
              onthwvCycl: 7.7,
              tidlvl: null,
              avewndSpd: 1.6,
              avewndDir: 11
            },
            {
              obsTime: "2019/01/15 03:00",
              maxwvHght: 2.31,
              maxwvCycl: 7.1,
              onthwvHght: 1.54,
              onthwvCycl: 7.3,
              tidlvl: null,
              avewndSpd: 4.0,
              avewndDir: 13
            },
            {
              obsTime: "2019/01/15 02:00",
              maxwvHght: 2.14,
              maxwvCycl: 7.7,
              onthwvHght: 1.42,
              onthwvCycl: 8.3,
              tidlvl: null,
              avewndSpd: 1.2,
              avewndDir: 9
            },
            {
              obsTime: "2019/01/15 01:00",
              maxwvHght: 1.76,
              maxwvCycl: 8.1,
              onthwvHght: 1.15,
              onthwvCycl: 7.7,
              tidlvl: null,
              avewndSpd: 1.4,
              avewndDir: 8
            },
            {
              obsTime: "2019/01/14 24:00",
              maxwvHght: 1.86,
              maxwvCycl: 7.8,
              onthwvHght: 1.05,
              onthwvCycl: 7.8,
              tidlvl: null,
              avewndSpd: 1.1,
              avewndDir: 9
            },
            {
              obsTime: "2019/01/14 23:00",
              maxwvHght: 2.27,
              maxwvCycl: 7.1,
              onthwvHght: 1.03,
              onthwvCycl: 7.4,
              tidlvl: null,
              avewndSpd: 0.4,
              avewndDir: 10
            }
          ]
        }
      },
      dam: {
        spec: {
          storCapBs: 0,
          storPcntBs: 0,
          allDischBs: 0,
          storPcntEffBs: 0
        },
        current: {
          min10: {
            obsTime: "2019/01/15 18:20",
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0,
            storLvl: 972.06,
            storCap: 6330,
            storPcntIrr: 87.7,
            storPcntImp: null,
            allSink: 4.75,
            allDisch: 13.31,
            storPcntEff: null
          },
          hour: {
            obsTime: "2019/01/15 18:00",
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0,
            storLvl: 972.06,
            storCap: 6330,
            storPcntIrr: 87.7,
            storPcntImp: null,
            allSink: 4.75,
            allDisch: 13.31,
            storPcntEff: null
          }
        },
        history: {
          min10: [
            {
              obsTime: "2019/01/15 18:20",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 18:10",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 18:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:50",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:40",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:30",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:20",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:10",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 16:50",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            }
          ],
          hour: [
            {
              obsTime: "2019/01/15 18:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 17:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 16:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 15:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 14:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 13:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 12:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 11:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 10:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            },
            {
              obsTime: "2019/01/15 09:00",
              rn10m: 0,
              rnInc: 0,
              rnHr10m: 0,
              storLvl: 972.06,
              storCap: 6330,
              storPcntIrr: 87.7,
              storPcntImp: null,
              allSink: 4.75,
              allDisch: 13.31,
              storPcntEff: null
            }
          ]
        }
      }
    }
  },
  mutations: {
    setObsTypeOnDetailTab(state, detail) {
      state.obsTypeOnDetailTab = detail;
    },
    setCommon(state, title) {
      state.obsDetail.common.obsName = title.obsName;
      state.obsDetail.common.rsysName = title.rsysName;
      state.obsDetail.common.rvrName = title.rvrName;
      state.obsDetail.common.obsKana = title.obsKana;
      state.obsDetail.common.rsysKana = title.rsysKana;
      state.obsDetail.common.rvrKana = title.rvrKana;
      state.obsDetail.common.manager = title.manager;
      state.obsDetail.common.lonlat = title.lonlat;
      state.obsDetail.common.address = title.address;
    },
    setSelectedObs(state, itmkndCd) {
      state.selectedObs.itmkndCd = itmkndCd;
    }
  },
  actions: {
    focusStageObs() { },
    focusRainObs() { }
  },
  getters: {}
};
