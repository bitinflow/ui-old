'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var pinia = require('pinia');

var script$d = {
  name: "Button",

  methods: {
    click() {
      this.$emit('click');
    }
  }
};

const _hoisted_1$c = {
  href: "#",
  class: "truncate text-black dark:text-white hover:bg-zinc-100 dark:bg-base-700 dark:hover:bg-base-600 dark:text-white rounded-lg px-4 py-2"
};

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$c, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$d.render = render$d;
script$d.__file = "src/components/Button.vue";

var script$c = {
  name: "Card"
};

const _hoisted_1$b = { class: "bg-white text-black dark:bg-base-700 dark:text-white rounded shadow mb-8" };

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$c.render = render$c;
script$c.__file = "src/components/Card.vue";

var script$b = {
  name: "CardBody"
};

const _hoisted_1$a = { class: "p-8 rounded-b" };

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$b.render = render$b;
script$b.__file = "src/components/CardBody.vue";

var script$a = {
  name: "CardHeader"
};

const _hoisted_1$9 = { class: "py-4 px-8 border-b dark:border-base-800 rounded-t" };
const _hoisted_2$4 = { class: "text-xl font-medium" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
    vue.createElementVNode("div", _hoisted_2$4, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

script$a.render = render$a;
script$a.__file = "src/components/CardHeader.vue";

var script$9 = {
  name: "Container"
};

const _hoisted_1$8 = { class: "container mx-auto px-4 lg:px-16 py-8 space-y-8" };

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$9.render = render$9;
script$9.__file = "src/components/Container.vue";

var script$8 = {
  name: "FirstLevelLink",
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    }
  }
};

