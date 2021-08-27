import * as React from 'react'
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

const Example = () => {
    const ref = React.useRef(null);
    const {style, ...mouseHandlers} = use3dEffect(ref);
  
    return (
      <animated.div
        ref={ref}
        style={{
          background: '#61dafb', color: 'white', padding: '2em',
          ...style
        }}
        {...mouseHandlers}
      >
        Hover over me!
      </animated.div>
    );
  };
export default Example;