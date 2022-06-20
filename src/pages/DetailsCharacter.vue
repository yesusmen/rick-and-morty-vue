<template>
    <div class="w-full mx-auto h-[calc(100vh-80px)] inset-0 bg-[#202329] flex items-center justify-center">
        
        <div class="max-w-[980px] w-full mx-auto h-1/2 rounded-2xl bg-[#3C3E44] p-16">
            <Suspense>
                <div class="flex">
                    <img :src="getCharacter?.image" :alt="getCharacter?.name">
                    <div class="ml-6 mt-4">
                        <h1 class="text-4xl font-bold text-orange-600">{{ getCharacter?.name }}</h1>
                        <p class="mt-4 text-xl">Status: <strong>{{ getCharacter?.status }}</strong></p>
                        <p class="mt-4 text-xl">species: <strong>{{ getCharacter?.species }}</strong></p>
                        <p class="mt-4 text-xl">type: <strong>{{ getCharacter?.type }}</strong></p>
                        <p class="mt-4 text-xl">gender: <strong>{{ getCharacter?.gender }}</strong></p>
                        <div class="flex items-center justify-between mt-4">
                            <p class="text-xl mr-4">Origin: <strong>{{ getCharacter?.origin.name }}</strong></p>
                            <p class="text-xl">Location: <strong>{{ getCharacter?.location.name }}</strong></p>
                        </div>
                    </div>
                </div>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCharacterStore } from '../stores/characterStore'

const apiCharater = useCharacterStore()
const { id } = useRoute().params
const isLoading = ref<boolean>(true)

const getCharacter = computed(() => {
    return apiCharater.getCharacter
})

onMounted(async () => {
    await apiCharater.getById(id)
    isLoading.value = false
})

</script>
