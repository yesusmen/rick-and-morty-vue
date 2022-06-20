import { defineStore } from 'pinia'
import axios from 'axios'
import Character from '../interfaces/Character'

interface CharacterState {
    characterArr: Character[]
    character: Character | undefined
}

export const useCharacterStore = defineStore("character", {

    state: () : CharacterState => ({
        characterArr: [],
        character: undefined
    }),
    getters: {
        getCharacters(state){
            return state.characterArr
        },
        getCharacter(state){
            return state.character
        }
    },
    actions: {
        async getAll() {
            try {
                const url = 'https://rickandmortyapi.com/api/character'
                const result = await axios.get(url)
                this.characterArr = result.data.results
                console.log('Characters: ', this.characterArr)
            } catch (error) {
                console.log(error)
            }
        },
        async getById(id: any) {
            try {
                const url = `https://rickandmortyapi.com/api/character/${id}`
                const result = await axios.get(url)
                this.character = result.data
                console.log('Character: ', this.character)
            } catch (error) {
                console.log(error)
            }
        }
    }

}) 
