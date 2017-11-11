import { actions, IPC_CHANNEL } from '../common/constants'
import { Action, ProcessDescription, SpawnOptions } from '../common/types'

export type SendToRenderer = (channel: string, action: Action<{}>) => void

let sendToRenderer: SendToRenderer = () => {
  throw new Error('uninitialized `sendToRenderer`')
}

export const setSendToRenderer = (send: SendToRenderer) => {
  sendToRenderer = send
}

export const sendProcessDescriptionCreateMessage = (description: ProcessDescription) => {
  sendToRenderer(IPC_CHANNEL, {
    type: actions.PROCESS_DESCRIPTION_CREATE,
    payload: description,
  })
}

export const sendProcessDescriptionRemoveMessage = (description: ProcessDescription) => {
  sendToRenderer(IPC_CHANNEL, {
    type: actions.PROCESS_DESCRIPTION_REMOVE,
    payload: description,
  })
}

export const sendProcessDescriptionUpdateMessage = (description: ProcessDescription) => {
  sendToRenderer(IPC_CHANNEL, {
    type: actions.PROCESS_DESCRIPTION_UPDATE,
    payload: description,
  })
}
