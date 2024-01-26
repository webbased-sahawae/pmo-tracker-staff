import { mergeProps, useSSRContext, ref, withAsyncContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useFetch, B as BASE_URL } from './fetch-ggmUBFCO.mjs';
import { _ as _export_sfc, e as useTrace, b as navigateTo } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const uniqueArray = (a) => [...new Set(a.map((o) => JSON.stringify(o)))].map((s) => JSON.parse(s));
const _sfc_main$3 = {
  __name: "button-to-add",
  __ssrInlineRender: true,
  props: ["title", "description"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "buttonAdd" }, _attrs))}><div class="px-2 font-bold">${ssrInterpolate(__props.title)}</div><div class="px-2 italic">${ssrInterpolate(__props.description)}</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/button-to-add.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "button-added",
  __ssrInlineRender: true,
  props: ["FieldId", "field"],
  async setup(__props) {
    let __temp, __restore;
    const { FieldId, field } = __props;
    const { data: partner, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/${field}/${FieldId}`,
      "$zCJgbBvxvB"
    )), __temp = await __temp, __restore(), __temp);
    console.log(`${BASE_URL}/${field}/${FieldId}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "buttonAdded md:w-[25vw] flex flex-col justify-center" }, _attrs))}><div class="flex px-2 font-bold w-full whitespace-pre-wrap text-center">${ssrInterpolate(unref(partner).name)}</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/button-added.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "program",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { trace } = useTrace();
    const stayPage = ref(true);
    if (!trace.value.PartnerId)
      [__temp, __restore] = withAsyncContext(() => navigateTo("/program")), await __temp, __restore();
    console.log(trace.value.PartnerId);
    const { data: PartnerDetail, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/partner/${trace.value.PartnerId}`,
      "$Mqt1DtkSay"
    )), __temp = await __temp, __restore(), __temp);
    const addProgram = ref({
      program: { PartnerId: trace.value.PartnerId },
      vision: [],
      driver: [],
      indicator: [],
      phase: [],
      committee: [],
      partner: [],
      priority: []
    });
    const committees = ref([]);
    const partners = ref([]);
    const priorities = ref([]);
    const addId = (fieldName, value) => {
      console.log(fieldName, value);
      addProgram.value[fieldName] = uniqueArray([
        ...addProgram.value[fieldName],
        value
      ]);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CardsButtonToAdd = __nuxt_component_0$1;
      const _component_CardsButtonAdded = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-2 flex-col" }, _attrs))}><h1 class="text-center uppercase">${ssrInterpolate((_a = unref(PartnerDetail)) == null ? void 0 : _a.name)}</h1><div class="flex flex-col"><h2>Program</h2><input placeholder="Nama Program"${ssrRenderAttr("value", unref(addProgram).program.name)}></div><div class="flex flex-col"><div><h2>Visi Program</h2></div><div class="flex flex-col gap-2"><!--[-->`);
      ssrRenderList(unref(addProgram).vision, (vision, index) => {
        _push(`<div class="flex flex-row gap-6 items-center"><textarea rows="2"${ssrRenderAttr("placeholder", `Visi program ke-${index + 1}`)} class="w-full">${ssrInterpolate(unref(addProgram).vision[index].description)}</textarea><div class="buttonDelete"${ssrRenderAttr("onclick", () => unref(addProgram).vision.splice(index, 1))}> X </div></div>`);
      });
      _push(`<!--]--><div class="buttonAdd"> Add vision </div></div></div><div class="flex flex-col"><h2>Pendorong Eksekusi Program</h2><div class="flex flex-col gap-2"><!--[-->`);
      ssrRenderList(unref(addProgram).driver, (driver, index) => {
        _push(`<div class="flex flex-row gap-6 items-center"><textarea rows="2"${ssrRenderAttr("placeholder", `Pendorong eksekusi program ke-${index + 1}`)} class="w-full">${ssrInterpolate(unref(addProgram).driver[index].description)}</textarea><div class="buttonDelete"${ssrRenderAttr("onclick", () => unref(addProgram).driver.splice(index, 1))}> X </div></div>`);
      });
      _push(`<!--]--><div class="buttonAdd"> Add Program Driver </div></div></div><div class="flex flex-col"><h2>KPI yang dipantau</h2><div class="flex flex-col gap-2"><!--[-->`);
      ssrRenderList(unref(addProgram).indicator, (indicator, index) => {
        _push(`<div class="flex flex-row gap-6 items-center"><textarea rows="2"${ssrRenderAttr("placeholder", `KPI yang dipantau ke-${index + 1}`)} class="w-full">${ssrInterpolate(unref(addProgram).indicator[index].description)}</textarea><div class="buttonDelete"${ssrRenderAttr("onclick", () => unref(addProgram).indicator.splice(index, 1))}> X </div></div>`);
      });
      _push(`<!--]--><div class="buttonAdd"> Add KPI </div></div></div><div class="flex flex-col"><h2>Tahapan Eksekusi</h2><div class="flex flex-col gap-2"><!--[-->`);
      ssrRenderList(unref(addProgram).phase, (phase, index) => {
        _push(`<div class="flex flex-row gap-6 items-center"><textarea rows="2"${ssrRenderAttr("placeholder", `Tahapan Eksekusi ke-${index + 1}`)} class="w-full">${ssrInterpolate(unref(addProgram).phase[index].description)}</textarea><div><h3>Execution periode</h3><select name="quarter"><option value="1">Q1</option><option value="2">Q2</option><option value="3">Q3</option><option value="4">Q4</option></select></div><div class="buttonDelete"${ssrRenderAttr("onclick", () => unref(addProgram).phase.splice(index, 1))}> X </div></div>`);
      });
      _push(`<!--]--><div class="buttonAdd"> Add Tahapan Eksekusi </div></div></div><div class="flex flex-col gap-2"><h2>PIC (Komtap)</h2><div class="flex gap-4"><div class="flex gap-2"><input placeholder="Type to search"><div class="flex gap-2"></div></div><div class="flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"><!--[-->`);
      ssrRenderList(unref(committees).value, (committee) => {
        _push(ssrRenderComponent(_component_CardsButtonToAdd, {
          title: committee.name,
          description: committee.chief,
          key: committee.id,
          onClick: ($event) => addId("committee", { CommitteeId: committee.id })
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(addProgram).committee.length) {
        _push(`<div class="flex flex-row flex-wrap gap-2 primeBox p-2 w-full"><!--[-->`);
        ssrRenderList(unref(addProgram).committee, (item, index) => {
          _push(ssrRenderComponent(_component_CardsButtonAdded, {
            FieldId: item.CommitteeId,
            field: "committee",
            onclick: () => unref(addProgram).committee.splice(index, 1),
            key: item.CommitteeId
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col gap-2"><h2>Mitra Strategis</h2><div class="flex gap-4"><div class="flex gap-2"><input placeholder="Type to search"><div class="flex gap-2"></div></div><div class="flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"><!--[-->`);
      ssrRenderList(unref(partners).value, (partner) => {
        _push(ssrRenderComponent(_component_CardsButtonToAdd, {
          title: partner.name,
          description: partner.chief,
          key: partner.id,
          onClick: ($event) => addId("partner", { PartnerId: partner.id })
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(addProgram).partner.length) {
        _push(`<div class="flex flex-row flex-wrap gap-2 primeBox p-2 w-full"><!--[-->`);
        ssrRenderList(unref(addProgram).partner, (item, index) => {
          _push(ssrRenderComponent(_component_CardsButtonAdded, {
            FieldId: item.PartnerId,
            field: "partner",
            onclick: () => unref(addProgram).partner.splice(index, 1),
            key: item.PartnerId
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col"><h2>Keterkaitan 17 Prioritas</h2><div class="flex gap-4"><div class="flex gap-2"><input placeholder="Type to search"><div class="flex gap-2"></div></div><div class="flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"><!--[-->`);
      ssrRenderList(unref(priorities).value, (priority) => {
        _push(ssrRenderComponent(_component_CardsButtonToAdd, {
          title: priority.name,
          description: priority.chief,
          key: priority.id,
          onClick: ($event) => addId("priority", { PriorityId: priority.id })
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(addProgram).priority.length) {
        _push(`<div class="flex flex-row flex-wrap gap-2 primeBox p-2 w-full"><!--[-->`);
        ssrRenderList(unref(addProgram).priority, (item, index) => {
          _push(ssrRenderComponent(_component_CardsButtonAdded, {
            FieldId: item.PriorityId,
            onclick: () => unref(addProgram).priority.splice(index, 1),
            field: "priority",
            key: item.PriorityId
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><div class="cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(unref(stayPage)) ? " checked" : ""}> Stay on this page after submit </div><div class="flex max-w-[100vw] gap-4"><button class="buttonAdd" style="${ssrRenderStyle({ "width": "100%" })}" type="submit"> Submit </button><button class="buttonDelete" style="${ssrRenderStyle({ "width": "100%" })}" type="button"${ssrRenderAttr(
        "onclick",
        () => {
          ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/program/${unref(trace).PartnerId}`);
        }
      )}> Cancel </button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/program.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormsProgram = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_FormsProgram, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/program/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const add = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { add as default };
//# sourceMappingURL=add-wHACPu0N.mjs.map
