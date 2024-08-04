import './games.scss';
import { useNavigate } from 'react-router-dom';
import { StringConstants } from '../../utils/constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GamesPage = () => {
    const navigate = useNavigate();
    return (
        <div className='container games-page d-flex flex-col justify-content-center'>
            <div className='games-content d-flex flex-row justify-content-center'>
                <div className='game-card'>
                    <LazyLoadImage src='/images/SpinTheWheel/game_icon.webp' alt='Spin The Wheel' effect='blur' />
                    <button onClick={() => { navigate(StringConstants.SPIN_THE_WHEEL_ROUTE) }}>Spin The Wheel</button>
                </div>
                <div className='game-card'>
                    <LazyLoadImage src='/images/HurdleCuddle/game_icon.webp' alt='Hurdle Cuddle' effect='blur' />
                    <button>Hurdle Cuddle</button>
                </div>
                <div className='game-card'>
                    <LazyLoadImage src='/images/KnowMeBetter/game_icon.webp' alt='Know Me Better' effect='blur' />
                    <button>Know Me Better</button>
                </div>
                <div className='game-card'>
                    <LazyLoadImage src='/images/KnowMeBetterAdult/game_icon.webp' alt='Know Me Better (Adult)' effect='blur' />
                    <button>Know Me Better (Adult)</button>
                </div>
                <div className='game-card'>
                    <LazyLoadImage src='/images/SpankBank/game_icon.webp' alt='Spank Bank' effect='blur' />
                    <button onClick={() => { navigate(StringConstants.SPANK_BANK_ROUTE) }}>Spank Bank</button>
                </div>
                <div className='game-card'>
                    <LazyLoadImage src='/images/PictureGallery/game_icon.webp' alt='Picture Gallery' effect='blur' />
                    <button onClick={() => navigate(StringConstants.PICTURE_GALLERY_ROUTE)}>Picture Gallery</button>
                </div>
                <div className='game-card'>
                    <LazyLoadImage src='/images/WhackAMole/game_icon.webp' alt='Whack A Mole' effect='blur' />
                    <button onClick={() => navigate(StringConstants.WHACK_A_MOLE_ROUTE)}>Whack A Mole</button>
                </div>
            </div>
        </div>
    );
}

export default GamesPage;
