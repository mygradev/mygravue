<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'MgRow',
  props: {
    wrap: Boolean,
  },
  data: () => ({
    className: 'row',
  }),
  created() {
    if (this.wrap) className = ``
  },
};
</script>
