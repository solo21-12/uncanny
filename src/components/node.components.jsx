import React, { Fragment, useState } from 'react'

import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer'
import 'reactflow/dist/style.css';
import CustomNode from './../components/CustomNode'

const initialElements = [
    { id: '1', type: 'input', data:{ label: 'Node' }, position: { x: 0, y: 0 } }
]

const nodeTypes = {
    custom: CustomNode,
  };



const MindNode = () => {

    const [elements, setElements] = useState(initialElements)
    const [name, setName] = useState("")

    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: {label: `${name}`},
            position: {x: Math.random() * window.innerWidth, y: Math.random * window.innerHeight}
        }));
    }


    return (
        <Fragment>
            <ReactFlow
                nodes={elements}
                style={{ width: '100%', height: '90vh' }}
                nodeTypes={nodeTypes}
            >
                <Background
                color='#888'
                gap = {16}
                />
                <MiniMap
                nodeColor={n=>{
                    if(n.type === 'input') return 'blue';
                    return '#FFCC00'
                }} />
                <Controls/>
            </ReactFlow>
            <div>
                <input type="text"
                onChange = {e => setName(e.target.value)}
                    name="title" />
                <button type="button"
                onClick={addNode}>
                    Add Node
                </button>
            </div>

        </Fragment>
    )
}

export default MindNode;