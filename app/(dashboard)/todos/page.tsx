// Reminder/Proof that is running on the server
//console.log(process.argv)

import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  //check error.tsx:
  //await new Promise((reject) => setTimeout(() => reject(), 2000))
  //check loading.tsx:
  //await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })

  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
