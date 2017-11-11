import { homedir } from 'os'
import { resolve } from 'path'

export const MAKANE_HOME = resolve(homedir(), '.makane')

export const IPC_CHANNEL = 'IPC_CHANNEL'

export const actions = Object.freeze({
  PROCESS_DESCRIPTION_CREATE: 'PROCESS_DESCRIPTION_CREATE',
  PROCESS_DESCRIPTION_REMOVE: 'PROCESS_DESCRIPTION_REMOVE',
  PROCESS_DESCRIPTION_UPDATE: 'PROCESS_DESCRIPTION_UPDATE',
  PROCESS_OUTPUT: 'PROCESS_OUTPUT',
})
