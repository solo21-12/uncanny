import { MarkerType } from 'reactflow';

export const node = [
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
        position: { x: 650, y: 80 },
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
        position: { x: 1050, y: 20 },
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
        position: { x: 1050, y: 400 },
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
                'handle-0': 'Find Edges',
                // handle1: 'smoothstep',
            },
        },
        position: { x: 650, y: 260 },
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
        position: { x: 650, y: 460 },
    },
    {
        id: '7',
        type: 'node_2',
        data: {
            label: ' ',
            selects: {
                'handle-0': 'k_dpm_2a',
                // 'handle-1': 'Variant', 
                // 'handle-2': 'Creativity',
                // 'handle-3': 'Details',
                // 'handle-4': 'seed',
            },
        },
        position: { x: 350, y: 80 },
    },
];

export const edges = [
    { id: 'e1-2', source: '7', target: '1'  },
    { id: 'e1-3', source: '7', target: '5', targetHandle: 'b-2',  },
    { id: 'e1-4', source: '6', target: '5',sourceHandle:'i-1',
    markerEnd: {
        type: MarkerType.Arrow,
      },

},
    { id: 'e2-6', source: '6', target: '2' ,  },
    { id: 'e1-7', source: '1', target: '3' },
    {
        id: 'e4-5',
        source: '4',
        target: '7',
        sourceHandle: 'seed',
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
