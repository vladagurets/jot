import { members } from 'src/constants'

export const getMembers = () => members

export const getMember = id => getMembers().find(m => m.id === id)

export const getInitRoute = () => window.location.pathname + (window.location.hash || "")

export const getInitMemberId = () => getInitRoute().split('#')[1]