import { writable } from 'svelte/store'
import { getDefaultLang } from 'src/i18n'
import { getInitRoute, getInitMemberId } from 'src/utils'

export const lang = writable(getDefaultLang())
export const curRoute = writable(getInitRoute())
export const curUser = writable(getInitMemberId())