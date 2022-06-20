import router from '../router';
<template>
    <nav class="w-full h-[80px] shadow-md inline-flex items-center">
        <div class="max-w-[1750px] w-full mx-2 lg:mx-auto flex items-center justify-between">
            <router-link to="/">
                <img class="w-14" src="../assets/img/rickandmorty.png" alt="logo rick marty">
            </router-link>
            <div>
                <router-link to="/" class="mr-4 text-[18px] font-bold hover:text-orange-600">Inicio</router-link>
                <router-link to="/about" class="mr-4 text-[18px] font-bold hover:text-orange-600">Acerca de...</router-link>
                <!-- <button class="border border-orange-600 py-2 px-6 rounded-xl hover:bg-orange-600 hover:text-white">
                    <router-link to="/support" class="text-[18px] font-bold ">Support VE</router-link>
                </button> -->
            </div>
        </div>
    </nav>
</template>
