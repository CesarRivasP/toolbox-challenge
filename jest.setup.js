import 'react-native';
import 'jest-enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import enableHooks from 'jest-react-hooks-shallow';

const { JSDOM } = require('jsdom');

jest.mock('./src/config/envVars', () => ({
  __esModule: true,
  default: {
    ENV: 'test',
    API_URL: 'API_URL',
    ACCESS_USER_KEY: 'ACCESS_USER_KEY',
  },
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});

const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/* This is necessary to remove warnings that comes with the use of mount */
const originalConsoleError = console.error;
console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }
  originalConsoleError(message);
};

// pass an instance of jest to `enableHooks()`
enableHooks(jest);
Enzyme.configure({ adapter: new Adapter() });

