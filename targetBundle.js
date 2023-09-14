__d(
  function (g, r, i, a, m, e, d) {
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    r(d[0])(r(d[1]));
    var t = r(d[2]);
    function o(o) {
      var s = o.children,
        l = o.title,
        c = "dark" === (0, t.useColorScheme)();
      return (0, r(d[3]).jsxs)(t.View, {
        style: n.sectionContainer,
        children: [
          (0, r(d[3]).jsx)(t.Text, {
            style: [
              n.sectionTitle,
              { color: c ? r(d[4]).Colors.white : r(d[4]).Colors.black },
            ],
            children: l,
          }),
          (0, r(d[3]).jsx)(t.Text, {
            style: [
              n.sectionDescription,
              { color: c ? r(d[4]).Colors.light : r(d[4]).Colors.dark },
            ],
            children: s,
          }),
        ],
      });
    }
    var n = t.StyleSheet.create({
        sectionContainer: { marginTop: 32, paddingHorizontal: 24 },
        sectionTitle: { fontSize: 24, fontWeight: "600" },
        sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: "400" },
        highlight: { fontWeight: "700" },
      }),
      s = function () {
        var s = "dark" === (0, t.useColorScheme)();
        console.log("123");
        var l = {
          backgroundColor: s ? r(d[4]).Colors.darker : r(d[4]).Colors.lighter,
        };
        return (0, r(d[3]).jsxs)(
          t.SafeAreaView,
          {
            style: l,
            children: [
              (0, r(d[3]).jsx)(
                t.StatusBar,
                {
                  barStyle: s ? "light-content" : "dark-content",
                  backgroundColor: l.backgroundColor,
                },
                "specialKey1"
              ),
              (0, r(d[3]).jsxs)(
                t.ScrollView,
                {
                  contentInsetAdjustmentBehavior: "automatic",
                  style: l,
                  children: [
                    (0, r(d[3]).jsx)(r(d[4]).Header, {}, "specialKey3"),
                    (0, r(d[3]).jsxs)(t.View, {
                      style: {
                        backgroundColor: s
                          ? r(d[4]).Colors.black
                          : r(d[4]).Colors.white,
                      },
                      children: [
                        (0, r(d[3]).jsxs)(o, {
                          title: "Step One",
                          children: [
                            "Edit ",
                            (0, r(d[3]).jsx)(t.Text, {
                              style: n.highlight,
                              children: "App.tsx",
                            }),
                            " to change this screen and then come back to see your edits.",
                          ],
                        }),
                        (0, r(d[3]).jsx)(o, {
                          title: "See Your Changes",
                          children: (0, r(d[3]).jsx)(
                            r(d[4]).ReloadInstructions,
                            {}
                          ),
                        }),
                        (0, r(d[3]).jsx)(o, {
                          title: "Debug",
                          children: (0, r(d[3]).jsx)(
                            r(d[4]).DebugInstructions,
                            {}
                          ),
                        }),
                        (0, r(d[3]).jsx)(o, {
                          title: "Learn More",
                          children:
                            "Read the docs to discover what to do next:",
                        }),
                      ],
                    }),
                  ],
                },
                "specialKey2"
              ),
            ],
          },
          "specialKey0"
        );
      };
    e.default = s;
  },
  421,
  [3, 144, 1, 192, 422]
);
