// import { io } from 'socket.io-client';

// export const initSocket = async () => {
//     const options = {
//         'force new connection': true,
//         reconnectionAttempt: 'Infinity',
//         timeout: 10000,
//         transports: ['websocket'],
//     };
//     // return io(process.env.REACT_APP_BACKEND_URL, options);
//     return io("/", options);
// };


import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    console.log('Connecting to:', process.env.REACT_APP_BACKEND_URL); // Debugging log
    return io(process.env.REACT_APP_BACKEND_URL, options);
};
