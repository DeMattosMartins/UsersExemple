import { users } from '../data/users'
import { UserCard } from '../components/UserCard'

export const AllUsers = () => {
  return (
    <div className="w-full min-h-full px-4 py-6">
      <div className="max-w-xl mx-auto flex flex-col gap-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
