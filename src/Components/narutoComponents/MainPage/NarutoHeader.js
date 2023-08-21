import { Link } from 'react-router-dom'

const NarutoHeader = () => {
    return (
        <header className='navBar'>
            <h1>World of Naruto: Jutsu Maker</h1>
            <nav>
                <Link to='/naruto/homePage'>
                    <button>Home</button>
                </Link>
                <Link to='/naruto/villages'>
                    <button>Villages</button>
                </Link>
                <Link to='/naruto/handSigns'>
                    <button>Hand Signs</button>
                </Link>
                <Link to='/naruto/createJutsu'>
                    <button>Create Your Own Jutsu!</button>
                </Link>
            </nav>
        </header>
    )
}

export default NarutoHeader