export interface IChatUsers {
  id: number
  name: string
  timestamp: string
  avatar: string
  chat: IChat[]
}

interface IChat {
  chat_id: number
  message: string
  timestamp: string
  isRecieved: boolean
}

export interface IMessage extends IChat {
  id: number
}
