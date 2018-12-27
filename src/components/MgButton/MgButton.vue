<template>
  <button
    :class="className"
    @click="click"
    @mousedown="mousedown"
    @mouseup="mouseup">{{text}}</button>
</template>

<script>
import { colors } from '../vars';

export default {
  name: 'MgButton',
  props: {
    type: String,
    color: String,
    text: String,
  },
  data: () => ({
    className: '',
  }),
  created() {
    this.className = `${this.getType} ${this.getColor}`;
  },
  computed: {
    getType() {
      const isexist = colors.filter(t => t === this.type) || false;
      return isexist ? `bg-${isexist}` : '';
    },
    getColor() {
      const className = colors.filter(t => t === this.color) || false;
      return className ? `text-${className}` : '';
    },
  },
  methods: {
    click(evt) {
      if (this.$listeners.click) {
        this.$listeners.click(evt);
      }
    },
    mousedown() {
      this.className = `click ${this.className}`;
    },
    mouseup() {
      this.className = this.className.split(' ').filter(c => c !== 'click').join(' ');
    },
  },
};
</script>
