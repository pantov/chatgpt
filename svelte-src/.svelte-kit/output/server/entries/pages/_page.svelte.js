import { c as create_ssr_component, d as each, f as add_attribute, e as escape, h as null_to_empty } from "../../chunks/index.js";
import { marked } from "marked";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "textarea.svelte-1v9ixx4{width:100%;height:100px;background-color:transparent;border:1px solid #d6b8b8}div.system.svelte-1v9ixx4,div.assistant.svelte-1v9ixx4,div.user.svelte-1v9ixx4{padding:10px;margin:10px;border-radius:10px}div.system.svelte-1v9ixx4{background-color:#ccc}div.assistant.svelte-1v9ixx4{background-color:#ccf}div.user.svelte-1v9ixx4{background-color:#ffc}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ai_types = [
    { name: "Empty", value: "" },
    {
      name: "Coder",
      value: "You are a programming expert"
    }
  ];
  let chat = [];
  let textareaRef;
  $$result.css.add(css);
  return `<h1>ChatGPT</h1>

<p><select>${each(ai_types, (ai_type) => {
    return `<option${add_attribute("value", ai_type.value, 0)}>${escape(ai_type.name)}: ${escape(ai_type.value)}</option>`;
  })}</select>
<button>Начать новый чат</button></p>

${each(chat, (message) => {
    return `<div class="${escape(null_to_empty(message.role), true) + " svelte-1v9ixx4"}"><!-- HTML_TAG_START -->${marked(message.content)}<!-- HTML_TAG_END -->
    </div>`;
  })}

${`<div class="user svelte-1v9ixx4"><textarea placeholder="Здесь вводите свой вопрос" class="svelte-1v9ixx4"${add_attribute("this", textareaRef, 0)}>${""}</textarea>
        <button>Спросить (Ctrl+Enter)</button></div>`}`;
});
export {
  Page as default
};
