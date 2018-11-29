import React from 'react';

class Draggable extends React.Component {
    
    constructor() {
      super();
      this.state = { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2,
        dragging: false,
      };
    }
  
    onDragStart = e => {
      if (e.type === 'dragstart') {
        e.dataTransfer.setDragImage(this.getDragImage(), 0, 0);
      }
      this.setState({ dragging: true });
    };
  
    onDrag = e => {
      if (e.clientX <= 0 || e.clientY <= 0) return false;
      this.setState(this.getDrag(e));
    };
  
    onDragEnd = e => {
      this.setState({ dragging: false });
    };

    getDrag=(e)=> {
        if (e.type.includes('drag')) {
          return { x: e.clientX, y: e.clientY };
        }
      
        const touch = e.targetTouches[0];
        return { x: touch.clientX, y: touch.clientY };
      }
      
    getDragImage=()=> {
        let img = new Image();
        img.src = 'fake.gif';
        return img;
      }
    
    render() {
      const { x, y, dragging } = this.state;
      
      return (
        <div draggable="true"
          className="dib move"
          style={{
            display: 'inline-block',
            cursor: 'move',
            WebkitTransform: `translate3d(${ x - 32 }px, ${ y - 32 }px, 0)`,
            transform: `translate3d(${ x - 32 }px, ${ y - 32 }px, 0)`,
          }}
          onDragStart={ this.onDragStart }
          onDrag={ this.onDrag }
          onDragEnd={ this.onDragEnd}
          onTouchStart={ this.onDragStart }
          onTouchMove={ this.onDrag }
          onTouchEnd={ this.onDragEnd }>
          { this.props.children }
        </div>
      ); 
    }
  }

  export default Draggable;