import { d as useState } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const useActivity = () => {
  const activity = useState("activity", () => {
    return {
      info: {},
      outcome: [],
      attendance: [],
      discussion: [],
      todo: [],
      summary: ""
    };
  });
  return { activity };
};
const _sfc_main$1 = {
  __name: "info",
  __ssrInlineRender: true,
  setup(__props) {
    const { activity } = useActivity();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="flex gap-2 flex-col"><div class="flex flex-col"><label>Project name</label><input class="px-2" placeholder="Project name"${ssrRenderAttr("value", unref(activity).info.title)}></div><div class="flex flex-col"><label>Venue</label><input class="px-2" placeholder="Venue"${ssrRenderAttr("value", unref(activity).info.location)}></div><div class="flex flex-col"><div><label>Jenis Aktifitas</label></div><select name="activity" id="activity"${ssrRenderAttr("value", unref(activity).info.type)}><option disabled selected>Please choose the activity type</option><option value="seminar">Seminar</option><option value="training">Training</option><option value="rapat">Rapat</option><option value="forum">Forum</option><option value="expo">Expo</option><option value="undangan">Undangan</option><option value="festival">Festival</option><option value="event">Event</option><option value="fgd">FGD</option></select></div><div class="flex flex-col"><div class="flex gap-4 p-2"><div class="flex"><h3 class="me-2">Start</h3><div><input class="px-2" type="datetime-local"${ssrRenderAttr("value", unref(activity).info.start)}></div></div><div class="flex"><h3 class="me-2">End</h3><div><input class="px-2" type="datetime-local"${ssrRenderAttr("value", unref(activity).info.end)}${ssrRenderAttr("min", unref(activity).info.start)}></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/forms/activity/info.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const openContainer = ref({
      info: false,
      discussion: false,
      outcome: false,
      todo: false,
      attendance: false,
      summary: false
    });
    const { activity } = useActivity();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormsActivityInfo = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center" }, _attrs))}><div class="flex flex-col w-full xl:w-[75vw] gap-2"><div><div class="hover:cursor-pointer"> Activity Info </div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openContainer).info ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="p-2">`);
      _push(ssrRenderComponent(_component_FormsActivityInfo, null, null, _parent));
      _push(`</div></div></div><div><div class="hover:cursor-pointer"> Attendance </div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openContainer).attendance ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="flex flex-col gap-2 p-2"><div class="flex gap-2 flex-wrap"><div class="buttonAdd"> + Attendance </div></div><div class="grid xl:grid-cols-12 grid-cols-6 gap-2"><div class="flex items-center justify-center md:col-span-6 col-span-6 gap-2"><label class="flex flex-[1]" for="attendance-name">Name</label><input id="attendance-name" type="text" class="flex flex-[8] w-full"></div><div class="flex items-center justify-center md:col-span-6 col-span-6 gap-2"><label class="flex flex-[1]" for="attendance-institution">Institution</label><input id="attendance-institution" type="text" class="flex flex-[8] w-full"></div><div class="flex items-center justify-center col-span-6 md:col-span-6 gap-2"><label class="flex flex-[1]" for="attendance-position">Position</label><input id="attendance-position" type="text" class="flex flex-[8] w-full"></div></div></div></div></div><div><div class="hover:cursor-pointer"> Discussion </div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openContainer).discussion ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="flex flex-col gap-2 p-2"><div class="buttonAdd"> + Discussion </div><!--[-->`);
      ssrRenderList(unref(activity).discussion, (item, index) => {
        _push(`<div class="flex w-full gap-2"><textarea class="px-2 w-full">${ssrInterpolate(unref(activity).discussion[index])}</textarea><div class="buttonDelete p-2"> X </div></div>`);
      });
      _push(`<!--]--></div></div></div><div><div class="hover:cursor-pointer"> Outcome </div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openContainer).outcome ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="flex flex-col gap-2 p-2"><div class="buttonAdd"> + Outcome </div><!--[-->`);
      ssrRenderList(unref(activity).outcome, (item, index) => {
        _push(`<div class="flex w-full gap-2"><textarea class="px-2 w-full">${ssrInterpolate(unref(activity).outcome[index])}</textarea><div class="buttonDelete p-2"> X </div></div>`);
      });
      _push(`<!--]--></div></div></div><div><div class="hover:cursor-pointer"> Todo </div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openContainer).todo ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="flex flex-col gap-2 p-2"><div class="buttonAdd"> + Todo </div><!--[-->`);
      ssrRenderList(unref(activity).todo, (item, index) => {
        _push(`<div class="flex w-full gap-2"><textarea class="px-2 w-full">${ssrInterpolate(unref(activity).todo[index])}</textarea><div class="buttonDelete p-2"> X </div></div>`);
      });
      _push(`<!--]--></div></div></div><div><div class="hover:cursor-pointer"> Summary </div><div class="${ssrRenderClass(`primeBox duration-1000 overflow-hidden ${unref(openContainer).summary ? "max-h-[150vh]" : "max-h-[0vh]"}`)}"><div class="flex flex-col gap-2 p-2"><div class="flex w-full gap-2"><textarea class="px-2 w-full">${ssrInterpolate(unref(activity).summary)}</textarea></div></div></div></div></div> ${ssrInterpolate(unref(activity))}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activity/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-zCV6b2R2.mjs.map
