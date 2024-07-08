import './index.css';
import styled from 'styled-components';

const TodoItem = (props) => {
    const onToggle = () => {
        props.onToggle(props.id);
    };

    const onDelete = () => {
        props.onDelete(props.id);
    };

    return (
        <wrapperf>
            <div>
                <label
                    className={`todo-item-label ${props.completed ? 'line-through' : ''}`}
                    onChange={onToggle}
                >
                    <input
                        type='checkbox'
                        checked={props.completed}
                    />
                    <span className='todo-item-content'>{props.content}</span>
                </label>
            </div>

            <div>
                <button
                    className='todo-delete-button'
                    onClick={onDelete}
                >
                    삭제하기
                </button>
            </div>
        </wrapperf>
    );
};

const TodoItemWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
`;

export default TodoItem; 