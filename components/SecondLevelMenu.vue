<template>
  <nav class="w-64 bg-white text-black shadow dark:bg-base-700 dark:text-white dark:border-base-900 dark:border-l
  flex flex-col overflow-y-auto h-screen absolute sm:relative transform -translate-x-full sm:translate-x-0 pt-10 pb-4 px-4 space-y-2">
    <span class="font-semibold px-4">
      <slot name="title"/>
    </span>
    <div class="flex flex-col gap-2 justify-between flex-1">
      <div class="flex flex-col gap-2">
        <slot/>
      </div>
      <div>
        <SecondLevelLink class="bg-zinc-100 hover:bg-zinc-200 dark:bg-base-500 dark:hover:bg-base-600"
          icon="fa-plus">
          Create Resource
        </SecondLevelLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SecondLevelMenu",
  props: {
    items: {
      type: Array,
      default: [
        {name: 'Test', href: 'Test'}
      ]
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  background: #f3f3f3;
}

.dark .nuxt-link-active {
  background: #464649;
}
</style>