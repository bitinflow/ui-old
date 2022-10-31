<template>
  <Button class="flex items-center gap-2">
    <i :class="['fal', icon]"></i> <slot/>
  </Button>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "SecondLevelLink",
  components: {Button},
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    }
  }
}
</script>