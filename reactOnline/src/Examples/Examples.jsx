/* eslint-disable react/prop-types */
import './examples.css'

const Examples = ({ children, handleClick, isSelected }) => {
    return (
        <>

            <menu>
                <li style={{ listStyle: 'none' }}>
                    <button className={isSelected ? "active" : null } onClick={handleClick}>

                        {children}
                    </button>

                </li>

            </menu>
        </>
    )
}

export default Examples