import TodoReadCP from "@/components/todo/todoReadCP";

export const metadata = {
 title: 'Todo Read Page',
 description: 'This is a Todo List Page',
 openGraph: {
   title: 'Todo List',
   description: 'This is a description'
 },
};

export default async function TodoReadPage({params,searchParams}) {
  
  const paramObj = await params;
  const query = await searchParams;

  //쿼리 스트링은 문자열이므로
  const page = query?.page ||'1';
  const queryObj = new URLSearchParams()
  queryObj.set('page', page);

  //fetch
  const res = await fetch(`http://localhost:8080/api/todos/${paramObj.tno}`)

  if (res.status === 404) {
   const error = new Error('해당 할 일을 찾을 수 없습니다.');
   throw error;
  }


  const todo = await res.json()

  console.log(todo)

  return (
    <div>
      <TodoReadCP todo={todo} queryObj={queryObj}></TodoReadCP>
    </div>
  )

}