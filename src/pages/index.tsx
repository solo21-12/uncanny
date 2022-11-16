import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from './../components/initial-elements';
import CustomNode from './../components/CustomNode';
import ImagePreview1 from './../components/imagePreview1';
import SeedNode from './../components/seedNode';
import BasicFilter2 from './../components/basicFilter2';
import InvertImage from './../components/invertImage';
import ImagePreview2 from './../components/imagePreview2';
import Node2 from './../components/node-2';

import 'reactflow/dist/style.css';
// import './overview.css';

const nodeTypes = {
  custom: CustomNode,
  image1: ImagePreview1,
  image2: ImagePreview2,
  seed: SeedNode,
  basicFilter2: BasicFilter2,
  invert: InvertImage,
  node_2: Node2,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  // const edgesWithUpdatedTypes = edges.map((edge) => {
  //   if (edge.sourceHandle) {
  //     const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
  //     edge.type = edgeType;
  //   }

  //   return edge;
  // });

  return (
    <div style={{ width: '100%', height: '100vh' }} className= "" >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap style={minimapStyle} />
        <Controls />
        <Background color="black" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
