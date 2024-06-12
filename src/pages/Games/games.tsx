import './games.scss';
import { useNavigate } from 'react-router-dom';
import { StringConstants } from '../../utils/constants';

const GamesPage = () => {
    const navigate = useNavigate();
    return (
        <div className='container games-page d-flex flex-col justify-content-center'>
            <div className='games-content d-flex flex-row justify-content-center'>
                <div className='game-card'>
                    <img src='/images/SpinTheWheel/game_icon.svg' alt='Spin The Wheel' />
                    <button onClick={() => { navigate(StringConstants.SPIN_THE_WHEEL_ROUTE) }}>Spin The Wheel</button>
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
                    <button onClick={() => { navigate(StringConstants.SPANK_BANK_ROUTE) }}>Spank Bank</button>
                </div>
                <div className='game-card'>
                    <img src='/images/MemoryLane/game_icon.svg' alt='Memory Lane' />
                    <button onClick={() => navigate(StringConstants.MEMORY_LANE_ROUTE)}>Memory Lane</button>
                </div>
                <div className='game-card'>
                    <img src='/images/WhackAMole/game_icon.svg' alt='Whack A Mole' />
                    <button onClick={() => navigate(StringConstants.WHACK_A_MOLE_ROUTE)}>Whack A Mole</button>
                </div>
            </div>
        </div>
    );
}

export default GamesPage;
