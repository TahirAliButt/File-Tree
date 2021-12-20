import React, { useState } from 'react';

function App() {
  return <div>
    <Folder name='Desktop'> 
      <Folder name='Music'>
        <File name='all_star.mp4'/>
        <File name='express_file.mp4'/>
      </Folder> 
      <File name='dogs.png'/>
      <File name='cats.png'/>
    </Folder>
    <Folder name='Applications'/>
    </div>;
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children} = props;
  
  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={ handleClick }>{name}</span>
      <div style={ {marginLeft: '17px'} }>
        {isOpen ? children : null}
      </div>
    </div>
};

const File = (props) => {
  return <div>{props.name}</div>
};

export default App;