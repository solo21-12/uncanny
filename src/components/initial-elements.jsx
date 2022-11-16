import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes = [
    {
        id: '1',
        type: 'custom',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                // handle1: 'smoothstep',
            },
        },
        position: { x: 600, y: 80 },
    },
    {
        id: '2',
        type: 'image1',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                // handle1: 'smoothstep',
            },
        },
        position: { x: 850, y: 20 },
    },
    {
        id: '3',
        type: 'image2',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                // handle1: 'smoothstep',
            },
        },
        position: { x: 850, y: 400 },
    },
    {
        id: '4',
        type: 'seed',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                // handle1: 'smoothstep',
            },
        },
        position: { x: 0, y: 100 },
    },
    {
        id: '5',
        type: 'basicFilter2',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                // handle1: 'smoothstep',
            },
        },
        position: { x: 600, y: 240 },
    },
    {
        id: '6',
        type: 'invert',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                // handle2: 'smoothstep', 
            },
        },
        position: { x: 600, y: 440 },
    },
    {
        id: '7',
        type: 'node_2',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'smoothstep',
                'handle-1': 'smoothstep', 
                'handle-2': 'smoothstep',
                'handle-3': 'smoothstep',
                'handle-4': 'smoothstep',
            },
        },
        position: { x: 300, y: 80 },
    },
    // {
    //     id: '6',
    //     type: 'output',
    //     style: {
    //         background: '#63B3ED',
    //         color: 'white',
    //         width: 100,
    //     },
    //     data: {
    //         label: 'Node',
    //         selects: {
    //             'handle-0': ' ',
    //             'handle-1': ' ',
    //         },
    //     },
    //     position: { x: 400, y: 325 },
    //     sourcePosition: Position.Right,
    //     targetPosition: Position.Left,
    // },
    // {
    //     id: '7',
    //     type: 'default',
    //     className: 'annotation',
    //     data: {
    //         label: (

    //             'On the bottom left you see the Controls and the bottom right the MiniMap. This is also just a node 🥳'

    //         ),
    //         selects: {
    //             'handle-0': ' ',
    //             'handle-1': ' ',
    //         },
    //     },
    //     draggable: false,
    //     selectable: false,
    //     position: { x: 150, y: 400 },
    // },
];

export const edges = [
    { id: 'e1-2', source: '1', target: '2',  },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    {
        id: 'e4-5',
        source: '4',
        target: '5',
        type: 'smoothstep',
        sourceHandle: 'handle-0',
        data: {
            selectIndex: 0,
        },
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
    {
        id: 'e4-6',
        source: '4',
        target: '6',
        type: 'smoothstep',
        sourceHandle: 'handle-2',
        data: {
            selectIndex: 1,
        },
        markerEnd: {
            type: MarkerType.ArrowClosed,
        },
    },
];
