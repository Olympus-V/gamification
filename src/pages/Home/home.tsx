import { useNavigate } from 'react-router-dom';
import './home.scss'

const HomePage = () => {
    const navigate = useNavigate();
    return (

        <div className="buttons-container">
            <button
                onClick={() => { navigate('/SpinTheWheel') }}
               >
                Spin The Wheel
            </button>
            <button>Hurdle Cuddle</button>
            <button>Know Me Better</button>
            <button
                onClick={() => { navigate('/SpankBank') }}>
                Spank Bank
            </button>
            <button>Memory Lane</button>

        </div>

    )
}

export default HomePage;