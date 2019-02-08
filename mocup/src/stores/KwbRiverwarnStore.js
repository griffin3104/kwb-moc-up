// 河川予警報ストア

export default {
  namespaced: true,
  state: {
    // 概況画面・予警報詳細画面共通

    // 概況画面用 start --------------------------------------------------
    riverwarnList: {
      // アイコンボタンの値(河川：flood/ダム：dam/水防：fldctlparty)
      picked: "flood",
      // 地図種別(全国：Nationwide/地方：Region/都道府県：Prefectures)
      areatype: "Nationwide",
      // 地方／都道府県のエリアコード
      areaCd: "",
      // 地方のエリアコード
      areaCdReg: "",

      // 超過色彩
      imageOverColor: [],

      // 警報一覧情報 ー 河川
      fldfrs: [],
      // 警報一覧情報 ー ダム
      damdschs: [],
      // 警報一覧情報 ー 水防
      fldctls: []
    },
    riverwarnListMockData: {
      // 警報一覧情報 ー 全国版 ー 河川
      nationwide_flood_details: [
        {
          fldfr_id: 1,
          level: 5,
          rsysNm: "利根川水系", // 水系名
          fldfrNm: "鬼怒川", // 洪水予報区間名
          annTime: "9/11 6:40", // 発令時刻
          annNo: "7", // 発表番号
          fldfrKndNm: "氾濫発生情報発表", // 洪水予報種別名
          obss: [
            { obsFcd: 1, obsName: "鬼怒川水海道", lat: 36.0118, lon: 139.5906 },
            { obsFcd: 2, obsName: "石井(右)", lat: 36.3232, lon: 139.565 },
            { obsFcd: 3, obsName: "川島", lat: 36.1726, lon: 139.5441 },
            { obsFcd: 4, obsName: "佐貫(下)", lat: 36.4453, lon: 139.4805 }
          ], // 基準観測所
          prefs: [
            {
              prefCd: 33,
              prefNm: "茨城県",
              lat: 36.34139,
              lon: 140.44667,
              twns: [
                {
                  twnCd: 101,
                  twnNm: "結城市",
                  lat: 36.2620607,
                  lon: 139.7922012
                },
                {
                  twnCd: 102,
                  twnNm: "下妻市",
                  lat: 36.1886173,
                  lon: 139.9025558
                },
                {
                  twnCd: 103,
                  twnNm: "常総市",
                  lat: 36.0576918,
                  lon: 139.8914436
                },
                {
                  twnCd: 104,
                  twnNm: "守谷市",
                  lat: 35.9437125,
                  lon: 139.9410754
                },
                {
                  twnCd: 105,
                  twnNm: "筑西市",
                  lat: 36.2885368,
                  lon: 139.907782
                },
                {
                  twnCd: 106,
                  twnNm: "坂東市",
                  lat: 36.0629439,
                  lon: 139.8189688
                },
                {
                  twnCd: 107,
                  twnNm: "つくばみらい市",
                  lat: 35.9885775,
                  lon: 139.9724181
                },
                {
                  twnCd: 108,
                  twnNm: "八千代町",
                  lat: 36.1778547,
                  lon: 139.8274972
                }
              ]
            },
            {
              prefCd: 34,
              prefNm: "栃木県",
              lat: 36.56583,
              lon: 139.88361,
              twns: [
                {
                  twnCd: 201,
                  twnNm: "宇都宮市",
                  lat: 36.555112,
                  lon: 139.882807
                },
                { twnCd: 202, twnNm: "小山市", lat: 36.314671, lon: 139.800131 }
              ]
            }
          ], // 対象市区町村

          heading: "鬼怒川では、氾濫が発生しています" // 見出し
        },
        {
          fldfr_id: 2,
          level: 4,
          rsysNm: "酒匂川水系",
          fldfrNm: "浅水川",
          annTime: "9/11 7:25",
          annNo: "2",
          fldfrKndNm: "氾濫危険情報発表",
          obss: [],

          prefs: [
            {
              prefCd: 33,
              prefNm: "神奈川県",
              lat: 35.447753,
              lon: 139.642514,
              twns: [
                {
                  twnCd: 101,
                  twnNm: "小田原市",
                  lat: 35.264564,
                  lon: 139.152154
                },
                {
                  twnCd: 102,
                  twnNm: "足柄上郡松田町",
                  lat: 35.348159,
                  lon: 139.139375
                },
                {
                  twnCd: 103,
                  twnNm: "足柄上郡山北町",
                  lat: 35.360605,
                  lon: 139.083831
                }
              ]
            }
          ], // 対象市区町村

          heading:
            "酒匂川では、はん濫危険水位（レベル４）に到達し、はん濫のおそれあり"
        },
        {
          fldfr_id: 3,
          level: 3,
          rsysNm: "荒川水系",
          fldfrNm: "芝川",
          annTime: "9/10 22:25",
          annNo: "2",
          fldfrKndNm: "氾濫警戒情報発表",
          obss: [],

          prefs: [
            {
              prefCd: 33,
              prefNm: "埼玉県",
              lat: 35.857428,
              lon: 139.648933,
              twns: [
                { twnCd: 101, twnNm: "川口市", lat: 35.807738, lon: 139.724171 }
              ]
            }
          ], // 対象市区町村

          heading:
            "芝川では、当分の間、避難判断水位（レベル３）を超える水位が続く見込み"
        },
        {
          fldfr_id: 4,
          level: 1,
          rsysNm: "相模川水系",
          fldfrNm: "相模川",
          annTime: "9/11 7:25",
          annNo: "2",
          fldfrKndNm: "氾濫注意情報発表",
          obss: [],

          prefs: [
            {
              prefCd: 33,
              prefNm: "神奈川県",
              lat: 35.447753,
              lon: 139.642514,
              twns: [
                { twnCd: 101, twnNm: "藤沢市", lat: 35.33917, lon: 139.490036 },
                {
                  twnCd: 102,
                  twnNm: "茅ヶ崎市",
                  lat: 35.33386,
                  lon: 139.404716
                },
                {
                  twnCd: 103,
                  twnNm: "高座郡寒川町",
                  lat: 35.372956,
                  lon: 139.383861
                },
                {
                  twnCd: 104,
                  twnNm: "中群大磯町",
                  lat: 35.30685,
                  lon: 139.311314
                },
                { twnCd: 105, twnNm: "厚木市", lat: 35.443082, lon: 139.362489 }
              ]
            }
          ], // 対象市区町村

          heading:
            "相模川では、当分の間、はん濫注意水位（レベル２）を超える水位が続く見込み"
        }
      ],
      // 警報一覧情報 ー 全国版 ー ダム
      nationwide_dam_details: [
        {
          damdsch_id: 1,
          level: 5,
          damNm: "相俣ダム",
          rsysNm: "利根川水系",
          fldfrNm: "赤谷川",
          annTime: "9/11 6:40",
          annNo: "1",
          damdschKndNm: "放流開始の通知",

          prefs: [
            {
              prefCd: 33,
              prefNm: "栃木県",
              lat: 36.565725,
              lon: 139.883565,
              twns: [
                {
                  twnCd: 101,
                  twnNm: "宇都宮市",
                  lat: 36.555112,
                  lon: 139.882807
                },
                {
                  twnCd: 102,
                  twnNm: "小山市",
                  lat: 36.314671,
                  lon: 139.800131
                },
                {
                  twnCd: 103,
                  twnNm: "真岡市",
                  lat: 36.440419,
                  lon: 140.013442
                },
                {
                  twnCd: 104,
                  twnNm: "下野市",
                  lat: 36.387195,
                  lon: 139.841967
                },
                {
                  twnCd: 105,
                  twnNm: "上三川町",
                  lat: 36.439296,
                  lon: 139.909884
                }
              ]
            }
          ], // 対象市区町村

          heading:
            "釜房ダムでは、放流量を毎秒約２５０立方メートルから最大で毎秒５００立方メートルに増加させる予定です。"
        },
        {
          damdsch_id: 2,
          level: 5,
          damNm: "早明浦ダム",
          rsysNm: "",
          fldfrNm: "",
          annTime: "9/11 7:25",
          annNo: "4",
          damdschKndNm: "放流開始の通知",
          prefs: [],
          heading: "吉野川水系 吉野川"
        },
        {
          damdsch_id: 3,
          level: 3,
          damNm: "二瀬ダム",
          rsysNm: "",
          fldfrNm: "",
          annTime: "9/10 22:25",
          annNo: "2",
          damdschKndNm: "洪水警戒態勢の通知",
          prefs: [],
          heading: "荒川水系 荒川"
        },
        {
          damdsch_id: 4,
          level: 3,
          damNm: "川俣ダム",
          rsysNm: "",
          fldfrNm: "",
          annTime: "9/11 7:25",
          annNo: "2",
          damdschKndNm: "洪水警戒体制の通知",
          prefs: [],
          heading: "利根川水系 鬼怒川"
        }
      ],
      // 警報一覧情報 ー 全国版 ー 水防
      nationwide_fldctlparty_details: [
        {
          fldctl_id: 1,
          level: 4,
          rsysNm: "菊川水系",
          fldfrNm: "牛淵川(横地)",
          annTime: "9/11 6:40",
          annNo: "1",
          fldctlNm: "水防警報（出動）",
          obss: [],
          prefs: [],
          heading:
            "牛淵川の横地水位観測所（菊川市)の水位は、21日11時20分現在2.34mです。 牛淵川の横地水位観測所（菊川市)の水位は、避難判断水位に達し、上昇しています。"
        }
      ],
      // 警報一覧情報 ー 地方版 ー 河川
      region_flood_details: [
        {
          fldfr_id: 1,
          level: 5,
          rsysNm: "利根川水系",
          fldfrNm: "鬼怒川",
          annTime: "9/11 6:40",
          annNo: "7",
          fldfrKndNm: "氾濫発生情報発表",
          obss: [
            { obsFcd: 1, obsName: "鬼怒川水海道", lat: 36.0118, lon: 139.5906 },
            { obsFcd: 2, obsName: "石井(右)", lat: 36.3232, lon: 139.565 },
            { obsFcd: 3, obsName: "川島", lat: 36.1726, lon: 139.5441 },
            { obsFcd: 4, obsName: "佐貫(下)", lat: 36.4453, lon: 139.4805 }
          ],

          prefs: [
            {
              prefCd: 33,
              prefNm: "茨城県",
              lat: 36.34139,
              lon: 140.44667,
              twns: [
                {
                  twnCd: 101,
                  twnNm: "結城市",
                  lat: 36.2620607,
                  lon: 139.7922012
                },
                {
                  twnCd: 102,
                  twnNm: "下妻市",
                  lat: 36.1886173,
                  lon: 139.9025558
                },
                {
                  twnCd: 103,
                  twnNm: "常総市",
                  lat: 36.0576918,
                  lon: 139.8914436
                },
                {
                  twnCd: 104,
                  twnNm: "守谷市",
                  lat: 35.9437125,
                  lon: 139.9410754
                },
                {
                  twnCd: 105,
                  twnNm: "筑西市",
                  lat: 36.2885368,
                  lon: 139.907782
                },
                {
                  twnCd: 106,
                  twnNm: "坂東市",
                  lat: 36.0629439,
                  lon: 139.8189688
                },
                {
                  twnCd: 107,
                  twnNm: "つくばみらい市",
                  lat: 35.9885775,
                  lon: 139.9724181
                },
                {
                  twnCd: 108,
                  twnNm: "八千代町",
                  lat: 36.1778547,
                  lon: 139.8274972
                }
              ]
            },
            {
              prefCd: 34,
              prefNm: "栃木県",
              lat: 36.56583,
              lon: 139.88361,
              twns: [
                {
                  twnCd: 201,
                  twnNm: "宇都宮市",
                  lat: 36.555112,
                  lon: 139.882807
                },
                { twnCd: 202, twnNm: "小山市", lat: 36.314671, lon: 139.800131 }
              ]
            }
          ], // 対象市区町村
          heading: "鬼怒川では、氾濫が発生しています"
        },
        {
          fldfr_id: 2,
          level: 4,
          rsysNm: "酒匂川水系",
          fldfrNm: "浅水川",
          annTime: "9/11 7:25",
          annNo: "2",
          fldfrKndNm: "氾濫危険情報発表",
          obss: [],

          prefs: [
            {
              prefCd: 33,
              prefNm: "神奈川県",
              lat: 35.447753,
              lon: 139.642514,
              twns: [
                {
                  twnCd: 101,
                  twnNm: "小田原市",
                  lat: 35.264564,
                  lon: 139.152154
                },
                {
                  twnCd: 102,
                  twnNm: "足柄上郡松田町",
                  lat: 35.348159,
                  lon: 139.139375
                },
                {
                  twnCd: 103,
                  twnNm: "足柄上郡山北町",
                  lat: 35.360605,
                  lon: 139.083831
                }
              ]
            }
          ], // 対象市区町村

          heading:
            "酒匂川では、はん濫危険水位（レベル４）に到達し、はん濫のおそれあり"
        },
        {
          fldfr_id: 3,
          level: 3,
          rsysNm: "荒川水系",
          fldfrNm: "芝川",
          annTime: "9/10 22:25",
          annNo: "2",
          fldfrKndNm: "氾濫警戒情報発表",
          obss: [],

          prefs: [
            {
              prefCd: 33,
              prefNm: "埼玉県",
              lat: 35.857428,
              lon: 139.648933,
              twns: [
                { twnCd: 101, twnNm: "川口市", lat: 35.807738, lon: 139.724171 }
              ]
            }
          ], // 対象市区町村

          heading:
            "芝川では、当分の間、避難判断水位（レベル３）を超える水位が続く見込み"
        },
        {
          fldfr_id: 4,
          level: 1,
          rsysNm: "相模川水系",
          fldfrNm: "相模川",
          annTime: "9/11 7:25",
          annNo: "2",
          fldfrKndNm: "氾濫注意情報発表",
          obss: [],

          prefs: [
            {
              prefCd: 33,
              prefNm: "神奈川県",
              lat: 35.447753,
              lon: 139.642514,
              twns: [
                { twnCd: 101, twnNm: "藤沢市", lat: 35.33917, lon: 139.490036 },
                {
                  twnCd: 102,
                  twnNm: "茅ヶ崎市",
                  lat: 35.33386,
                  lon: 139.404716
                },
                {
                  twnCd: 103,
                  twnNm: "高座郡寒川町",
                  lat: 35.372956,
                  lon: 139.383861
                },
                {
                  twnCd: 104,
                  twnNm: "中群大磯町",
                  lat: 35.30685,
                  lon: 139.311314
                },
                { twnCd: 105, twnNm: "厚木市", lat: 35.443082, lon: 139.362489 }
              ]
            }
          ], // 対象市区町村

          heading:
            "相模川では、当分の間、はん濫注意水位（レベル２）を超える水位が続く見込み"
        }
      ],
      // 警報一覧情報 ー 地方版 ー ダム
      region_dam_details: [
        {
          damdsch_id: 1,
          level: 5,
          damNm: "相俣ダム",
          rsysNm: "利根川水系",
          fldfrNm: "赤谷川",
          annTime: "9/11 6:40",
          annNo: "1",
          damdschKndNm: "放流開始の通知",

          prefs: [
            {
              prefCd: 33,
              prefNm: "栃木県",
              lat: 36.565725,
              lon: 139.883565,
              twns: [
                {
                  twnCd: 101,
                  twnNm: "宇都宮市",
                  lat: 36.555112,
                  lon: 139.882807
                },
                {
                  twnCd: 102,
                  twnNm: "小山市",
                  lat: 36.314671,
                  lon: 139.800131
                },
                {
                  twnCd: 103,
                  twnNm: "真岡市",
                  lat: 36.440419,
                  lon: 140.013442
                },
                {
                  twnCd: 104,
                  twnNm: "下野市",
                  lat: 36.387195,
                  lon: 139.841967
                },
                {
                  twnCd: 105,
                  twnNm: "上三川町",
                  lat: 36.439296,
                  lon: 139.909884
                }
              ]
            }
          ], // 対象市区町村

          heading:
            "釜房ダムでは、放流量を毎秒約２５０立方メートルから最大で毎秒５００立方メートルに増加させる予定です。"
        },
        {
          damdsch_id: 2,
          level: 3,
          damNm: "二瀬ダム",
          rsysNm: "",
          fldfrNm: "",
          annTime: "9/10 22:25",
          annNo: "2",
          damdschKndNm: "洪水警戒態勢の通知",
          prefs: [],
          heading: "荒川水系 荒川"
        },
        {
          damdsch_id: 3,
          level: 3,
          damNm: "川俣ダム",
          rsysNm: "",
          fldfrNm: "",
          annTime: "9/11 7:25",
          annNo: "2",
          damdschKndNm: "洪水警戒体制の通知",
          prefs: [],
          heading: "利根川水系 鬼怒川"
        }
      ],
      // 警報一覧情報 ー 地方版 ー 水防
      region_fldctlparty_details: [
        {
          fldctl_id: 1,
          level: 3,
          rsysNm: "菊川水系",
          fldfrNm: "牛淵川(横地)",
          annTime: "9/11 6:40",
          annNo: "1",
          fldctlNm: "水防警報（出動）",
          obss: [],
          prefs: [],
          heading:
            "牛淵川の横地水位観測所（菊川市)の水位は、21日11時20分現在2.34mです。 牛淵川の横地水位観測所（菊川市)の水位は、避難判断水位に達し、上昇しています。"
        }
      ],
      // 警報一覧情報 ー 都道府県版 ー 河川
      prefectures_flood_details: [
        {
          fldfr_id: 1,
          level: 5,
          rsysNm: "利根川水系",
          fldfrNm: "鬼怒川",
          annTime: "9/11 6:40",
          annNo: "7",
          fldfrKndNm: "氾濫発生情報発表",
          obss: [],
          prefs: [],
          heading: "鬼怒川では、氾濫が発生しています"
        }
      ],
      // 警報一覧情報 ー 都道府県版 ー ダム
      prefectures_dam_details: [
        {
          damdsch_id: 1,
          level: 5,
          damNm: "川俣ダム",
          rsysNm: "",
          fldfrNm: "",
          annTime: "9/11 7:25",
          annNo: "2",
          damdschKndNm: "洪水警戒体制の通知",
          prefs: [],
          heading: "利根川水系 鬼怒川"
        }
      ],
      // 警報一覧情報 ー 都道府県版 ー 水防
      prefectures_fldctlparty_details: [
        {
          fldctl_id: 1,
          level: 3,
          rsysNm: "菊川水系",
          fldfrNm: "牛淵川(横地)",
          annTime: "9/11 6:40",
          annNo: "1",
          fldctlNm: "水防警報（出動）",
          obss: [],
          prefs: [],
          heading:
            "牛淵川の横地水位観測所（菊川市)の水位は、21日11時20分現在2.34mです。 牛淵川の横地水位観測所（菊川市)の水位は、避難判断水位に達し、上昇しています。"
        }
      ]
    },
    // 概況画面用 e n d --------------------------------------------------

    // 予警報詳細画面用

    riverwarnDetail: {
      //isSelected: true , //概況画面で予警報を選択したか否か
      riverwarnDetailType: 1, // 予警報種別。この値によって表示内容を切り替える 1 - 洪水予報, 2 - ダム放流通知, 3 - 水防警報
      fldfr: {
        fldfrIndex: 2, //アクティブな発表番号
        activeFldfrId: 8505300100, // アクティブな洪水予報ID
        activeFldfrNo: 3, //洪水予報の発表番号
        rsysNm: "利根川", //河川名
        fldfrNm: "鬼怒川", //水域名
        // 予警報概況・洪水予報
        fldfrs: [
          {
            fldfrId: 8505300091,
            fldfrNo: 1, //発表番号
            fldfrTime: "01/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表" //洪水予報種別名
          },
          {
            fldfrId: 8505300088,
            fldfrNo: 2, //発表番号
            fldfrTime: "01/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表" //洪水予報種別名
          },
          {
            fldfrId: 8505300100,
            fldfrNo: 3, //発表番号
            fldfrTime: "01/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表", //洪水予報種別名
            jrsNm: "下館河川事務所・宇都宮地方気象台・水戸地方気象台合同発表", // 所管機関名
            text:
              "" +
              "鬼怒川氾濫発生情報\n" +
              "鬼怒川洪水予報第7号 洪水警報\n" +
              "平成27年09月11日06時40分発表\n" +
              "下館河川事務所 宇都宮地方気象台 水戸地方気象台 共同発表\n" +
              "\n" +
              "(見出し)鬼怒川では、氾濫が発生しています。\n" +
              "\n" +
              "(主 文)鬼怒川では、常総市新石下(左岸)２１k付近より氾濫しています。\n" +
              "このため、現在常総市で浸水しています。\n" +
              "なお、川島水位観測所では氾濫注意水位(レベル２)を下回るとともに、\n" +
              "鬼怒川水海道水位観測所では避難判断水位(レベル３)を下回り、\n" +
              "水位は下降する見込みですが、引き続き注意してください。\n" +
              "\n" +
              "「雨量」「水位」等の情報は、下記のサイトからもご覧いただけます。\n" +
              "川の防災情報\n" +
              "パソコンからhttp://www.river.go.jp/\n" +
              "携帯電話からhttp://i.river.go.jp/\n" +
              "\n" +
              "気象庁ホームページ\n" +
              "http://www.jma.go.jp/\n" +
              "\n" +
              "問い合わせ先\n" +
              "水位関係：国土交通省 下館河川事務所 防災対策室\n" +
              "電話：0296-25-2164(内線)591\n" +
              "気象関係：気象庁 宇都宮地方気象台\n" +
              "電話：028-633-2767\n" +
              "気象庁 水戸地方気象台\n" +
              "電話：029-224-1105\n"
          }
        ],
        //観測所リスト
        obss: [
          {
            obsFcd: 1,
            obsName: "鬼怒川水海道",
            stg: "水位 1.20m",
            stgOvlvl: 2
          },
          { obsFcd: 2, obsName: "石井(右)", stg: "水位 0.75m", stgOvlvl: 4 },
          { obsFcd: 3, obsName: "川島", stg: "水位 0.30m", stgOvlvl: 5 },
          { obsFcd: 4, obsName: "栗橋", stg: "水位 0.33m", stgOvlvl: 3 },
          { obsFcd: 5, obsName: "佐貫(下)", stg: "水位 0.22m", stgOvlvl: 1 }
        ],
        //都道府県リスト＋市区郡リスト
        prefs: [
          {
            prefCd: 33,
            prefNm: "茨城県",
            lat: 36.34139,
            lon: 140.44667,
            twns: [
              {
                twnCd: 101,
                twnNm: "結城市",
                lat: 36.2620607,
                lon: 139.7922012
              },
              {
                twnCd: 102,
                twnNm: "下妻市",
                lat: 36.1886173,
                lon: 139.9025558
              },
              {
                twnCd: 103,
                twnNm: "常総市",
                lat: 36.0576918,
                lon: 139.8914436
              },
              {
                twnCd: 104,
                twnNm: "守谷市",
                lat: 35.9437125,
                lon: 139.9410754
              },
              { twnCd: 105, twnNm: "筑西市", lat: 36.2885368, lon: 139.907782 },
              {
                twnCd: 106,
                twnNm: "坂東市",
                lat: 36.0629439,
                lon: 139.8189688
              },
              {
                twnCd: 107,
                twnNm: "つくばみらい市",
                lat: 35.9885775,
                lon: 139.9724181
              },
              {
                twnCd: 108,
                twnNm: "八千代町",
                lat: 36.1778547,
                lon: 139.8274972
              }
            ]
          },
          {
            prefCd: 34,
            prefNm: "栃木県",
            lat: 36.56583,
            lon: 139.88361,
            twns: [
              { twnCd: 201, twnNm: "宇都宮市" },
              { twnCd: 202, twnNm: "小山市" },
              { twnCd: 203, twnNm: "真岡市" },
              { twnCd: 204, twnNm: "さくら市" },
              { twnCd: 205, twnNm: "下野市" },
              { twnCd: 206, twnNm: "上三川町" },
              { twnCd: 207, twnNm: "芳賀町" },
              { twnCd: 208, twnNm: "塩谷町" },
              { twnCd: 209, twnNm: "高根沢町" }
            ]
          }
        ]
      }
    }
  },
  mutations: {
    // 概況画面・予警報詳細画面共通
    /**
     * アクティブ表示する予警報種別を設定する
     * @param {Object} state ストアのstate
     * @param {number} riverWarnType アクティブ表示する予警報種別
     */
    setRiverWarnType(state, riverWarnType) {
      state.riverWarnType = riverWarnType;
    },

    setIsSelected(state, isSelected) {
      state.isSelected = isSelected;
    },
    setfldfrId(state, fldfrId) {
      state.activeFldfr = fldfrId;
    },

    // 概況画面用 start --------------------------------------------------
    /**
     * ヘッダの更新ボタンが押された、マップのboundsが変わったなど、
     * 最新の警報一覧情報を表示する場合に呼び出される
     */
    setRiverwarnListData(state, val) {
      var Idx;
      var map;

      // 河川
      state.riverwarnList.fldfrs.splice(0);
      for (Idx in val.fldfrs) {
        map = val.fldfrs[Idx];
        state.riverwarnList.fldfrs.push(map);
      }

      // ダム
      state.riverwarnList.damdschs.splice(0);
      for (Idx in val.damdschs) {
        map = val.damdschs[Idx];
        state.riverwarnList.damdschs.push(map);
      }

      // 水防
      state.riverwarnList.fldctls.splice(0);
      for (Idx in val.fldctls) {
        map = val.fldctls[Idx];
        state.riverwarnList.fldctls.push(map);
      }
    },
    /**
     * アイコンボタンの値を設定する
     * @param {Object} state ストアのstate
     * @param {number} picked アイコンボタンの値
     */
    setPicked(state, picked) {
      state.riverwarnList.picked = picked;
    },
    /**
     * 地図種別を設定する
     * @param {Object} state ストアのstate
     * @param {number} areatype 地図種別
     */
    setAreatype(state, areatype) {
      state.riverwarnList.areatype = areatype;
    },
    /**
     * 地方／都道府県のエリアコードを設定する
     * @param {Object} state ストアのstate
     * @param {number} areaCd 地方／都道府県のエリアコード
     */
    setAreaCd(state, areaCd) {
      state.riverwarnList.areaCd = areaCd;
    },
    /**
     * 地方のエリアコードを設定する
     * @param {Object} state ストアのstate
     * @param {number} areaCdReg 地方のエリアコード
     */
    setAreaCdReg(state, areaCdReg) {
      state.riverwarnList.areaCdReg = areaCdReg;
    },

    /**
     * 警報一覧を設定する
     * @param {Object} state ストアのstate
     */
    setRiverwarnData(state) {
      var Idx;
      var map;

      // 河川
      if (state.riverwarnList.picked === "flood") {
        state.riverwarnList.fldfrs.splice(0);
        // 全国
        if (state.riverwarnList.areatype === "Nationwide") {
          for (Idx in state.riverwarnListMockData.nationwide_flood_details) {
            map = state.riverwarnListMockData.nationwide_flood_details[Idx];
            state.riverwarnList.fldfrs.push(map);
          }

          // 地方
        } else if (state.riverwarnList.areatype === "Region") {
          for (Idx in state.riverwarnListMockData.region_flood_details) {
            map = state.riverwarnListMockData.region_flood_details[Idx];
            state.riverwarnList.fldfrs.push(map);
          }

          // 都道府県
        } else if (state.riverwarnList.areatype === "Prefectures") {
          for (Idx in state.riverwarnListMockData.prefectures_flood_details) {
            map = state.riverwarnListMockData.prefectures_flood_details[Idx];
            state.riverwarnList.fldfrs.push(map);
          }
        }

        // ダム
      } else if (state.riverwarnList.picked === "dam") {
        state.riverwarnList.damdschs.splice(0);
        // 全国
        if (state.riverwarnList.areatype === "Nationwide") {
          for (Idx in state.riverwarnListMockData.nationwide_dam_details) {
            map = state.riverwarnListMockData.nationwide_dam_details[Idx];
            state.riverwarnList.damdschs.push(map);
          }

          // 地方
        } else if (state.riverwarnList.areatype === "Region") {
          for (Idx in state.riverwarnListMockData.region_dam_details) {
            map = state.riverwarnListMockData.region_dam_details[Idx];
            state.riverwarnList.damdschs.push(map);
          }

          // 都道府県
        } else if (state.riverwarnList.areatype === "Prefectures") {
          for (Idx in state.riverwarnListMockData.prefectures_dam_details) {
            map = state.riverwarnListMockData.prefectures_dam_details[Idx];
            state.riverwarnList.damdschs.push(map);
          }
        }

        // 水防
      } else if (state.riverwarnList.picked === "fldctlparty") {
        state.riverwarnList.fldctls.splice(0);
        // 全国
        if (state.riverwarnList.areatype === "Nationwide") {
          for (Idx in state.riverwarnListMockData
            .nationwide_fldctlparty_details) {
            map =
              state.riverwarnListMockData.nationwide_fldctlparty_details[Idx];
            state.riverwarnList.fldctls.push(map);
          }

          // 地方
        } else if (state.riverwarnList.areatype === "Region") {
          for (Idx in state.riverwarnListMockData.region_fldctlparty_details) {
            map = state.riverwarnListMockData.region_fldctlparty_details[Idx];
            state.riverwarnList.fldctls.push(map);
          }

          // 都道府県
        } else if (state.riverwarnList.areatype === "Prefectures") {
          for (Idx in state.riverwarnListMockData
            .prefectures_fldctlparty_details) {
            map =
              state.riverwarnListMockData.prefectures_fldctlparty_details[Idx];
            state.riverwarnList.fldctls.push(map);
          }
        }
      }
    },

    /**
     * 超過彩色を設定する
     * @param {Object} state ストアのstate
     */
    setImageOverColorData(state) {
      // memo : モック用データセット
      //      if (state.areaCd === "88") {
      state.riverwarnList.imageOverColor.splice(0);
      // memo : 四国の場合
      // 全国
      if (state.riverwarnList.areatype === "Nationwide") {
        // 河川
        if (state.riverwarnList.picked === "flood") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "88",
            level: "02"
          });
        }
        // ダム
        if (state.riverwarnList.picked === "dam") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "88",
            level: "06"
          });
        }
        // 水防
        if (state.riverwarnList.picked === "fldctlparty") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "88",
            level: "08"
          });
        }
      }
      // 地方
      else if (state.riverwarnList.areatype === "Region") {
        // 河川
        if (state.riverwarnList.picked === "flood") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "36",
            level: "02"
          });
          state.riverwarnList.imageOverColor.push({
            id: 2,
            area: "37",
            level: "03"
          });
          state.riverwarnList.imageOverColor.push({
            id: 3,
            area: "38",
            level: "04"
          });
          state.riverwarnList.imageOverColor.push({
            id: 4,
            area: "39",
            level: "05"
          });
        }
        // ダム
        if (state.riverwarnList.picked === "dam") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "36",
            level: "06"
          });
        }
        // 水防
        if (state.riverwarnList.picked === "fldctlparty") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "39",
            level: "08"
          });
        }
      }
      // 都道府県
      else if (state.riverwarnList.areatype === "Prefectures") {
        // 河川
        if (state.riverwarnList.picked === "flood") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "36",
            level: "02"
          });
          state.riverwarnList.imageOverColor.push({
            id: 2,
            area: "37",
            level: "03"
          });
          state.riverwarnList.imageOverColor.push({
            id: 3,
            area: "38",
            level: "04"
          });
          state.riverwarnList.imageOverColor.push({
            id: 4,
            area: "39",
            level: "05"
          });
        }
        // ダム
        if (state.riverwarnList.picked === "dam") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "36",
            level: "06"
          });
        }
        // 水防
        if (state.riverwarnList.picked === "fldctlparty") {
          state.riverwarnList.imageOverColor.push({
            id: 1,
            area: "39",
            level: "08"
          });
        }
      }
      //      }
    },
    // 概況画面用 e n d --------------------------------------------------

    // 予警報詳細画面用
    /**
     * 河川予警報詳細に表示する洪水予報データをセットする
     * ※データはモック表示用のダミー
     */
    setFldfrDetail(state) {
      let fldfr = {
        fldfrIndex: 2, //アクティブな発表番号
        activeFldfrId: 8505300100, // アクティブな洪水予報ID
        activeFldfrNo: 3, //洪水予報の発表番号
        rsysNm: "利根川", //河川名
        fldfrNm: "鬼怒川", //水域名
        // 予警報概況・洪水予報
        fldfrs: [
          {
            fldfrId: 8505300091,
            fldfrNo: 1, //発表番号
            fldfrTime: "02/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表" //洪水予報種別名
          },
          {
            fldfrId: 8505300088,
            fldfrNo: 2, //発表番号
            fldfrTime: "02/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表" //洪水予報種別名
          },
          {
            fldfrId: 8505300100,
            fldfrNo: 3, //発表番号
            fldfrTime: "02/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表", //洪水予報種別名
            jrsNm: "下館河川事務所・宇都宮地方気象台・水戸地方気象台合同発表", // 所管機関名
            text:
              "" +
              "鬼怒川氾濫発生情報\n" +
              "鬼怒川洪水予報第7号 洪水警報\n" +
              "平成27年09月11日06時40分発表\n" +
              "下館河川事務所 宇都宮地方気象台 水戸地方気象台 共同発表\n" +
              "\n" +
              "(見出し)鬼怒川では、氾濫が発生しています。\n" +
              "\n" +
              "(主 文)鬼怒川では、常総市新石下(左岸)２１k付近より氾濫しています。\n" +
              "このため、現在常総市で浸水しています。\n" +
              "なお、川島水位観測所では氾濫注意水位(レベル２)を下回るとともに、\n" +
              "鬼怒川水海道水位観測所では避難判断水位(レベル３)を下回り、\n" +
              "水位は下降する見込みですが、引き続き注意してください。\n" +
              "\n" +
              "「雨量」「水位」等の情報は、下記のサイトからもご覧いただけます。\n" +
              "川の防災情報\n" +
              "パソコンからhttp://www.river.go.jp/\n" +
              "携帯電話からhttp://i.river.go.jp/\n" +
              "\n" +
              "気象庁ホームページ\n" +
              "http://www.jma.go.jp/\n" +
              "\n" +
              "問い合わせ先\n" +
              "水位関係：国土交通省 下館河川事務所 防災対策室\n" +
              "電話：0296-25-2164(内線)591\n" +
              "気象関係：気象庁 宇都宮地方気象台\n" +
              "電話：028-633-2767\n" +
              "気象庁 水戸地方気象台\n" +
              "電話：029-224-1105\n"
          },
          {
            fldfrId: 8505300088,
            fldfrNo: 4, //発表番号
            fldfrTime: "02/13 16:45", //発令時刻
            fldfrKnd: 5,
            fldfrKndNm: "氾濫発生情報発表" //洪水予報種別名
          }
        ],
        //観測所リスト
        obss: [
          {
            obsFcd: 1,
            obsName: "鬼怒川水海道",
            stg: "水位 1.20m",
            stgOvlvl: 2
          },
          { obsFcd: 2, obsName: "石井(右)", stg: "水位 0.75m", stgOvlvl: 4 },
          { obsFcd: 3, obsName: "川島", stg: "水位 0.30m", stgOvlvl: 5 },
          { obsFcd: 4, obsName: "栗橋", stg: "水位 0.33m", stgOvlvl: 3 },
          { obsFcd: 5, obsName: "佐貫(下)", stg: "水位 0.22m", stgOvlvl: 1 }
        ],
        //都道府県リスト＋市区郡リスト
        prefs: [
          {
            prefCd: 33,
            prefNm: "茨城県",
            lat: 36.34139,
            lon: 140.44667,
            twns: [
              {
                twnCd: 101,
                twnNm: "結城市",
                lat: 36.2620607,
                lon: 139.7922012
              },
              {
                twnCd: 102,
                twnNm: "下妻市",
                lat: 36.1886173,
                lon: 139.9025558
              },
              {
                twnCd: 103,
                twnNm: "常総市",
                lat: 36.0576918,
                lon: 139.8914436
              },
              {
                twnCd: 104,
                twnNm: "守谷市",
                lat: 35.9437125,
                lon: 139.9410754
              },
              { twnCd: 105, twnNm: "筑西市", lat: 36.2885368, lon: 139.907782 },
              {
                twnCd: 106,
                twnNm: "坂東市",
                lat: 36.0629439,
                lon: 139.8189688
              },
              {
                twnCd: 107,
                twnNm: "つくばみらい市",
                lat: 35.9885775,
                lon: 139.9724181
              },
              {
                twnCd: 108,
                twnNm: "八千代町",
                lat: 36.1778547,
                lon: 139.8274972
              }
            ]
          },
          {
            prefCd: 34,
            prefNm: "栃木県",
            lat: 36.56583,
            lon: 139.88361,
            twns: [
              { twnCd: 201, twnNm: "宇都宮市" },
              { twnCd: 202, twnNm: "小山市" },
              { twnCd: 203, twnNm: "真岡市" },
              { twnCd: 204, twnNm: "さくら市" },
              { twnCd: 205, twnNm: "下野市" },
              { twnCd: 206, twnNm: "上三川町" },
              { twnCd: 207, twnNm: "芳賀町" },
              { twnCd: 208, twnNm: "塩谷町" },
              { twnCd: 209, twnNm: "高根沢町" }
            ]
          }
        ]
      };
      state.riverwarnDetail.riverwarnDetailType = 1;
      state.riverwarnDetail.fldfr = fldfr;
    },
    /**
     * 河川予警報詳細に表示するダム放流通知データをセットする
     */
    setDamdschDetail(state) {
      let damdsch = {
        damdschIndex: 2, //アクティブな発表番号
        activeDamdschId: 8505300100, // アクティブなダム放流通知ID
        activeDamdschNo: 3, //ダム放流通知の発表番号
        rvrNm: "利根川", //河川名
        rsysNm: "赤谷川", //水系名
        damdschNm: "相俣ダム", //ダム名
        // 予警報概況・ダム放流通知
        damdschs: [
          {
            damdschId: 8505300091,
            damdschNo: 1, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 31,
            damdschKndNm: "洪水警戒体制の通知" //ダム放流通知種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 2, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300100,
            damdschNo: 3, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 36,
            damdschKndNm: "放流開始の通知", //洪水予報種別名
            jrsNm: "下館河川事務所・宇都宮地方気象台・水戸地方気象台合同発表", // 所管機関名
            text:
              "" +
              "相俣ダムでは24日15時30分から毎秒3m3の放流を開始します。\n" +
              "その後、必要に応じて放流量を増やすことがあります。\n" +
              "下流河川の水位上昇に注意して下さい。\n" +
              "\n" +
              "１ 放流開始の目的\n" +
              "　貯水位維持：貯水位を工事制限水位EL556.0mlに維持する。\n" +
              "\n" +
              "「水位」の情報は、下記のサイトからもご覧いただけます。\n" +
              "川の防災情報 パソコンから http://www.river.go.jp/\n" +
              "携帯電話から http://i.river.go.jp/\n" +
              "\n" +
              "問い合わせ先\n" +
              "国土交通省 下館河川事務所 防災対策室\n" +
              "電話：0296-25-2164(内線)591\n" +
              "\n"
          },
          {
            damdschId: 8505300088,
            damdschNo: 4, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 5, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 6, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 7, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          // /*
          {
            damdschId: 8505300088,
            damdschNo: 8, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 9, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 10, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 11, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 12, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          },
          {
            damdschId: 8505300088,
            damdschNo: 13, //発表番号
            damdschTime: "02/13 16:45", //発令時刻
            damdschKnd: 35,
            damdschKndNm: "洪水調節の開始の情報" //洪水予報種別名
          }
          // */
        ],
        //都道府県リスト＋市区郡リスト
        prefs: [
          {
            prefCd: 34,
            prefNm: "栃木県",
            lat: 36.56583,
            lon: 139.88361,
            twns: [
              { twnCd: 201, twnNm: "宇都宮市" },
              { twnCd: 202, twnNm: "小山市" },
              { twnCd: 203, twnNm: "真岡市" },
              { twnCd: 204, twnNm: "さくら市" },
              { twnCd: 205, twnNm: "下野市" },
              { twnCd: 206, twnNm: "上三川町" }
            ]
          }
        ]
      };
      state.riverwarnDetail.riverwarnDetailType = 2;
      state.riverwarnDetail.damdsch = damdsch;
    },
    /**
     * 河川予警報詳細に表示する水防警報データをセットする
     */
    setFldctlDetail(state) {
      let fldctl = {
        fldctlIndex: 2, //アクティブな発表番号
        activeFldctlId: 8505300100, // アクティブな水防警報ID
        activeFldctlNo: 3, //水防警報の発表番号
        rsysNm: "利根川", //河川名
        fldctlNm: "鬼怒川", //水域名
        // 予警報概況・水防警報
        fldctls: [
          {
            fldctlId: 8505300091,
            fldctlNo: 1, //発表番号
            fldctlTime: "02/13 16:45", //発令時刻
            fldctlKnd: 5,
            fldctlKndNm: "待機" //水防警報種別名
          },
          {
            fldctlId: 8505300088,
            fldctlNo: 2, //発表番号
            fldctlTime: "02/13 16:45", //発令時刻
            fldctlKnd: 5,
            fldctlKndNm: "待機" //水防警報種別名
          },
          {
            fldctlId: 8505300100,
            fldctlNo: 3, //発表番号
            fldctlTime: "02/13 16:45", //発令時刻
            fldctlKnd: 5,
            fldctlKndNm: "待機", //水防警報種別名
            jrsNm: "下館河川事務所・宇都宮地方気象台・水戸地方気象台合同発表", // 所管機関名
            text:
              "" +
              "鬼怒川(石井(右))水防警報(待機)\n" +
              "平成27年09月09日19時45分\n" +
              "国土交通省　下館河川事務所発表(第1号)\n" +
              "\n" +
              "【現　況】鬼怒川の石井(右)水位観測所(宇都宮市)の水位は、\n" +
              "9日19時30分現在1.35mです。\n" +
              "鬼怒川の石井(右)水位観測所(宇都宮市)の水位は、\n" +
              "水防団待機水位に達し、上昇しています。\n" +
              "\n" +
              "【発　表】水防機関は待機してください。\n" +
              "\n" +
              "「水位」の情報は、下記のサイトからもご覧いただけます。\n" +
              "川の防災情報 パソコンから http://www.river.go.jp/\n" +
              "携帯電話から http://i.river.go.jp/\n" +
              "\n" +
              "問い合わせ先\n" +
              "国土交通省 下館河川事務所 防災対策室\n" +
              "電話：0297-25-2164(内線)591\n"
          }
        ],
        //観測所リスト
        obss: [
          {
            obsFcd: 1,
            obsName: "鬼怒川水海道",
            stg: "水位 1.20m",
            stgOvlvl: 2
          },
          { obsFcd: 2, obsName: "石井(右)", stg: "水位 0.75m", stgOvlvl: 4 },
          { obsFcd: 3, obsName: "川島", stg: "水位 0.30m", stgOvlvl: 5 },
          { obsFcd: 4, obsName: "栗橋", stg: "水位 0.33m", stgOvlvl: 3 },
          { obsFcd: 5, obsName: "佐貫(下)", stg: "水位 0.22m", stgOvlvl: 1 }
        ],
        //都道府県リスト＋市区郡リスト
        prefs: [
          {
            prefCd: 34,
            prefNm: "栃木県",
            lat: 36.56583,
            lon: 139.88361,
            twns: [
              { twnCd: 201, twnNm: "宇都宮市" },
              { twnCd: 202, twnNm: "小山市" },
              { twnCd: 203, twnNm: "真岡市" },
              { twnCd: 204, twnNm: "さくら市" },
              { twnCd: 205, twnNm: "下野市" },
              { twnCd: 206, twnNm: "上三川町" }
            ]
          }
        ]
      };
      state.riverwarnDetail.riverwarnDetailType = 3;
      state.riverwarnDetail.fldctl = fldctl;
    }
  },
  actions: {
    // 概況画面・予警報詳細画面共通

    // 概況画面用 start --------------------------------------------------
    /**
     * ヘッダの更新ボタンが押された、マップのboundsが変わったなど、
     * 最新の警報一覧情報を表示する場合に呼び出される
     */
    setRiverwarnListData(context, val) {
      context.commit("setRiverwarnListData", val);
    },
    setPicked(context, val) {
      context.commit("setPicked", val);
      context.commit("setImageOverColorData");
      context.commit("setRiverwarnData");
    },
    setAreatype(context, val) {
      context.commit("setAreatype", val);
      context.commit("setImageOverColorData");
      context.commit("setRiverwarnData");
    },
    setAreaCd(context, val) {
      context.commit("setAreaCd", val);
    },
    setAreaCdReg(context, val) {
      context.commit("setAreaCdReg", val);
    },
    setRiverwarnData(context) {
      context.commit("setRiverwarnData");
    },
    setImageOverColorData(context) {
      context.commit("setImageOverColorData");
    }
    // 概況画面用 e n d --------------------------------------------------

    // 予警報詳細画面用
  },
  getters: {
    // 概況画面・予警報詳細画面共通
    // 概況画面用
    // 予警報詳細画面用
    // detailFldfrCount: (state, getters) => {
    //   return getters.riverwarnDetail.fldfrs.length;
    // },
  }
};
