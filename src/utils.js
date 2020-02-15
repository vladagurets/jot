import { members } from 'src/constants'

export const getMembers = () => members

export const getMember = index => getMembers()[index]

export const getScreenWidth = () => window.screen.width

export const getScreenHeight = () => window.screen.height

export const rnd = n => Math.floor(Math.random() * n)