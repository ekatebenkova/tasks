import './Column.scss';
import Task from '../Task/Task';

const Column = () => {
  return (
    <>
        <div className="column">
          <header>Задачи</header>
          <ul className='task-list'>
            <Task />
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
            <li className='task-item'>first</li>
            <li className='task-item'>second</li>
          </ul>
          <footer>Добавить новую задачу</footer>
        </div>
    </>
  )
}

export default Column;