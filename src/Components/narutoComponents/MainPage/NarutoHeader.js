import { Link } from 'react-router-dom'

const NarutoHeader = () => {
    return (
        <header className='navBar'>
            <h1>World of Naruto: Jutsu Maker</h1>
            <nav>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/villages'>
                    <button>Villages</button>
                </Link>
                <Link to='/handSigns'>
                    <button>Hand Signs</button>
                </Link>
                <Link to='/createJutsu'>
                    <button>Create Your Own Jutsu!</button>
                </Link>
            </nav>
        </header>
    )
}

export default NarutoHeader