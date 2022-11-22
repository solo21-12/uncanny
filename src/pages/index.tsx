/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  
  
} from "reactflow";

import {
  node as initialNodes,
  edges as initialEdges,
} from "./../components/initial-elements";
import CustomNode from "./../components/CustomNode";
import ImagePreview1 from "./../components/imagePreview1";
import SeedNode from "./../components/seedNode";
import BasicFilter2 from "./../components/basicFilter2";
import InvertImage from "./../components/invertImage";
import ImagePreview2 from "./../components/imagePreview2";
import Node2 from "./../components/node-2";
import MainHeader from "../components/mainHeader";

import "reactflow/dist/style.css";
// import './overview.css';

const nodeTypes = {
  custom: CustomNode,
  image1: ImagePreview1,
  image2: ImagePreview2,
  seed: SeedNode,
  basicFilter2: BasicFilter2,
  invert: InvertImage,
  node_2: Node2,
  MainHeader:MainHeader
  
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const onNodesChange = useCallback(
    (change: NodeChange[]) => setNodes((nod) => applyNodeChanges(change, nod)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (change: EdgeChange[]) => setEdges((edg) => applyEdgeChanges(change, edg)),
    [setEdges]
  );
  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const edgeOptions = {
    animated: false,
    style: {
      stroke: "#2268A9",
    },
  };
  const connectionLineStyle = { stroke: "#2268A9" };
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className=" bg-[#1F2021] "
    >
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
        defaultEdgeOptions={edgeOptions}
        connectionLineStyle={connectionLineStyle}
      >
        <MiniMap style={minimapStyle} />
        <Controls />
        <Background color="black" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
