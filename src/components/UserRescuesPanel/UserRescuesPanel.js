import { NavLink } from '~/components/Nav'
import { useUserRescues } from '~/hooks/rescueHooks'

import styles from './UserRescuesPanel.module.scss'



function UserRescuesPanel () {
  const rescues = useUserRescues()

  return (
    <table className={styles.userRescues}>
      <thead>
        <tr>
          <td>{'Client'}</td>
          <td>{'Paperwork'}</td>
        </tr>
      </thead>
      <tbody>
        {
          rescues?.map((rescue) => {
            console.log(rescue)
            return (
              <tr key={rescue.id}>
                <td>{rescue.attributes?.client}</td>
                <td>
                  <NavLink href={`/paperwork/${rescue.id}`}>{'Link'}</NavLink>
                </td>
              </tr>
            )
          }) ?? null
        }
      </tbody>
    </table>
  )
}





export default UserRescuesPanel
