<template>
    <div :class="props.class">
    <Card>
      <CardHeader>
        <img class="small-image" :src="image" />
        <CardTitle>{{ name }}</CardTitle>
        <CardDescription>Launched in {{ yearLaunched }} </CardDescription>
        <Badge class="badge">{{ speciality }}</Badge>
      </CardHeader>
      <CardContent>
        <div><span class="italic">{{ description }}</span></div>
        <!-- <div><span>Vegetable: {{ toTitleCase(vegetable.name) }}</span><Icon @click="regenerate('vegetable')" name="akar-icons:arrow-cycle" class="cursor-pointer"/></div> -->
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
    </div>
  </template>

<style scoped>
.small-image {
  width: 200px;
  max-width: none;
}

.badge {
  width: fit-content;
}
</style>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  yearLaunched: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  speciality: {
    type: String,
    default: '',
  },
})


</script>

