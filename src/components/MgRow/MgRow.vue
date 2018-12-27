<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
import { colors } from '../vars';

export default {
  name: 'MgRow',
  props: {
    wrap: Boolean,
    bg: String,
  },
  data: () => ({
    className: 'row',
  }),
  created() {
    if (this.wrap) this.className = `${this.className} wrap`;
    if (this.bg) this.className = `${this.className} bg-${colors.filter(c => c === this.bg).join('')}`;
  },
};
</script>
