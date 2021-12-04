export default function HomePage() {
  console.log('frontend');
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  console.log('backend');

  return {
    props: {}
  }
}