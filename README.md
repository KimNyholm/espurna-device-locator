# ESPurna Device Locator

Locate ESPurna Devices on your network when you only know the subnet of the device.
The search is done with javascript in a browser and no software installation is required.
Only newer devices with CORS support will be found.

![ESPurna Device Locator](https://github.com/KimNyholm/espurna-device-locator/blob/master/doc/ESPurnaDeviceLocator.png)

## Usage

Enter any ip address in the subnet and it will search for devices on the whole subnet. E.g. specify 192.168.0.121 to locate all devices in the range 192.168.0.0 to 192.168.0.255.

## Run the live version
The live version can be found [here](http://espurna.simplethings.work)

## Deployment
If you want to run your own server, the [ESPurna Device Locator](https://github.com/KimNyholm/espurna-device-locator) can be served by any static http server (not https).
- Checkout the branch gh-pages.
- Copy the files to the root of the web server

## Development
Sources can be found on github, [ESPurna Device Locator](https://github.com/KimNyholm/espurna-device-locator).
