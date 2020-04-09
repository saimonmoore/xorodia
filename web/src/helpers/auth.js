export const firstName = (authUser) => {
  return authUser.given_name || authUser.name || authUser.nickname
}

export const lastName = (authUser) => {
  return authUser.middle_name
    ? authUser.middle_name || authUser.family_name || authUser.name
    : authUser.family_name || authUser.name
}

export const lastName2 = (authUser) => {
  return authUser.middle_name ? authUser.family_name || authUser.name : ''
}

export const gender = (authUser) => {
  return (authUser.gender && authUser.gender.toUpperCase()) || 'FEMALE'
}

export const picture = (authUser) => {
  return authUser.picture || 'defaultAvatar.png'
}
