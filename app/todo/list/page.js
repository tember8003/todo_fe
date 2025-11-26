import TodoListCP from "@/components/todo/todoListCP";

export const metadata = {
 title: 'Todo List Page',
 description: 'This is a Todo List Page',
 openGraph: {
   title: 'Todo List',
   description: 'This is a description'
 },
};


export default async function TodoListPage({searchParams}) {

  const query = await searchParams;

  //쿼리 스트링은 문자열이므로
  const page = query?.page ||'1';

  const queryObj = new URLSearchParams()
  queryObj.set('page', page);

  const res = await fetch(`http://localhost:8080/api/todos/list?page= ${page}`);

  const result = await res.json();

  console.log(page);

  return (
    <div>
      <div>Todo List Page </div>

      <TodoListCP data={result} queryObj={queryObj} ></TodoListCP>

    </div>
  )

}