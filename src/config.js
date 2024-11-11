export const MAP_STYLE = "./map_style.json";

export const INITIAL_VIEW_STATE = {
    latitude: 23.0225, 
    longitude: 72.5454,
    zoom: 13,
    pitch: 0,
    bearing: 0
};

export const INITIAL_COLORS = {
    startNodeFill: [70, 183, 128],
    startNodeBorder: [255, 255, 255],
    endNodeFill: [152, 4, 12],
    endNodeBorder: [0, 0, 0],
    path: [70, 183, 128],
    route: [165, 13, 32],
};

export const LOCATIONS = [
    { name: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
    // 23.1287° N, 72.5454° E
    { name: "Nirma University", latitude: 23.1287, longitude: 72.5454 },
    { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
    { name: "Delhi", latitude: 28.613, longitude: 77.209 },
    { name: "Bangalore", latitude: 12.971, longitude: 77.594 },
    { name: "Chennai", latitude: 13.082, longitude: 80.270 },
    { name: "Kolkata", latitude: 22.572, longitude: 88.3639 },
];