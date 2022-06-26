import { createUUID } from 'services/generators/uuid'

export type UserID = string

export type User = {
  id: UserID
  name: string
  devices: string[]
}

type CustomUserProps = {
  name: string
  deviceId: string
}

export const createUser = (params: CustomUserProps): User => ({
  id: createUUID(),
  name: params.name,
  devices: [params.deviceId],
})
