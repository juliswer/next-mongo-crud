import {useRouter} from 'next/router';
import {Button, Card, Container, Grid} from 'semantic-ui-react';

export default function HomePage({tasks}) {
  
  const router = useRouter();

  if (tasks.length == 0) return (
    <Grid centered verticalAlign="middle" columns="1" style={{height: '80vh'}}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>There are not tasks yet</h1>
          <img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt="Not tasks yet" />
          <Button primary onClick={() => router.push("/tasks/new")}>
            Create Task
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

  // Render a list of tasks
  return (
    <Container style={{padding: '20px'}}>
      <Card.Group itemsPerRow={4}>
        <h2>hi</h2>
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