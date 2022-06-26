import { User } from 'features/users/User'
import { useLocalStorage } from 'hooks/localStorage'

type UserStore = {
  currentUser: string
  users: User[]
}

const initialState: UserStore = {
  currentUser: '1c7c9571-585f-4f35-a748-06bbf94867d0',
  users: [
    {
      id: '1c7c9571-585f-4f35-a748-06bbf94867d0',
      name: 'Me',
      devices: ['9124fa33-0ec6-45c9-b6ca-d1ad4a0f69c3'],
    },
    {
      id: 'eb84ead7-0824-469b-aecc-fc1b6332628c',
      name: 'John Doe',
      devices: ['c6495dae-f7b9-4ccf-8a13-f425e58e2b8a'],
    },
  ],
}

type UseUserStoreReturn = [string, User[], (users: User[]) => void]

export function useUserStore(): UseUserStoreReturn {
  const [userStore, setUserStore] = useLocalStorage('users', initialState)

  const { currentUser, users } = userStore

  const setUsers = (users: User[]): void => {
    setUserStore({ currentUser, users })
  }

  return [currentUser, users, setUsers]
}
