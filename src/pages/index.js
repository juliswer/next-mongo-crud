import {useRouter} from 'next/router';
import {Button, Card, Container, Grid} from 'semantic-ui-react';

export default function HomePage({tasks}) {
  
  const router = useRouter();

  if (tasks.length == 0) return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <h1>There are not tasks yet</h1>
          <img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt="Not tasks yet" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

  // Render a list of tasks
  return (
    <Container style={{padding: '20px'}}>
      <Card.Group itemsPerRow={4}>
        {
          tasks.map(task => (
            <Card key={task._id}>
              <Card.Content>
                <Card.Header>{task.title}</Card.Header>
                <p>{task.description}</p>
              </Card.Content>
              <Card.Content extra>
                <Button primary onClick={() => router.push(`/tasks/${task._id}`)}>View</Button>
                <Button primary>Edit</Button>
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