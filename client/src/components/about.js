import React from 'react';


export default props => {
    
    const style = {
        color: props.color || 'black'
    }
    
    return (
        <div style={style}>
            <h1>About Us</h1>
            <p>Commodo eiusmod ullamco sint deserunt sunt velit. Sunt consequat eu Lorem sit veniam laborum commodo reprehenderit excepteur et nisi ea ea nostrud. In quis magna veniam incididunt labore non eu officia eiusmod. Sint nostrud incididunt sint laborum. Anim ipsum excepteur nulla est velit duis ullamco nulla non ut ex.</p>
        </div>
    );
}