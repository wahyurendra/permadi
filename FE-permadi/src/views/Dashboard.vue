<script setup>
import { useLayout } from '@/layout/composables/layout';
import { faBolt, faCogs, faGaugeHigh, faServer, faTemperature0, faTemperatureFull, faTriangleExclamation, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const { getPrimary, getSurface, isDarkTheme } = useLayout();


</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-6 xl:col-span-4">
            <div class="card mb-0">

                <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-emerald-100 dark:bg-emerald-400/10 rounded-border" style="width: 7rem; height: 7rem">
                                <FontAwesomeIcon :icon="faServer" :style="{ color: '#059669' }" size="3x"   />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <div class="text-center text-surface-900 dark:text-surface-0 font-medium text-xl">50</div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <span class="flex item-center block font-medium mb-4">Machine</span>
                        </div>
                </div>
                <div class="text-center text-surface-900 dark:text-surface-0 font-large text-xl">Total Device</div>
                    
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-2">
            <div class="card mb-0">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 7rem; height: 7rem">
                                <FontAwesomeIcon :icon="faTemperatureFull" :style="{ color: '#2563eb' }" size="3x"   />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <div class="text-center text-surface-900 dark:text-surface-0 font-medium text-xl">03</div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <span class="flex item-center block font-medium mb-4">Machines</span>
                        </div>
                </div>
                <div class="text-center text-surface-900 dark:text-surface-0 font-large text-xl">Heat Dissipation</div>

            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-2">
            <div class="card mb-0">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-amber-100 dark:bg-amber-400/10 rounded-border" style="width: 7rem; height: 7rem">
                                <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: '#ca8a04' }" size="3x"   />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <div class="text-center text-surface-900 dark:text-surface-0 font-medium text-xl">02</div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <span class="flex item-center block font-medium mb-4">Machines</span>
                        </div>
                </div>
                <div class="text-center text-surface-900 dark:text-surface-0 font-large text-xl">Rotational Speed</div>

            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-2">
            <div class="card mb-0">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 7rem; height: 7rem">
                                <FontAwesomeIcon :icon="faCogs" :style="{ color: '#ea580c' }" size="3x" />
                                <FontAwesomeIcon :icon="faBolt" :style="{ color: '#ea580c' }" size="3x" />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <div class="text-center text-surface-900 dark:text-surface-0 font-medium text-xl">06</div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <span class="flex item-center block font-medium mb-4">Machines</span>
                        </div>
                </div>
                <div class="text-center text-surface-900 dark:text-surface-0 font-large text-xl">Power</div>

            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-2">
            <div class="card mb-0">
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-sky-100 dark:bg-sky-400/10 rounded-border" style="width: 7rem; height: 7rem">
                                <FontAwesomeIcon :icon="faWrench" :style="{ color: '#0284c7' }" size="3x"   />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <div class="text-center text-surface-900 dark:text-surface-0 font-medium text-xl">06</div>
                        </div>
                        <div class="flex items-center col-span-2">
                            <span class="flex item-center block font-medium mb-4">Machines</span>
                        </div>
                </div>
                <div class="text-center text-surface-900 dark:text-surface-0 font-large text-xl">Tool Wear</div>

            </div>
        </div>



        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: !isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: !isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 1</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-red-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div>
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 2</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <!-- <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   /> -->
                            </div>
                        </div>
                        <!-- <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div> -->
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: !isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: !isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 3</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-red-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   />
                            </div>
                        </div>
                        <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div>
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 4</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-green-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <!-- <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   /> -->
                            </div>
                        </div>
                        <!-- <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div> -->
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 5</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-green-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <!-- <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   /> -->
                            </div>
                        </div>
                        <!-- <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div> -->
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 6</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-green-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <!-- <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   /> -->
                            </div>
                        </div>
                        <!-- <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div> -->
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 7</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-green-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <!-- <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   /> -->
                            </div>
                        </div>
                        <!-- <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div> -->
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0" :style="{ backgroundColor: isDarkTheme ? '#FFE2E3' : '#D0FBE7', border: isDarkTheme ? '2px solid red' : '2px solid green' }">
                <div class="flex justify-between mb-4">
                    <div>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">Machine 8</div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4">
                        <div class="row-span-3 ...">
                            <div class="flex items-center justify-center bg-green-100 dark:bg-red-400/10 rounded-border" style="width: 5rem; height: 5rem">
                                <!-- <FontAwesomeIcon :icon="faTriangleExclamation" :style="{ color: 'red' }" size="2x"   /> -->
                            </div>
                        </div>
                        <!-- <div class="flex items-center col-span-2 row-span-3">
                            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">4 Alert</div>

                        </div> -->
                    </div>
                        
                    
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faTemperature0" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg"  />
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8 K</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Heat Dissipation</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faCogs" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />
                            <FontAwesomeIcon :icon="faBolt" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">8000 W</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Power <b>Failure</b></span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faGaugeHigh" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">1300 RPM</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Rotational Speed</span>
                    </div>
                </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 5rem; height: 5rem">
                            <FontAwesomeIcon :icon="faWrench" :style="{ color: { 'white': isDarkTheme, 'red': !isDarkTheme } }" size="lg" />

                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">240 MIN</div>
                    </div>
                    <div class="row-span-2 col-span-2 ...">
                        <span class="text-muted-color">Tool Wear</span>
                    </div>
                </div>
                
            </div>
        </div>
        


    </div>
</template>
