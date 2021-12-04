export default function HomePage({tasks}) {
  console.log(tasks);
  console.log('frontend');
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()

  return {
    props: {
      tasks
    }
  }
}