import { writable } from 'svelte/store'
import { getMembers } from 'src/utils'

export const curUser = writable(0)