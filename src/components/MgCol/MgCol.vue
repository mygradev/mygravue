<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
import { colors, paddingprops, marginprops } from '../vars';

export default {
  name: 'MgCol',
  props: {
    bg: String,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    ...paddingprops,
    ...marginprops,
  },
  data: () => ({
    className: 'col',
  }),
  created() {
    if (this.bg) this.className = `${this.className} bg-${colors.filter(c => c === this.bg).join('')}`;
    if (this.xs) this.className = `${this.className} xs${this.xs}`;
    if (this.sm) this.className = `${this.className} sm${this.sm}`;
    if (this.md) this.className = `${this.className} md${this.md}`;
    if (this.lg) this.className = `${this.className} lg${this.lg}`;

    Object.keys(paddingprops).forEach((p) => {
      if (this[p]) this.className = `${this.className} ${p}${this[p]}`;
    });

    Object.keys(marginprops).forEach((m) => {
      if (this[m]) this.className = `${this.className} ${m}${this[m]}`;
    });
  },
};
</script>
