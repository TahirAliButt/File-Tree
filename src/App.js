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
    <Folder name='Applications'>
      <File name='pong.exe'/>
      <File name='Xonic.exe'/>
    </Folder>
    </div>;
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children} = props;
  const direction = isOpen ? 'down' : 'right';
  
  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={ handleClick }>
      <i className='blue folder icon'></i>
    <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
      <div style={ {marginLeft: '17px'} }>
        {isOpen ? children : null}
      </div>
    </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];

  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
    exe: 'file' 
  }

  return <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
};

export default App;
