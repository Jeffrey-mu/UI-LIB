<template>
  <div class="box">
    <div class="loader"></div>
    <div
      class="loader"
      style="--c: radial-gradient(red, blue); --s: 100px"
    ></div>
    <div
      class="loader"
      style="
        --c: repeating-linear-gradient(45deg, #000 0 10%, red 0 20%);
        --s: 120px;
      "
    ></div>
  </div>
</template>
<style scoped>
.loader {
  --s: 160px; /* control the size */
  --c: linear-gradient(135deg, #00a8c6, #8fbe00); /* control the coloration */

  display: grid;
  place-items: center;
  place-content: center;
  margin: 0 calc(var(--s) / 2);
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
}
.loader,
.loader:before,
.loader:after {
  height: var(--s);
  width: calc(var(--s) / 5);
  border-radius: var(--s);
  background: var(--c) calc(50% + var(--_i, 0) * 50%) / var(--s) var(--s);
  transform: translate(calc(var(--_i, 0s) * 200%));
  animation: l 0.6s infinite alternate calc(var(--_i, 0) * 0.3s) both;
}
.loader:before {
  --_i: -1;
}
.loader:after {
  --_i: 1;
}

@keyframes l {
  from {
    height: calc(var(--s) / 2);
  }
}

.box {
  margin: 0;
  height: 100vh;
  display: grid;
  place-content: center;
  place-items: center;
  grid-auto-flow: column;
  gap: 10px;
  background: pink;
}
</style>