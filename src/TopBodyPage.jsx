import React from 'react';

const TopBodyPage = () => {

    const onClickEvent = () => {
        console.log("test");
    }

    return (
        <>
            <div onClick={onClickEvent}>test1234</div>
        </>
    )

}

export default TopBodyPage;