const _hoisted_1$7 = {
  class: "hover:bg-primary-500 rounded-lg text-center text-xs py-4 flex flex-col space-y-2",
  href: "#"
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$7, [
    vue.createElementVNode("i", {
      class: vue.normalizeClass(['fal text-xl', $props.icon])
    }, null, 2 /* CLASS */),
    vue.createElementVNode("span", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

script$8.render = render$8;
script$8.__file = "src/components/FirstLevelLink.vue";

var script$7 = {
  name: "FirstLevelMenu",
  data() {
    return {
      primaryMenu: [
        {name: 'Home', icon: 'fal fa-home', to: '/', exact: true},
        {name: 'Buckets', icon: 'fal fa-bucket', to: '/buckets', exact: false},
        {name: 'Domains', icon: 'fal fa-globe', to: '/domains', exact: false},
        {name: 'Spaces', icon: 'fal fa-meteor', to: '/spaces', exact: false},
        {name: 'Zones', icon: 'fal fa-list-ul', to: '/zones', exact: false},
      ],
      secondaryMenu: [
        {name: 'Logout', icon: 'fal fa-sign-out', to: '/logout'},
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$refs.overlay.classList.toggle('hidden');
      this.$refs.sidebar.classList.toggle('-translate-x-full');
    },
    closeMenu() {
      this.$refs.overlay.classList.add('hidden');
      this.$refs.sidebar.classList.add('-translate-x-full');
    },
    toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
  },
};

const _withScopeId = n => (vue.pushScopeId("data-v-42eb52e3"),n=n(),vue.popScopeId(),n);
const _hoisted_1$6 = { class: "bg-gray-100 dark:bg-base min-h-screen flex flex-col relative" };
const _hoisted_2$3 = {
  ref: "overlay",
  class: "sm:hidden hidden bg-gray-800 opacity-50 w-full min-h-screen absolute z-10"
};
const _hoisted_3$3 = { class: "bg-white relative shadow sm:hidden z-10" };
const _hoisted_4$2 = { class: "container flex justify-between items-center py-4" };
const _hoisted_5$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("img", {
  src: "/img/icon-light.svg",
  class: "h-4",
  alt: "bitinflow"
}, null, -1 /* HOISTED */));
const _hoisted_6$1 = { class: "flex items-center space-x-4" };
const _hoisted_7$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("img", {
  class: "h-8 w-8 rounded-full",
  alt: "profile",
  src: "/img/avatar.jpg"
}, null, -1 /* HOISTED */));
const _hoisted_8$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /*#__PURE__*/vue.createElementVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })
], -1 /* HOISTED */));
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _hoisted_10 = { class: "flex flex-grow" };
const _hoisted_11 = {
  ref: "sidebar",
  class: "flex h-screen flex-col w-36 bg-base-800 dark:border-r dark:border-base text-gray-100 shadow sm:relative absolute inset-y-0 transform -translate-x-full sm:translate-x-0 transition transition-transform z-20"
};
const _hoisted_12 = { class: "flex-none bg-primary-500 h-16 sm:h-20 py-3 sm:py-6 text-white flex flex-initial justify-center" };
const _hoisted_13 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("img", {
  src: "/img/icon-light.svg",
  class: "h-8 w-auto",
  alt: "Logo"
}, null, -1 /* HOISTED */));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = { class: "flex-auto flex flex-col overflow-y-auto py-6 space-y-6" };
const _hoisted_16 = { class: "primary flex flex-grow flex-col space-y-4 px-6" };
const _hoisted_17 = { class: "flex flex-initial flex-col space-y-4 px-6" };
const _hoisted_18 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "flex-none" }, null, -1 /* HOISTED */));
const _hoisted_19 = { class: "flex flex-1" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nuxt_link = vue.resolveComponent("nuxt-link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
    vue.createCommentVNode(" Overlay "),
    vue.createElementVNode("div", _hoisted_2$3, null, 512 /* NEED_PATCH */),
    vue.createCommentVNode(" Header "),
    vue.createElementVNode("header", _hoisted_3$3, [
      vue.createElementVNode("div", _hoisted_4$2, [
        _hoisted_5$1,
        vue.createElementVNode("div", _hoisted_6$1, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.secondaryMenu, (link) => {
            return (vue.openBlock(), vue.createBlock(_component_nuxt_link, {
              key: link.name,
              to: link.to
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("i", {
                  class: vue.normalizeClass([link.icon, "icon"])
                }, null, 2 /* CLASS */),
                vue.createTextVNode(" " + vue.toDisplayString(link.name), 1 /* TEXT */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
          }), 128 /* KEYED_FRAGMENT */)),
          vue.createVNode(_component_nuxt_link, {
            class: "inline-block flex",
            to: "/"
          }, {
            default: vue.withCtx(() => [
              _hoisted_7$1
            ]),
            _: 1 /* STABLE */
          }),
          vue.createElementVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleMenu && $options.toggleMenu(...args))),
            class: "focus-within:outline-none pl-4"
          }, _hoisted_9$1)
        ])
      ])
    ]),
    vue.createCommentVNode(" Sidenav with Content "),
    vue.createElementVNode("div", _hoisted_10, [
      vue.createCommentVNode(" Sidenav "),
      vue.createElementVNode("nav", _hoisted_11, [
        vue.createCommentVNode(" logo "),
        vue.createElementVNode("div", _hoisted_12, [
          vue.createElementVNode("button", {
            onClick: _cache[1] || (_cache[1] = (...args) => ($options.toggleDarkMode && $options.toggleDarkMode(...args)))
          }, _hoisted_14)
        ]),
        vue.createElementVNode("div", _hoisted_15, [
          vue.createCommentVNode(" nav "),
          vue.createElementVNode("nav", _hoisted_16, [
            vue.renderSlot(_ctx.$slots, "top")
          ]),
          vue.createElementVNode("nav", _hoisted_17, [
            vue.renderSlot(_ctx.$slots, "bottom")
          ])
        ]),
        _hoisted_18
      ], 512 /* NEED_PATCH */),
      vue.createCommentVNode(" Content "),
      vue.createElementVNode("main", _hoisted_19, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ])
  ]))
}

script$7.render = render$7;
script$7.__scopeId = "data-v-42eb52e3";
script$7.__file = "src/components/FirstLevelMenu.vue";

var script$6 = {
  name: "Flex"
};

const _hoisted_1$5 = { class: "flex-auto" };

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$6.render = render$6;
script$6.__file = "src/components/FlexAuto.vue";

