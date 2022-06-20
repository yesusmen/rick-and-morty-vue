<template>
    <div class="bg-[#202329]">
       
        <img src="../assets/img/header_rick_marty.jpg" alt="header rick and morty">
        
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-20 px-8" >

            <div class="bg-[#3C3E44] rounded-xl max-w-xl  lg:max-w-[600px] lg:max-h-[220px]" v-for="character in getCharacters" :key="character.id">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-[220px] w-full object-cover md:h-full md:w-[220px] rounded-tl-xl rounded-bl-xl" :src="character.image" :alt="character.name">
                    </div>
                    <div class="py-3 px-4">
                        <router-link :to="`/character/${character.id}`">
                            <h1 class="text-2xl font-bold text-white hover:cursor-pointer hover:text-orange-600" v-text="character.name"></h1>
                        </router-link>
                        <div class="flex items-center">
                            <EmojiHappyIcon class="h-4 w-4 mr-2 text-green-600" v-if="character.status == 'Alive'"/>
                            <EmojiSadIcon class="h-4 w-4  mr-2 text-red-600" v-else-if="character.status == 'Dead'"/>
                            <EmojiSadIcon class="h-4 w-4  mr-2 text-gray-600" v-else/>
                            <p class="text-white" v-text=" character.status + ' - ' + character.species"></p>
                        </div>
                        <div class="mt-4">
                            <p class="text-gray-400">Last known location:</p>
                            <h3 class="text-white hover:text-orange-600" v-text="character.location.name"></h3>
                        </div>
                        <div class="mt-4">
                            <p class="text-gray-400">First seen in:</p>
                            <h3 class="text-white hover:text-orange-600" v-text="character.origin.name"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- begin::Paginate -->
        <div class="py-10 px-4 flex items-center justify-between sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
            <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                Showing
        
                <span class="font-medium">1</span>
               
                to
               
                <span class="font-medium"></span>
               
                of
               
                <span class="font-medium"></span>
               
                pages
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-black bg-[#3C3E44] text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                </a>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
                <a href="#" class="bg-[#3C3E44] border-black text-gray-500 hover:bg-gray-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
                <a href="#" class="bg-[#3C3E44] border-black text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
                <span class="relative inline-flex items-center px-4 py-2 border border-black bg-[#3C3E44] text-sm font-medium text-gray-500"> ... </span>
                <a href="#" class="bg-[#3C3E44] border-black text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
                <a href="#" class="bg-[#3C3E44] border-black text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
                <a href="#" class="bg-[#3C3E44] border-black text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-black bg-[#3C3E44] text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                </a>
                </nav>
            </div>
            </div>
        </div>
        <!-- end::Paginate -->
        <!-- begin::Footer -->
        <div class="w-full mx-auto">
            <div class="flex items-center justify-center py-4">
                <a href="https://github.com/yesusmen" target="_blank">
                    <img class="w-10 mr-4" src="../assets/img/icon_github.svg" alt="icon github">
                </a>
                <a href="https://twitter.com/AraujoYesusmen" target="_blank">
                    <img class="w-10 mr-4" src="../assets/img/icon_twitter.svg" alt="icon twitter">
                </a>
                <a href="https://www.linkedin.com/in/yesusmen/" target="_blank">
                    <img class="w-8" src="../assets/img/icon_linkedin.svg" alt="icon linkedin">
                </a>
            </div>
            <div class="flex items-center justify-center mb-4">
                <img class="w-8 mr-4" src="../assets/img/netlify.svg" alt="logo netlify">
                <a href="https://www.netlify.com/" target="_blank">
                    <p class="text-sm text-gray-300 hover:text-orange-600">Deploy by Netlify</p>
                </a>
            </div>
            <div class="flex items-center justify-center pb-20">
                <img class="w-6 mr-2" src="../assets/img/icon_developer.svg" alt="icon developer">
                <p class="text-gray-300">by <strong class="mx-1"><a href="https://portafolio-yesus.netlify.app/" target="_blank" class="text-white hover:text-orange-600">Ing. Jesús E. Araujo G.</a></strong> 2022</p>
            </div>
        </div>
        <!-- end::Footer -->
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { EmojiHappyIcon, EmojiSadIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
import { useCharacterStore } from '../stores/characterStore'

const apiCharacters = useCharacterStore()

const getCharacters = computed(() => {
    return apiCharacters.getCharacters
})


onMounted(async () => {
    await apiCharacters.getAll()
})



</script>

<style>
</style>