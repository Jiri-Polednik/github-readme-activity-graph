import { Colors } from 'src/interfaces/interface';

export const selectColors = (queryString: string): Colors => {
    switch (queryString) {
        case 'dracula':
            return {
                areaColor: 'ff79c6',
                bgColor: '44475a',
                borderColor: 'ffffff',
                color: 'f8f8f2',
                lineColor: 'ff79c6',
                pointColor: 'bd93f9',
                labelColor: 'f8f8f2',
            };
        case 'gruvbox':
            return {
                areaColor: 'd8a657',
                bgColor: '504945',
                borderColor: 'ffffff',
                color: 'd4be98',
                lineColor: 'd8a657',
                pointColor: 'e78a4e',
                labelColor: 'd4be98',
            };
        case 'github':
            return {
                areaColor: '9ecbff',
                bgColor: '293036',
                borderColor: 'ffffff',
                color: 'ffffff',
                lineColor: '9ecbff',
                pointColor: 'f97583',
                labelColor: 'ffffff',
            };
        case 'gotham':
            return {
                areaColor: '2aa889',
                bgColor: '0c1014',
                borderColor: '2aa889',
                color: '2aa889',
                lineColor: '599cab',
                pointColor: '99d1ce',
                labelColor: '2aa889',
            };
        case 'rogue':
            return {
                areaColor: 'b18bb1',
                bgColor: '172030',
                borderColor: 'ffffff',
                color: 'a3b09a',
                lineColor: 'b18bb1',
                pointColor: 'c6797e',
                labelColor: 'a3b09a',
            };
        case 'xcode':
            return {
                areaColor: 'c4e3ff',
                bgColor: '202124',
                borderColor: 'ffffff',
                color: 'fcfcfa',
                lineColor: 'c4e3ff',
                pointColor: 'ff8070',
                labelColor: 'fcfcfa',
            };
        case 'redical':
            return {
                areaColor: 'fe428e',
                bgColor: '141321',
                borderColor: 'ffffff',
                color: 'a9fef7',
                lineColor: 'fe428e',
                pointColor: 'f8d847',
                labelColor: 'a9fef7',
            };
        case 'coral':
            return {
                areaColor: 'f4e23d',
                bgColor: '9a3838',
                borderColor: 'ffffff',
                color: 'f9fae9',
                lineColor: 'f4e23d',
                pointColor: 'f4e7e7',
                labelColor: 'f9fae9',
            };
        case 'react-dark':
            return {
                areaColor: '5bcdec',
                bgColor: '0d1117',
                borderColor: 'ffffff',
                color: '5bcdec',
                lineColor: '5bcdec',
                pointColor: 'ffffff',
                labelColor: '5bcdec',
            };
        case 'nord':
            return {
                areaColor: '88c0d0',
                bgColor: '2e3440',
                borderColor: 'ffffff',
                color: '88c0d0',
                lineColor: '88c0d0',
                pointColor: 'ffffff',
                labelColor: '88c0d0',
            };
        case 'lucent':
            return {
                areaColor: 'ffd369',
                bgColor: 'cccccc',
                borderColor: '000000',
                color: '000000',
                lineColor: 'ffd369',
                pointColor: 'faf3e0',
                labelColor: '000000',
            };
        case 'chartreuse-dark':
            return {
                areaColor: '00adfe',
                bgColor: '000000',
                borderColor: '000000',
                color: '7ffe00',
                lineColor: '00adfe',
                pointColor: '7ffe00',
                labelColor: '7ffe00',
            };
        case 'github-light':
            return {
                areaColor: '9be9a8',
                bgColor: 'ffffff',
                borderColor: 'ffffff',
                color: '000000',
                lineColor: '9be9a8',
                pointColor: '40c463',
                labelColor: '000000',
            };
        case 'github-dark':
            return {
                areaColor: '1F6FEB',
                bgColor: '0D1117',
                borderColor: 'ffffff',
                color: '58A6FF',
                lineColor: '1F6FEB',
                pointColor: '58A6FF',
                labelColor: '58A6FF',
            };
        case 'minimal':
            return {
                areaColor: 'd3e6fa',
                bgColor: 'ffffff',
                borderColor: 'ffffff',
                color: '000000',
                lineColor: 'd3e6fa',
                pointColor: '3f99ed',
                labelColor: '000000',
            };
        case 'material-palenight':
            return {
                areaColor: 'c792ea',
                bgColor: '292d3e',
                borderColor: 'ffffff',
                color: 'a6accd',
                lineColor: 'c792ea',
                pointColor: '89ddff',
                labelColor: 'a6accd',
            };
        case 'green':
            return {
                areaColor: '588157',
                borderColor: 'ffffff',
                bgColor: 'dad7cd',
                color: '3a5a40',
                lineColor: '588157',
                pointColor: '344e41',
                labelColor: '3a5a40',
            };
        case 'noctis-minimus':
            return {
                areaColor: '72b7c0',
                borderColor: 'ffffff',
                bgColor: '1b2932',
                color: 'd3b692',
                lineColor: '72b7c0',
                pointColor: 'c5cdd3',
                labelColor: 'd3b692',
            };
        case 'one-dark':
            return {
                areaColor: 'e5c17c',
                borderColor: 'ffffff',
                bgColor: '282C34',
                color: 'abb2bf',
                lineColor: 'e5c17c',
                pointColor: 'e06c75',
                labelColor: 'abb2bf',
            };
        case 'monokai':
            return {
                areaColor: 'ff6188',
                borderColor: 'ffffff',
                bgColor: '2D2A2E',
                color: 'fcfcfa',
                lineColor: 'ff6188',
                pointColor: 'ffd866',
                labelColor: 'fcfcfa',
            };
        case 'elegant':
            return {
                areaColor: '006699',
                borderColor: '161e2d',
                bgColor: '161e2d',
                color: 'd8d5d5',
                lineColor: 'fb8500',
                pointColor: '42002b',
                labelColor: 'd8d5d5',
            };
        case 'aqua':
            return {
                areaColor: '226d64',
                borderColor: '161e2d',
                bgColor: '52b69a',
                color: '187177',
                lineColor: '226d64',
                pointColor: '156f69',
                labelColor: '187177',
            };
        case 'synthwave-84':
            return {
                areaColor: '3A2442',
                borderColor: '251e30',
                bgColor: '2C223B',
                color: 'FF3CA2',
                lineColor: 'F7F645',
                pointColor: '22E5F4',
                labelColor: 'FF3CA2',
            };
        default:
            return {
                areaColor: '9e4c98',
                bgColor: 'ffcfe9',
                borderColor: 'ffffff',
                color: '9e4c98',
                lineColor: '9e4c98',
                pointColor: '403d3d',
                labelColor: '9e4c98',
            };
    }
};