var script$5 = {
  name: "FloatingBanner"
};

const _hoisted_1$4 = { class: "fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-[100]" };
const _hoisted_2$2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8\"><div class=\"rounded-lg bg-primary-500 p-2 shadow-lg sm:p-3\"><div class=\"flex flex-wrap items-center justify-between\"><div class=\"flex w-0 flex-1 items-center\"><span class=\"flex rounded-lg bg-primary-800 p-2\"><!-- Heroicon name: outline/megaphone --><svg class=\"h-6 w-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46\"></path></svg></span><p class=\"ml-3 truncate font-medium text-white\"><span class=\"md:hidden\">We announced a new product!</span><span class=\"hidden md:inline\">Big news! We&#39;re excited to announce a brand new product.</span></p></div><div class=\"order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto\"><a href=\"#\" class=\"flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-primary-500 shadow-sm hover:bg-zinc-200\">Learn more</a></div><div class=\"order-2 flex-shrink-0 sm:order-3 sm:ml-2\"><button type=\"button\" class=\"-mr-1 flex rounded-md p-2 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-white\"><span class=\"sr-only\">Dismiss</span><!-- Heroicon name: outline/x-mark --><svg class=\"h-6 w-6 text-white\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path></svg></button></div></div></div></div>", 1);
const _hoisted_3$2 = [
  _hoisted_2$2
];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, _hoisted_3$2))
}

script$5.render = render$5;
script$5.__file = "src/components/FloatingBanner.vue";

var script$4 = {
  name: "HeroCard"
};

const _hoisted_1$3 = { class: "bg-gradient-to-tr from-primary-600 to-primary-400 text-white rounded shadow p-8" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$4.render = render$4;
script$4.__file = "src/components/HeroCard.vue";

var script$3 = {
  name: "ScreenScrollContainer"
};

const _hoisted_1$2 = { class: "overflow-y-auto h-screen" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/ScreenScrollContainer.vue";

var script$2 = {
  name: "SecondLevelLink",
  components: {Button: script$d},
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    }
  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = vue.resolveComponent("Button");

  return (vue.openBlock(), vue.createBlock(_component_Button, { class: "flex items-center gap-2" }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("i", {
        class: vue.normalizeClass(['fal', $props.icon])
      }, null, 2 /* CLASS */),
      vue.createTextVNode(),
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3 /* FORWARDED */
  }))
}

script$2.render = render$2;
script$2.__file = "src/components/SecondLevelLink.vue";

var script$1 = {
  name: "SecondLevelMenu",
  components: {SecondLevelLink: script$2},
  props: {
    items: {
      type: Array,
      default: [
        {name: 'Test', href: 'Test'}
      ]
    }
  }
};

const _hoisted_1$1 = { class: "w-64 bg-white text-black shadow dark:bg-base-700 dark:text-white dark:border-base-900 dark:border-l flex flex-col overflow-y-auto h-screen absolute sm:relative transform -translate-x-full sm:translate-x-0 pt-10 pb-4 px-4 space-y-2" };
const _hoisted_2$1 = { class: "font-semibold px-4" };
const _hoisted_3$1 = { class: "flex flex-col gap-2 justify-between flex-1" };
const _hoisted_4$1 = { class: "flex flex-col gap-2" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SecondLevelLink = vue.resolveComponent("SecondLevelLink");

  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$1, [
    vue.createElementVNode("span", _hoisted_2$1, [
      vue.renderSlot(_ctx.$slots, "title")
    ]),
    vue.createElementVNode("div", _hoisted_3$1, [
      vue.createElementVNode("div", _hoisted_4$1, [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      vue.createElementVNode("div", null, [
        vue.createVNode(_component_SecondLevelLink, {
          class: "bg-zinc-100 hover:bg-zinc-200 dark:bg-base-500 dark:hover:bg-base-600",
          icon: "fa-plus"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(" Create Resource ")
          ]),
          _: 1 /* STABLE */
        })
      ])
    ])
  ]))
}

script$1.render = render$1;
script$1.__scopeId = "data-v-05ca9b6f";
script$1.__file = "src/components/SecondLevelMenu.vue";

