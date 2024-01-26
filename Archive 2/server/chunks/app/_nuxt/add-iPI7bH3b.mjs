import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { defineComponent, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext, mergeProps, ref } from 'vue';
import { u as useHead } from './index-tbNGurtz.mjs';
import { e as useTrace, d as useState } from '../server.mjs';
import { u as useFetch, B as BASE_URL } from './fetch-ggmUBFCO.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const useProject = () => {
  const project = useState("project", () => {
    return {
      info: {},
      rundown: [],
      invitation: [],
      sinergy: [],
      indicator: []
    };
  });
  return { project };
};
const _imports_0 = "" + buildAssetsURL("flyer.Bp9HAaF6.png");
const _imports_1 = "" + buildAssetsURL("photo.L1PsSQNV.png");
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + buildAssetsURL("release.9ox1yAPn.png");
const _sfc_main$9 = {
  __name: "info",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { project } = useProject();
    const { trace } = useTrace();
    const { data: ProgramIndicator, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/indicator/${trace.value.ProgramId}`,
      "$0qmtV1gdUg"
    )), __temp = await __temp, __restore(), __temp);
    const { data: categories, status: statusCategories } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/category`,
      "$mDSpzFFth9"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div><div>Program Relation</div><div><select><option>asd</option></select></div></div><div class="flex gap-2 flex-col"><div class="flex flex-col"><label>Project name</label><input class="px-2" placeholder="Project name"${ssrRenderAttr("value", unref(project).info.title)}></div><div class="flex flex-col"><label>Venue</label><input class="px-2" placeholder="Venue"${ssrRenderAttr("value", unref(project).info.location)}></div><div class="flex flex-col"><div><label>Jenis Aktifitas</label></div><select name="project" id="project"${ssrRenderAttr("value", unref(project).info.type)}><option disabled selected>Please choose the project type</option><!--[-->`);
      ssrRenderList(unref(categories), (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="flex flex-col"><div class="flex gap-4 p-2 flex-wrap"><div class="flex"><h3 class="me-2">Start</h3><div><input class="px-2" type="datetime-local"${ssrRenderAttr("value", unref(project).info.start)}></div></div><div class="flex"><h3 class="me-2">End</h3><div><input class="px-2" type="datetime-local"${ssrRenderAttr("value", unref(project).info.end)}${ssrRenderAttr("min", unref(project).info.start)}></div></div></div></div>`);
      if ((_a = unref(trace)) == null ? void 0 : _a.ProgramId) {
        _push(`<div class="flex flex-col"><label>Program KPI</label><select class="text-white"><option value="default" selected disabled id="defaultSelect"> Select KPI to Add </option><!--[-->`);
        ssrRenderList(unref(ProgramIndicator), (item) => {
          _push(`<option${ssrRenderAttr("value", JSON.stringify(item))}>${ssrInterpolate(item.description)}</option>`);
        });
        _push(`<!--]--></select><div><!--[-->`);
        ssrRenderList(unref(project).indicator, (item, index) => {
          _push(`<div class="hover:text-red-500 hover:cursor-pointer">${ssrInterpolate(item.description)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col"><div><label>Public Relation Request</label></div><div><div class="flex gap-2 items-center"><input type="checkbox"${ssrIncludeBooleanAttr(unref(project).info.flyer) ? " checked" : ""}><img${ssrRenderAttr("src", _imports_0)} alt="flyer" class="src" width="20vw"><label>Flyer</label></div><div class="flex gap-2 items-center"><input type="checkbox"${ssrIncludeBooleanAttr(unref(project).info.photo) ? " checked" : ""}><img${ssrRenderAttr("src", _imports_1)} alt="photo" class="src" width="20vw"><label>Photo</label></div><div class="flex gap-2 items-center"><input type="checkbox"${ssrIncludeBooleanAttr(unref(project).info.video) ? " checked" : ""}><img${ssrRenderAttr("src", _imports_2)} alt="video" class="src" width="20vw"><label>Video</label></div><div class="flex gap-2 items-center"><input type="checkbox"${ssrIncludeBooleanAttr(unref(project).info.release) ? " checked" : ""}><img${ssrRenderAttr("src", _imports_3)} alt="release" class="src" width="20vw"><label>Release</label></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/project/info.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$9;
const _sfc_main$8 = {
  __name: "background",
  __ssrInlineRender: true,
  setup(__props) {
    const { project } = useProject();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col gap-2"><div class="flex flex-col"><div>Background</div><textarea rows="15">${ssrInterpolate(unref(project).info.background)}</textarea></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/project/background.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$8;
const _sfc_main$7 = {
  __name: "rundown",
  __ssrInlineRender: true,
  setup(__props) {
    useProject();
    const projectForm = ref({});
    const openInfo = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col gap-2"><div class="flex flex-col gap-2"><div class="${ssrRenderClass(`flex px-4 items-center border-2 rounded-full hover:cursor-pointer hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out duration-500 ${unref(openInfo) ? "" : ""}`)}">${ssrInterpolate(unref(openInfo) ? "New Rundown" : "+ Add Rundown")}</div><div class="${ssrRenderClass(`flex gap-2 flex-col duration-1000 overflow-hidden ${unref(openInfo) ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="flex flex-col"> Title <input class="px-2 w-full" type="text"${ssrRenderAttr("value", unref(projectForm).title)}></div><div class="flex flex-col"> Venue <input class="px-2 w-full" type="text"${ssrRenderAttr("value", unref(projectForm).location)}></div><div class="flex items-center gap-2"><div class="flex w-full items-center gap-2"><div class="flex w-full items-center"> Start: <input type="datetime-local" class="w-full px-2"${ssrRenderAttr("value", unref(projectForm).start)}></div><div class="flex w-full items-center"> End: <input class="w-full items-center px-2" type="datetime-local"${ssrRenderAttr("value", unref(projectForm).end)}${ssrRenderAttr("min", unref(projectForm).start)}></div></div></div><div class="flex flex-col w-full"> Speaker / Moderator <textarea class="w-full px-2" rows="5" placeholder="Description">${ssrInterpolate(unref(projectForm).speaker)}</textarea></div><div class="flex flex-col w-full"> Notes <textarea class="w-full px-2" rows="5" placeholder="Notes">${ssrInterpolate(unref(projectForm).notes)}</textarea></div><button class="buttonAdd" style="${ssrRenderStyle({ "width": "100%" })}" type="submit"> Add </button></div></div></div> ${ssrInterpolate(unref(projectForm))}</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/project/rundown.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "user",
  __ssrInlineRender: true,
  props: ["setValue"],
  setup(__props) {
    const search = ref("");
    const searchResult = ref([]);
    const searchResultOpen = ref({ search: false, result: false });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>${ssrInterpolate(unref(searchResultOpen))} ${ssrInterpolate(unref(search))} <input type="text" list="browsers" class="w-full px-2"><div class="${ssrRenderClass(`flex flex-col mt-2 absolute child bg-white w-full  ${!((_b = (_a = unref(searchResult)) == null ? void 0 : _a.value) == null ? void 0 : _b.length) && "hidden"}  ${!unref(searchResultOpen).result && !unref(searchResultOpen).search && "hidden"} rounded-2xl max-h-[25vh] overflow-y-auto`)}"><!--[-->`);
      ssrRenderList(unref(searchResult).value, (item) => {
        _push(`<div class="whitespace-normal hover:bg-blue-700 hover:text-white hover:cursor-pointer px-4 rounded-full duration-500"><span class="font-bold">${ssrInterpolate(item.name)}</span><div class="">${ssrInterpolate(item.Partner.name)}</div>`);
        if (item.position) {
          _push(`<div class="italic">${ssrInterpolate(item.position)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div> ${ssrInterpolate((_d = (_c = unref(searchResult)) == null ? void 0 : _c.value) == null ? void 0 : _d.length)}</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/user.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "user",
  __ssrInlineRender: true,
  props: ["UserId"],
  async setup(__props) {
    let __temp, __restore;
    const { UserId } = __props;
    const { data: user, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${BASE_URL}/user/${UserId}`, "$Vhl7A4E49l")), __temp = await __temp, __restore(), __temp);
    const userLevelColor = (value) => {
      if (value == "Pengurus")
        return "text-emerald-600";
      else if (value == "PMO")
        return "text-yellow-600";
      else if (value == "Guest")
        return "text-blue-600";
      else if (value == "Direksi")
        return "text-red-600";
      else
        return "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between primeBox text-sm px-2 hover:text-white hover:bg-red-500 hover:cursor-pointer" }, _attrs))}><div class="text-center"><div class="font-bold">${ssrInterpolate(unref(user).name)}</div><div class="text-sm">${ssrInterpolate(unref(user).Partner.name)}</div></div><div class="${ssrRenderClass(`flex items-center  ${userLevelColor(unref(user).UserLevel.name)}`)}"><span class="${ssrRenderClass(`text-base`)}">\u29BF <span class="text-xs">${ssrInterpolate(unref(user).UserLevel.name)}</span></span></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/user.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "invitation",
  __ssrInlineRender: true,
  setup(__props) {
    const { project } = useProject();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchUser = __nuxt_component_0$1;
      const _component_CardsUser = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><div><label>Name</label>`);
      _push(ssrRenderComponent(_component_SearchUser, {
        "set-value": unref(project).invitation
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(unref(project).invitation, (item) => {
        _push(ssrRenderComponent(_component_CardsUser, { UserId: item }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/project/invitation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "box",
  __ssrInlineRender: true,
  props: [
    "apiRoute",
    "setValue",
    "titleField",
    "descriptionField"
  ],
  setup(__props) {
    ref("");
    const searchResult = ref([]);
    const searcValueBox = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><input type="text" list="browsers" class="w-full"><div class="${ssrRenderClass(`flex flex-col mt-2 absolute child bg-white w-full  ${!((_b = (_a = unref(searchResult)) == null ? void 0 : _a.value) == null ? void 0 : _b.length) && "hidden"}  ${!unref(searcValueBox) && "hidden"} rounded-2xl max-h-[25vw] overflow-scroll`)}"><!--[-->`);
      ssrRenderList(unref(searchResult).value, (item) => {
        _push(`<div class="whitespace-normal hover:bg-blue-700 hover:text-white hover:cursor-pointer px-4 rounded-full duration-500"><span class="font-bold">${ssrInterpolate(item[__props.titleField])}</span><div class="italic">${ssrInterpolate(item[__props.descriptionField])}</div></div>`);
      });
      _push(`<!--]--></div> ${ssrInterpolate((_d = (_c = unref(searchResult)) == null ? void 0 : _c.value) == null ? void 0 : _d.length)}</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/box.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "sinergy",
  __ssrInlineRender: true,
  setup(__props) {
    const { project } = useProject();
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchBox = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SearchBox, {
        "set-value": unref(project).sinergy,
        "api-route": "/partner/search/",
        "title-field": "name",
        "description-field": "chief"
      }, null, _parent));
      _push(`<div><div class="flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(project).sinergy, (item, index) => {
        _push(`<text class="cursor-pointer hover:text-red-700">${ssrInterpolate(item)}${ssrInterpolate(index < unref(project).sinergy.length - 1 ? " | " : "")}</text>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/project/sinergy.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { trace } = useTrace();
    const { project } = useProject();
    [__temp, __restore] = withAsyncContext(() => useFetch(`${BASE_URL}/program/${trace.value.ProgramId}`, "$7WoIUl4hqU")), __temp = await __temp, __restore();
    const { data: PartnerDetail, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/partner/${trace.value.PartnerId}`,
      "$2XGYcNrLCs"
    )), __temp = await __temp, __restore(), __temp);
    const projectStatus = (value) => {
      if (value == 100)
        return {
          BarColor: "accent-emerald-500",
          title: "Complete",
          text: "text-emerald-500"
        };
      else if (value == 50)
        return {
          BarColor: "accent-orange-500",
          text: "text-orange-500",
          title: "On Going"
        };
      else
        return {
          BarColor: "accent-red-500",
          text: "text-red-500",
          title: "On Hold"
        };
    };
    const activeTab = useState("tab", () => "info");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_FormsProjectInfo = __nuxt_component_0$2;
      const _component_FormsProjectBackground = __nuxt_component_1$1;
      const _component_FormsProjectRundown = __nuxt_component_2$1;
      const _component_FormsProjectInvitation = __nuxt_component_3;
      const _component_FormsProjectSinergy = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5" }, _attrs))}>${ssrInterpolate(unref(project))} <div class="flex flex-col items-center"><div class="flex flex-col items-center"><label class="text-xl font-bold">${ssrInterpolate((_a = unref(PartnerDetail)) == null ? void 0 : _a.name)}</label><div class="flex flex-col"><div class="flex gap-2"><div class="flex items-center">Project Status:</div><div class="${ssrRenderClass(`${projectStatus(unref(project).info.status).text}`)}">${ssrInterpolate(projectStatus(unref(project).info.status).title)}</div></div><input type="range" min="0" max="100" step="50" class="${ssrRenderClass(`${projectStatus(unref(project).info.status).BarColor} p-0`)}"${ssrRenderAttr("value", unref(project).info.status ? unref(project).info.status : 0)}></div></div><div class="flex w-[50vw] justify-around gap-2"><div class="${ssrRenderClass(
        unref(activeTab) == "info" ? "flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center" : "flex justify-center border-b-4 w-full cursor-pointer	items-center text-center"
      )}"> Info </div><div class="${ssrRenderClass(
        unref(activeTab) == "background" ? "flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center" : "flex justify-center border-b-4 w-full cursor-pointer	items-center text-center"
      )}"> Background </div><div class="${ssrRenderClass(
        unref(activeTab) == "rundown" ? "flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center" : "flex justify-center border-b-4 w-full cursor-pointer	items-center text-center"
      )}"> Rundown </div><div class="${ssrRenderClass(
        unref(activeTab) == "invitation" ? "flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center" : "flex justify-center border-b-4 w-full cursor-pointer	items-center text-center"
      )}"> Invitation </div><div class="${ssrRenderClass(
        unref(activeTab) == "sinergy" ? "flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center" : "flex justify-center border-b-4 w-full cursor-pointer	items-center text-center"
      )}"> Sinergy </div></div><div class="flex flex-col p-2 h-[75vh] xl:p-10 py-5 w-[100vw] xl:w-[50vw]">`);
      if (unref(activeTab) == "info") {
        _push(ssrRenderComponent(_component_FormsProjectInfo, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) == "background") {
        _push(ssrRenderComponent(_component_FormsProjectBackground, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) == "rundown") {
        _push(ssrRenderComponent(_component_FormsProjectRundown, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) == "invitation") {
        _push(ssrRenderComponent(_component_FormsProjectInvitation, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) == "sinergy") {
        _push(ssrRenderComponent(_component_FormsProjectSinergy, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/project/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { trace } = useTrace();
    [__temp, __restore] = withAsyncContext(() => useFetch(`${BASE_URL}/program/${trace.value.ProgramId}`, "$lefonFmswU")), __temp = await __temp, __restore();
    const { data: PartnerDetail, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/partner/${trace.value.PartnerId}`,
      "$yLI7WouNWS"
    )), __temp = await __temp, __restore(), __temp);
    useState("tab", () => "info");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_FormsProject = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`
        ${ssrInterpolate((_a = unref(PartnerDetail)) == null ? void 0 : _a.name)}
      `);
                } else {
                  return [
                    createTextVNode("\n        " + toDisplayString((_b = unref(PartnerDetail)) == null ? void 0 : _b.name) + "\n      ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createTextVNode("\n        " + toDisplayString((_a = unref(PartnerDetail)) == null ? void 0 : _a.name) + "\n      ", 1)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormsProject, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-iPI7bH3b.mjs.map
