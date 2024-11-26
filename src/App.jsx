import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const tasks = [
  {
    id: 1,
    title: 'Implementare la homepage',
    priority: 1,
    estimatedTime: 120,
    state: 'completed',
  },
  {
    id: 2,
    title: 'Sviluppare il menu di navigazione',
    priority: 2,
    estimatedTime: 60,
    state: 'completed',
  },
  {
    id: 3,
    title: 'Creare il footer del sito',
    priority: 3,
    estimatedTime: 30,
    state: 'completed',
  },
  {
    id: 4,
    title: 'Ottimizzare le performance',
    priority: 1,
    estimatedTime: 180,
    state: 'completed',
  },
  {
    id: 5,
    title: 'Scrivere test per i componenti',
    priority: 2,
    estimatedTime: 90,
    state: 'completed',
  },
  {
    id: 6,
    title: 'Implementare la pagina dei contatti',
    priority: 3,
    estimatedTime: 60,
    state: 'completed',
  },
  {
    id: 7,
    title: 'Aggiungere animazioni CSS',
    priority: 2,
    estimatedTime: 30,
    state: 'backlog',
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: 'in_progress',
  },
  {
    id: 9,
    title: 'Aggiornare la documentazione',
    priority: 3,
    estimatedTime: 60,
    state: 'backlog',
  },
  {
    id: 10,
    title: 'Rifattorizzare il codice CSS',
    priority: 2,
    estimatedTime: 90,
    state: 'in_progress',
  },
]

console.log(tasks)

function App() {


  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <section>
          <h3>Current tasks(4)</h3>
          <ul>
            {tasks.filter((task) => task.state !== 'completed').map((task) => (
              <li key={task.id}>
                <h5>{task.title}</h5>
                <div className=''>{task.state}</div>
                <div>{`Priority: ${task.priority}`}</div>
                <div>{`Est. time: ${task.estimatedTime}`}</div>
              </li>
            ))}

          </ul>
        </section>

        <hr />

        <section>
          <h3>Completed tasks(6)</h3>
          <ul>
            {tasks.filter((task) => task.state === 'completed').map((task) => (
              <li key={task.id}>
                <h5>{task.title}</h5>
                <div className='completed'>{task.state}</div>
                <div>{`Priority: ${task.priority}`}</div>
                <div>{`Est. time: ${task.estimatedTime}`}</div>

              </li>))}

          </ul>
        </section>

      </main>

    </>
  )
}

export default App
