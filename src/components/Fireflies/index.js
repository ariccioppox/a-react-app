import './index.scss';

export default function() {
    return (
        <div>
            {Array.from(Array(30)).map(() => <div className='firefly'></div>)}
        </div>
    );
}