
const LynxariDevice = require(process.lynxari.device);
const device = require('@agilatech/bme280');

module.exports = class Bme280 extends LynxariDevice {
    constructor(config) {
        const hardware = new device(config);
        super(hardware, config);
    }
}

