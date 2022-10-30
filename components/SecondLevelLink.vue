<template>
  <Button class="flex items-center gap-2">
    <i :class="['fal', icon]"></i> <slot/>
  </Button>
</template>

<script>
export default {
  name: "SecondLevelLink",
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    }
  }
}
</script>