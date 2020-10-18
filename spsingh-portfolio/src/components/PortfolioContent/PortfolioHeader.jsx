import React from 'react'

const PortfolioHeader = ({title,id}) => {
    return (
        <div className='portfolio__header' id={id}>
            {title}
        </div>
    )
}

export default PortfolioHeader
