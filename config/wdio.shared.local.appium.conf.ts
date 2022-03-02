import { config } from './wdio.shared.conf';

//
// ======
// Appium
// ======
//
config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            // This will use the globally installed version of Appium
            command: 'appium',
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                // and to automatically download the latest version of ChromeDriver
                relaxedSecurity: true,
            },
        },

    ],
]);
//
// =====================
// Server Configurations
// =====================
//
// config.port = 4723;

// config.path ='/wd/hub';
// config.logLevel = "debug";
// config.host = "localhost";

// console.log('config ', config)

const serverConfig = {
  path: '/wd/hub',
  host: process.env.APPIUM_HOST || 'localhost',
  port: process.env.APPIUM_PORT || 4723,
  // logLevel: 'info',
  logLevel: 'debug',
};

config = {
  ...config,
  ...serverConfig
}

console.log('config ', config);
console.log('config services ', config.services);

export default config;
