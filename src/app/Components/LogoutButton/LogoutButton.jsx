import React from 'react'

import { doLogout } from '@/app/actions/index'

const LogoutButton = () => {
  return (
    <form action={doLogout}>
        <button type="submit">Logout</button>
    </form>
  )
}

export default LogoutButton