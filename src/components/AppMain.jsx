
import tasks from "./database/db.jsx"

export default function AppMain() {
    const welcome = 'Welcome to my React App'

    const inProgress = tasks.filter(task => task.state === "in_progress");

    return (
        <main>
            <h3>
                {welcome}
            </h3>
            <section className="Task4">
                <h3>Current Tasks</h3>
                <ul>
                    {inProgress.map(task => <li key={task.id}>{task.title}</li>)}
                </ul>
            </section>
        </main>
    )

}