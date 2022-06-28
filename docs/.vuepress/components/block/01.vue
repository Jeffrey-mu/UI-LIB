<template>
  <div id="card"></div>
</template>
<style scoped>
#card {
  --u: 3.45vmin;
  --c1: #95abc5;
  --c2: #566e8b;
  --c3: #394858;
  --c4: #22282e;
  --gp: 50% / calc(var(--u) * 8) calc(var(--u) * 8);
  height: 100vh;
  background: conic-gradient(
        from 231deg at 10% 42%,
        var(--c1) 0 116deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from -309deg at 90% 58%, var(--c1) 0 116deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 103deg at 58% 90%, var(--c4) 0 116deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(from -77deg at 42% 10%, var(--c4) 0 117deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(
        from 0deg at 50% 50%,
        var(--c2) 0 90deg,
        var(--c4) 0 101.5deg,
        var(--c3) 0 168.5deg,
        var(--c1) 0 180deg,
        var(--c2) 0 270deg,
        var(--c4) 0 281.5deg,
        var(--c3) 0 348.5deg,
        var(--c1) 0 360deg
      )
      var(--gp);
}
</style>