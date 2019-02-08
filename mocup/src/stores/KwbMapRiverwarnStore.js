export default {
  namespaced: true,
  state: {
    isFillRiverLine: true,
    isFillTwn: true,
    // 河川ライン着色
    riverLines: [
      {
        id: 1,
        geojson: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [139.717546, 36.829499],
                  [139.504041, 36.176441],
                  [139.9, 35.5]
                ]
              },
              pproperties: {
                popupContent: "LineString"
              }
            }
          ]
        },
        optionsstyle: {
          weight: 5,
          color: "#ff0000"
        }
      },
      {
        id: 2,
        geojson: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [139.65, 36.64],
                  [139.86, 36.25],
                  [139.655, 36.11]
                ]
              },
              pproperties: {
                popupContent: "LineString"
              }
            }
          ]
        },
        optionsstyle: {
          weight: 5,
          color: "#ffff00"
        }
      },
      {
        id: 3,
        geojson: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [139.35, 36.64],
                  [139.06, 36.25],
                  [139.455, 36.11]
                ]
              },
              pproperties: {
                popupContent: "LineString"
              }
            }
          ]
        },
        optionsstyle: {
          weight: 5,
          color: "#dd00dd"
        }
      },
      {
        id: 4,
        geojson: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [138.85, 36.64],
                  [138.76, 36.25],
                  [138.655, 36.11]
                ]
              },
              pproperties: {
                popupContent: "LineString"
              }
            }
          ]
        },
        optionsstyle: {
          weight: 5,
          color: "#ffa500"
        }
      }
    ],

    // 市町村着色
    townPolygons: [
      {
        twnCd: 10001,
        latlngs: [
          // [35.857428, 139.648933],
          // [35.605058, 140.123308],
          // [35.689521, 139.691704],
          // [35.447753, 139.642514],
          // [35.857428, 139.648933]
          [36.800654865, 139.99326],
          [36.741107586, 140.066612892],
          [36.681071694, 140.030085032],
          [36.666666667, 139.953066589],
          [36.720294613, 139.933383061],
          [36.747196802, 139.962362698],
          [36.769320694, 139.983343891],
          [36.800654865, 139.99326]
        ],

        // Path class options
        color: "#dddd00",
        fillColor: "#ffff80",
        fillOpacity: 0.8,
        opacity: 0.8,
        weight: 3
      },
      {
        twnCd: 10002,
        latlngs: [
          [36.726758279, 139.869489248],
          [36.616331414, 139.969812802],
          [36.518508694, 140.009905084],
          [36.47789364, 139.901191051],
          [36.596796775, 139.777704747],
          [36.675888946, 139.786883606],
          [36.706487775, 139.829448301],
          [36.726758279, 139.869489248]
        ],

        // Path class options
        color: "#dddd00",
        fillColor: "#ffff80",
        fillOpacity: 0.8,
        opacity: 0.8,
        weight: 3
      }
    ]
  },
  mutations: {
    showRiverLine(state) {
      state.isFillRiverLine = true;
    },
    hideRiverLine(state) {
      state.isFillRiverLine = false;
    },
    showTwnArea(state) {
      state.isFillTwn = true;
    },
    hideTwnArea(state) {
      state.isFillTwn = false;
    }
  }
};
