<template>
<div id="tab-bar">
    <div class="tab-bar">
      <slot></slot>
    </div>
</div>

</template>

<script>


export default {
    name: 'TabBar'
}
</script>

<style>
#tab-bar {
    position: relative;
}
.tab-bar {
    display: flex;
    position: fixed;
    /* top: 100vh; */
    left: 0;
    right: 0;
    bottom: 0;
    /* height: 49px; */
    background-color: rgb(249, 245, 246);
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
    z-index: 2;
}
</style>