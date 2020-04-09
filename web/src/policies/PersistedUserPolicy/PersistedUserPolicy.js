import { useQuery, useMutation } from '@redwoodjs/web'
import { routes, navigate } from '@redwoodjs/router'
import { useAuth as useAuth0Auth } from 'react-use-auth'
import Loading from 'src/components/Loading'
import { firstName, lastName, lastName2, gender, picture } from 'src/helpers'

const QUERY = gql`
  query FIND_USER_BY_EMAIL($email: String!) {
    user: userByEmail(email: $email) {
      id
      email
      firstName
      picture
    }
  }
`

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: UserInput!) {
    createUser(input: $input) {
      id
    }
  }
`
const useDbUser = ({
  isAuthenticated,
  authUser,
  login,
  logout,
  authResult,
}) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { email: authUser.email },
  })

  return {
    user: data.user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    authResult,
  }
}

export const useAuth = () => {
  const {
    isAuthenticated,
    user: authUser,
    login,
    logout,
    authResult,
  } = useAuth0Auth()

  return useDbUser({ isAuthenticated, authUser, login, logout, authResult })
}

const PersistUser = ({ children, authUser }) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { email: authUser.email },
  })
  const [
    createUser,
    { loading: isCreatingUser, error: userCreationError },
  ] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (data) => {
      console.log('[PersistUser] created user: ', data)
      // cause a rerender so we query the user again
      navigate(routes.home())
    },
  })

  if (loading || isCreatingUser) return <Loading />
  if (error || userCreationError) {
    console.log('[PersistedUserPolicy] error ', error, userCreationError)
    return <>{children}</>
  }

  const { user } = data
  console.log('[PersistedUserPolicy] got user: ', user)

  if (!user) {
    const userInput = {
      email: authUser.email,
      firstName: firstName(authUser),
      lastName: lastName(authUser),
      lastName2: lastName2(authUser),
      gender: gender(authUser),
      picture: picture(authUser),
    }

    createUser({ variables: { input: userInput } })
  }

  return <>{children}</>
}

const PersistedUserPolicy = ({ children }) => {
  const { isAuthenticated, user } = useAuth0Auth()

  if (!isAuthenticated) return <>{children}</>

  return <PersistUser authUser={user}>{children}</PersistUser>
}

export default PersistedUserPolicy
