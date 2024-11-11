
import tasks from "./database/db.jsx"

export default function AppMain() {
    const welcome = 'Welcome to my React App'

    const inProgress = tasks.filter(task =>
        task.state === "in_progress" || task.state === "backlog");

    const counterInProgress = Number(inProgress.length)

    const completed = tasks.filter(task =>
        task.state === 'completed'
    )
    const counterCompleted = Number(completed.length)

    return (
        <main>
            <h3>
                {welcome}
            </h3>
            <section className="Current">
                <h3>Current Tasks ({counterInProgress})</h3>
                <ul>
                    {inProgress.map(task => (
                        <li key={task.id}>
                            <strong>{task.title}</strong> <span className="state">{task.state}</span> <br />
                            Priority : {task.priority} <br />
                            Estimated Time : {task.estimatedTime}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="Completed">
                <h3>Completed Tasks  ({counterCompleted})</h3>
                <ul>
                    {completed.map(task => (
                        <li key={task.id}>
                            <strong>{task.title}</strong>  <span className="state">{task.state}</span> <br />
                            Priority : {task.priority} <br />
                            Estimated Time : {task.estimatedTime}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )

}