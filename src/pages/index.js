export default function HomePage() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export async function getServerSideProps(){
  
  const res = await fetch('http://localhost:3000/api/tasks')
  const tasks = await res.json()
  console.log(tasks);
  
  return {
    props: {}
  }
}