const useMenuStore = pinia.defineStore('menu', {
    state: () => {
        return {
            thirdLevelLinks: []
        }
    },
    actions: {
        updateThirdLevelLinks(links) {
            this.thirdLevelLinks = links;
        },
    },
});

var script = {
  name: "ThirdLevelMenu",
  components: {Button: script$d},
  data() {
    return {
      link: ''
    }
  },
  computed: {
    ...pinia.mapState(useMenuStore, ['thirdLevelLinks'])
  },
  methods: {
    onChange(event) {
      this.link = event.target.value;
      this.$router.push(event.target.value);
    }
  }
};

const _hoisted_1 = { class: "flex-1 dark:border-l dark:border-base shadow text-black dark:text-white" };
const _hoisted_2 = { class: "bg-white border-b dark:bg-base-600 dark:border-base" };
const _hoisted_3 = { class: "container mx-auto px-4 lg:px-16 py-10" };
const _hoisted_4 = { class: "text-3xl font-semibold" };
const _hoisted_5 = { class: "bg-white dark:bg-base-700 py-4" };
const _hoisted_6 = { class: "container mx-auto px-4 lg:px-16" };
const _hoisted_7 = { class: "hidden xl:block space-x-4" };
const _hoisted_8 = { class: "flex flex-col xl:hidden" };
const _hoisted_9 = ["to", "value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = vue.resolveComponent("Button");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createElementVNode("div", _hoisted_3, [
        vue.createElementVNode("div", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "title")
        ])
      ])
    ]),
    vue.createElementVNode("nav", _hoisted_5, [
      vue.createElementVNode("div", _hoisted_6, [
        vue.createElementVNode("div", _hoisted_7, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.thirdLevelLinks, (link) => {
            return (vue.openBlock(), vue.createBlock(_component_Button, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("i", {
                  class: vue.normalizeClass([link.icon, "icon"])
                }, null, 2 /* CLASS */),
                vue.createTextVNode(" " + vue.toDisplayString(link.name), 1 /* TEXT */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          }), 256 /* UNKEYED_FRAGMENT */))
        ]),
        vue.createElementVNode("div", _hoisted_8, [
          vue.withDirectives(vue.createElementVNode("select", {
            onChange: _cache[0] || (_cache[0] = (...args) => ($options.onChange && $options.onChange(...args))),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.link) = $event)),
            class: "bg-white"
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.thirdLevelLinks, (link) => {
              return (vue.openBlock(), vue.createElementBlock("option", {
                key: link.name,
                to: link.to,
                value: link.to
              }, vue.toDisplayString(link.name), 9 /* TEXT, PROPS */, _hoisted_9))
            }), 128 /* KEYED_FRAGMENT */))
          ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue.vModelSelect, $data.link]
          ])
        ])
      ])
    ])
  ]))
}

script.render = render;
script.__scopeId = "data-v-4c63018c";
script.__file = "src/components/ThirdLevelMenu.vue";

var components = {
    Button: script$d,
    Card: script$c,
    CardBody: script$b,
    CardHeader: script$a,
    Container: script$9,
    FirstLevelLink: script$8,
    FirstLevelMenu: script$7,
    FlexAuto: script$6,
    FloatingBanner: script$5,
    HeroCard: script$4,
    ScreenScrollContainer: script$3,
    SecondLevelLink: script$2,
    SecondLevelMenu: script$1,
    ThirdLevelMenu: script,
};

const colors = {
    primary: {
        DEFAULT: '#00BFA5',
        '50': '#A6FFF3',
        '100': '#8CFFEF',
        '200': '#59FFE8',
        '300': '#26FFE1',
        '400': '#00F2D1',
        '500': '#00BFA5',
        '600': '#00917D',
        '700': '#006356',
        '800': '#00352E',
        '900': '#000706'
    },
    base: {
        DEFAULT: '#070709',
        '500': '#3a3a3d',
        '600': '#26262c',
        '700': '#1f1f23',
        '800': '#18181b',
        '900': '#0e0e10'
    },
};

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

exports.colors = colors;
exports.default = plugin;
