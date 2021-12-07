export default function TaskDetail({task}) {
    return <div> {JSON.stringify(task)} </div>;
}

export async function getServerSideProps({query: {id}}) {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`)
    

    if (res.status === 200) {
        const task = await res.json()
        return {
            props: {
                task
            }
        }
    }

    return {
        props: {
            error: {
                statusCode: res.status,
                statusText: "Invalid Id"
            }
        }
    }
}