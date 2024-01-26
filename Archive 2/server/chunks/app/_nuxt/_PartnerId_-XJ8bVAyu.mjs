import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { withAsyncContext, unref, useSSRContext, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { f as useRoute, e as useTrace } from '../server.mjs';
import { u as useFetch, B as BASE_URL } from './fetch-ggmUBFCO.mjs';
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

const _imports_0 = "" + buildAssetsURL("vision.Dn_11HuS.png");
const _imports_1 = "" + buildAssetsURL("driver.LlNUNFNj.png");
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "" + buildAssetsURL("phase.J2SK762_.png");
const _imports_4 = "data:image/png;base64,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";
const _imports_5 = "" + buildAssetsURL("partner.uxYaixRY.png");
const _imports_6 = "" + buildAssetsURL("priority.1gB_neZ0.png");
const _sfc_main$2 = {
  __name: "program-info",
  __ssrInlineRender: true,
  props: ["ProgramDetail"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2 primeBox" }, _attrs))}><div class="flex flex-col p-2"><h2>Visi Program</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramVisions, (vision) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_0)} class="object-contain" width="15"><div>${ssrInterpolate(vision.description)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col p-2"><h2>Pendorong Eksekusi Program</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramDrivers, (driver) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_1)} class="object-contain" width="15"><div>${ssrInterpolate(driver.description)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col p-2"><h2>KPI yang dipantau</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramIndicators, (indicator) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_2)} class="object-contain" width="15"><div>${ssrInterpolate(indicator.description)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col p-2"><h2>Tahapan Eksekusi</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramPhases, (phase) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_3)} class="object-contain" width="15"><div>${ssrInterpolate(phase.description)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col p-2"><h2>PIC (Komtap)</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramCommittee, (committee) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_4)} class="object-contain" width="15"><div>${ssrInterpolate(committee.Committee.name)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col p-2"><h2>Mitra Strategis</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramPartner, (partner) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_5)} class="object-contain" width="15"><div>${ssrInterpolate(partner.Partner.name)}</div></div>`);
      });
      _push(`<!--]--></div><div class="flex flex-col p-2"><h2>Keterkaitan 17 Program</h2><!--[-->`);
      ssrRenderList(__props.ProgramDetail.ProgramPriority, (priority) => {
        _push(`<div class="flex gap-2 items-start"><img${ssrRenderAttr("src", _imports_6)} class="object-contain" width="15"><div>${ssrInterpolate(priority.Priority.keyword)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/program-info.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "program-detail",
  __ssrInlineRender: true,
  props: ["data"],
  async setup(__props) {
    let __temp, __restore;
    useTrace();
    const openInfo = ref(false);
    const openProject = ref(false);
    const { data } = __props;
    const { data: ProgramDetail, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/program/${data.id}`,
      "$yi3HPkq2Ff"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardsProgramInfo = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "primeBox" }, _attrs))}><div class="flex flex-col primeBox"><div class="flex justify-between items-center px-4"><div class="flex flex-row"><h1 class="hover:cursor-pointer">${ssrInterpolate(__props.data.name)}</h1><div class="${ssrRenderClass(`flex justify-center items-center border-2 rounded-full w-4 h-4 text-xs font-bold text-slate-400 hover:cursor-pointer hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out duration-500 ${unref(openInfo) ? "border-lime-700 text-lime-700" : ""}`)}"> ! </div></div><div class="flex gap-2"><div class="${ssrRenderClass(`flex justify-center items-center border-2 border-black font-black rounded-full w-6 h-6 text-xs hover:cursor-pointer hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out duration-500`)}"> \u270E </div><div class="${ssrRenderClass(`flex justify-center items-center border-2 border-black font-black rounded-full w-6 h-6 text-xs hover:cursor-pointer hover:border-red-700 hover:text-white hover:bg-red-700 transition ease-in-out duration-500`)}"> x </div></div></div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openInfo) ? "max-h-[150vh]" : "max-h-[0vh]"}`)}">`);
      _push(ssrRenderComponent(_component_CardsProgramInfo, {
        ProgramDetail: unref(ProgramDetail) ? unref(ProgramDetail) : []
      }, null, _parent));
      _push(`</div><div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openProject) ? "max-h-[150vh] p-2 " : "max-h-[0vh]"}`)}"><div class="buttonAdd"><p class="">+ PROJECT / ACTIVITY</p></div><div class="flex items-center flex-wrap justify-around gap-2"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/program-detail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "[PartnerId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { PartnerId } = useRoute().params;
    const { trace } = useTrace();
    trace.value = { ...trace.value, PartnerId };
    trace.value.ProgramId && delete trace.value.ProgramId;
    const { data: ProgramPartner } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/program/department/${PartnerId}`,
      "$zuiscs07DS"
    )), __temp = await __temp, __restore(), __temp);
    const { data: PartnerDetail } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/partner/${PartnerId}`,
      "$yasr40e9f3"
    )), __temp = await __temp, __restore(), __temp);
    const { data: PartnerList } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${BASE_URL}/partner/institution/14a870b2-6f40-4120-9c3f-2d7c2379442d`,
      "$imhFE1V2Bv"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardsProgramDetail = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><select><!--[-->`);
      ssrRenderList(unref(PartnerList), (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}${ssrIncludeBooleanAttr(unref(PartnerId) == item.id) ? " selected" : ""}>${ssrInterpolate(item.name)}</option>`);
      });
      _push(`<!--]--></select><div class="flex flex-col items-center gap-2"><h1 class="line-none">${ssrInterpolate(unref(PartnerDetail).name)}</h1><span class="italic line-none">${ssrInterpolate(unref(PartnerDetail).chief)}</span></div><div class="flex flex-col gap-2 px-4"><div class="primeBox w-full p-2 gap-2 flex flex-col"><div class="buttonAdd"><p class="">+ Program</p></div><!--[-->`);
      ssrRenderList(unref(ProgramPartner), (program) => {
        _push(ssrRenderComponent(_component_CardsProgramDetail, { data: program }, null, _parent));
      });
      _push(`<!--]--></div><div class="primeBox w-full h-full"> Kegiatan Pengurus diluar Program <div class="p-2"><div class="buttonAdd"><p class="">+ Non-Program Activity</p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/program/[PartnerId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_PartnerId_-XJ8bVAyu.mjs.map
