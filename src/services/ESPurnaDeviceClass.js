/* 
  Copyright (C) 2019  Kim Nyholm

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const getValue = require('get-value')
const axios = require('axios');
export class ESPurnaDeviceClass {

  constructor(ip, connectionHandler) {
    this.connectionHandler = connectionHandler;
    this.connected = false;
    this.trying = false;
    this.ip = ip;
    this.type = 'unknown'
    this.name = 'unknown'
    this.model = 'unknown'
    this.version = 'unknown'
    this.state = 'unknown'
  }

  tryConnection() {
    if (!this.trying) {
      this.trying = true;
      this.API('discover')
      .then(response => {
        console.log(response)
        this.type = getValue(response, 'data.app')
        this.model = getValue(response, 'data.device')
        this.version = getValue(response, 'data.version')
        this.name = getValue(response, 'data.hostname')
        this.state = 'OK'
        this.setConnectionState(true)
        return Promise.resolve()
      })
      .catch((e) => {
        console.log(e)
        this.setConnectionState(false)
      })
    }
  }


  setConnectionState(state) {
    if (this.connectionHandler) {
      this.connectionHandler(this, state);
    }
    this.connected = state;
  }

  API(command) {
    var apiHost = this.ip;
    var url = 'http://' + apiHost + '/' + command;
    return axios({url:url, method:'GET', timeout:2000})
  }

}
