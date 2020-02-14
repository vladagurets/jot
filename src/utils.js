import { members } from 'src/constants'

export const getMembers = () => members

export const getMember = index => getMembers()[index]