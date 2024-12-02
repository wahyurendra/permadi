<script>
import { useLayout } from '@/layout/composables/layout';
const { getPrimary, getSurface, isDarkTheme } = useLayout();

  
  export default {
    name: "App",
    components: {

    },
    data() {
        return {
            modelPosition: { x: 0, y: 0, z: 0 },
            modelRotation: { x: 200, y: 0, z: 0 },
            componentKey: 0
        };
    },
    methods: {
    resetModel() {
      this.modelPosition = { x: -50, y: -30, z: 0 };
      this.modelRotation = { x: 200, y: 0, z: 0 };
      this.componentKey += 1;
    },
    },
  };


</script>

<template>
    <div id="app">
      <h1>Factory</h1>
      <div class="model-container">

        <vue3dLoader
            v-bind:key="componentKey"
            filePath="/3D/factory.fbx"
            :height="800"
            :position= modelPosition
            :rotation= modelRotation
            :scale="{ x: 1.5, y: 1, z: 1 }"
            :controls-options="{
            enablePan: true,
            }"
        ></vue3dLoader>
        <Button label="Reset" @click="resetModel" raised />
      </div>
    </div>
  </template>
  
  <style>
  .model-container {
    width: 100%;
    height: 500px;
  }
  </style>
  