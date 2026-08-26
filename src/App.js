import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './actions';

function App() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(incrementAction())}>
                +
            </button>

            <span style={{ padding: 20 }}>
                {count}
            </span>

            <button onClick={() => dispatch(decrementAction())}>
                -
            </button>
        </div>
    );
}

export default App;