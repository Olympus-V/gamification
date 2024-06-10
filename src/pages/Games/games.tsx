import { useNavigate } from 'react-router-dom';
import './games.scss';

const GamesPage = () => {
    const navigate = useNavigate();
    return (
        <div className='games-page d-flex flex-col justify-content-center'>
            <div className='games-content d-flex flex-row justify-content-center'>
                <div className='game-card'>
                    <img src='/images/SpinTheWheel/game_icon.svg' alt='Spin The Wheel' />
                    <button onClick={() => { navigate('/games/spinTheWheel') }}>Spin The Wheel</button>
                </div>
                <div className='game-card'>
                    <img src='/images/HurdleCuddle/game_icon.svg' alt='Hurdle Cuddle' />
                    <button>Hurdle Cuddle</button>
                </div>
                <div className='game-card'>
                    <img src='/images/KnowMeBetter/game_icon.svg' alt='Know Me Better' />
                    <button>Know Me Better</button>
                </div>
                <div className='game-card'>
                    <img src='/images/KnowMeBetterAdult/game_icon.svg' alt='Know Me Better Adult' />
                    <button>Know Me Better (Adult)</button>
                </div>
                <div className='game-card'>
                    <img src='/images/SpankBank/game_icon.svg' alt='Spank Bank' />
                    <button onClick={() => { navigate('/games/spankBank') }}>Spank Bank</button>
                </div>
                <div className='game-card'>
                    <img src='/images/MemoryLane/game_icon.svg' alt='Memory Lane' />
                    <button>Memory Lane</button>
                </div>
            </div>
        </div>
    );
}

export default GamesPage;
