<template>
    <div>   
        <div class="h-full flex flex-col">
      <!-- <AppHeader /> -->
      <div  class="flex-auto container mx-auto">
        <div class="h-full flex space-y-10 flex-col justify-center items-center">
        <div>
            <h1 class="text-xl">MISSION CONTROL</h1>
        </div>

        <div class="flex justify-center items-center flex-row gap-4">
            <RobotCard v-for="robot in allRobots" class="robot.name" :name="robot.name" :speciality="robot.speciality" :image="robot.image" :year-launched="robot.yearLaunched" :price="robot.price" :description="robot.description">
            </RobotCard>
        </div>
        
        
        <div id="my-superset-container" class="flex"></div>
      </div>
    </div>
    </div>
    
    </div>

</template>

<style scoped>
.logo-image {
    width: 75px;
    filter: grayscale(0.9);
}

#my-superset-container {
    margin-top: 20px;
    width: 1200px;
    height: 1000px;
}
#my-superset-container iframe {
    width: 100%;
    height: 100%;
}
</style>

<script setup lang="ts">
import { useRobots } from '~/stores/robots'
import { ref } from 'vue'
import { embedDashboard } from "@superset-ui/embedded-sdk";
import { useAxios } from '~/composables/useAxios';
import { useRuntimeConfig } from 'nuxt/app';

useAxios().get('/api/guest-token')
.then((response) => {
    const guestToken = response.data.token;
    embed(guestToken, "650c2a65-3655-42e9-8374-fdab8314702b", 'my-superset-container');
})

function embed(guestToken: string, dashboardId: string, htmlElement: string) {
    embedDashboard({
        id: dashboardId, // given by the Superset embedding UI
        supersetDomain:  useRuntimeConfig().public.superset.host, // e.g. "https://superset.mycompany.com" or "http://localhost:8088" (optional)
        mountPoint: document.getElementById(htmlElement), // any html element that can contain an iframe
        fetchGuestToken: () => guestToken,
        dashboardUiConfig: { // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional), urlParams (optional)
            hideTitle: true,
            filters: {
                expanded: false,
            }
        },
    }).then((dashboard) => {
    document.getElementsByTagName("iframe")[0].style["width"] = "100%";
    document.getElementsByTagName("iframe")[0].style["height"] = "100%";
    })
}



const robots = useRobots()

var allRobots = ref(robots.robots)

</script>
