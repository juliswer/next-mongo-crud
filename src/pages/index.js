import {Button, Card, Container, Grid} from 'semantic-ui-react';

export default function HomePage({tasks}) {
  

  // Render a list of tasks
  return (
    <Container>
      <Card.Group itemsPerRow={4}>
        {
          tasks.map(task => (
            <Card key={task._id}>
              <Card.Content>
                <Card.Header>{task.title}</Card.Header>
              </Card.Content>
            </Card> 
          ))
        }
      </Card.Group>
    </Container>
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