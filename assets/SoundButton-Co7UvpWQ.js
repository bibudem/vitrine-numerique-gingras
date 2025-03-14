import{d as a,r as s,ay as l,aS as r,o as u,Z as d,aT as c}from"./vendor-D1O0VZ-0.js";import{_ as i}from"./app-ClsqN_Md.js";const v=`<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 27a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM35 24.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM47.5 27a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="currentColor"/></svg>
`,p=`<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <!-- Speaker body -->
  <path class="line1" fill="currentColor" d="M15 44.167V5.5A2.51 2.51 0 0 1 17.5 3 2.51 2.51 0 0 1 20 5.5v38.667a2.51 2.51 0 0 1-2.5 2.5 2.51 2.51 0 0 1-2.5-2.5Z"/>
  
  <!-- Largest sound wave -->
  <path class="line2" fill="currentColor" d="M45 11.5c0-1.374 1.126-2.5 2.5-2.5s2.5 1.126 2.5 2.5v26.667a2.51 2.51 0 0 1-2.5 2.5 2.51 2.51 0 0 1-2.5-2.5V11.5Z"/>
  
  <!-- Middle sound wave -->
  <path class="line3" fill="currentColor" d="M30 29.833a2.51 2.51 0 0 0 2.5 2.5 2.51 2.51 0 0 0 2.5-2.5v-10c0-1.373-1.126-2.5-2.5-2.5a2.509 2.509 0 0 0-2.5 2.5v10Z"/>
  
  <!-- Smallest sound wave -->
  <path class="line4" fill="currentColor" d="M0 35.667V14a2.51 2.51 0 0 1 2.5-2.5A2.51 2.51 0 0 1 5 14v21.667a2.51 2.51 0 0 1-2.5 2.5 2.51 2.51 0 0 1-2.5-2.5Z"/>
</svg>
`,m=a({name:"SoundButton",props:{theme:{type:String,default:"university"}},setup(e){const n=s(Howler._muted),o=()=>{n.value=!n.value,Howler.mute(n.value)};return{...l(e),mute:n,SoundOffSVG:v,SoundOnSVG:p,toggleSound:o}}}),f={class:"SoundButton"};function S(e,n,o,g,h,w){const t=r("ui-button");return u(),d("div",f,[c(t,{class:"btn",theme:"icon",variant:e.theme,"icon-selected":e.SoundOffSVG,icon:e.SoundOnSVG,selected:e.mute,"data-mute":e.mute,highlight:!1,onClick:e.toggleSound},null,8,["variant","icon-selected","icon","selected","data-mute","onClick"])])}const Z=i(m,[["render",S],["__scopeId","data-v-3305d770"]]);export{Z as S,p as a,v as b};
//# sourceMappingURL=SoundButton-Co7UvpWQ.js.map
