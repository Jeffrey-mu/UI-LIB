<template><div><h1 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮" aria-hidden="true">#</a> 按钮</h1>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<demo customClass="" sourceCode="&lt;button-01&gt;&lt;/button-01&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code v-pre>type</code>、<code v-pre>plain</code>、<code v-pre>round</code>和<code v-pre>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;button-01&gt;&lt;/button-01&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></div></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_button_01 = _resolveComponent("button-01")

  return (_openBlock(), _createBlock(_component_button_01))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>