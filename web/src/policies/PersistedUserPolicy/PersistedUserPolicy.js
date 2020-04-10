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
  isAuthenticating,
  authUser,
  login,
  logout,
  authResult,
}) => {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { email: authUser.email || 'foo' },
  })

  return {
    user: data && data.user,
    loading,
    error,
    isAuthenticated,
    isAuthenticating,
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

const PersistUser = ({
  authUser,
  isAuthenticated,
  isAuthenticating,
  loginFn,
  logoutFn,
  authResult,
  renderProp,
}) => {
  console.log(
    '[PersistUser] =====> isAuthenticating: ',
    isAuthenticating,
    ' isAuthenticated: ',
    isAuthenticated(),
    ' authUser: ',
    authUser
  )

  const email = isAuthenticated() ? authUser.email : 'foo'

  console.log('[PersistUser] email: ', email)

  const { data, loading, error } = useQuery(QUERY, {
    variables: { email },
  })
  const [
    createUser,
    { loading: isCreatingUser, error: userCreationError },
  ] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (data) => {
      // TODO: Dispatch notification
      console.log(
        '[PersistUser] created user: ',
        data,
        '...navigating to home!'
      )
      // cause a rerender so we query the user again
      navigate(routes.home())
    },
  })

  if ((isAuthenticating, loading || isCreatingUser)) return <Loading />
  if (error || userCreationError) {
    console.log('[PersistedUserPolicy] error ', error, userCreationError)

    const props = {
      currentUser: null,
      authUser,
      isAuthenticated,
      isAuthenticating,
      loginFn,
      logoutFn,
      authResult,
    }
    return <>{renderProp(props)}</>
  }

  const { user } = data
  console.log('[PersistedUserPolicy] got user: ', user)

  if (!user && authUser && authUser.email) {
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

  const props = {
    currentUser: user,
    authUser,
    isAuthenticated,
    isAuthenticating,
    loginFn,
    logoutFn,
    authResult,
  }

  return <>{renderProp(props)}</>
}

const PersistedUserPolicy = ({ children }) => {
  const {
    isAuthenticated,
    isAuthenticating,
    user,
    login: loginFn,
    logout: logoutFn,
    authResult,
  } = useAuth0Auth()

  return (
    <PersistUser
      authUser={user}
      isAuthenticated={isAuthenticated}
      isAuthenticating={isAuthenticating}
      loginFn={loginFn}
      logoutFn={logoutFn}
      authResult={authResult}
      renderProp={children}
    />
  )
}

export default PersistedUserPolicy
