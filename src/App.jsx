import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import { BrowserRouter as Router } from 'react-router-dom'

// import './App.css'
const cx = classNames.bind(styles)

function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <div className={cx('wrapper')}></div>
        </Router>
    )
}

export default App
