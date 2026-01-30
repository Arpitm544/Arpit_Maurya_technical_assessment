export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div 
        className={`${type} toolbar-item`}
        onDragStart={(event) => onDragStart(event, type)}
        draggable
      >
          <span>{label}</span>
      </div>
    );
  };
  