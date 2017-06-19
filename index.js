const request = require('request-promise-native');
const moment = require('moment');

class AgentStats {
	constructor(api_key) {
		this.apiKey = api_key;
		this.apiBase = 'https://api.agent-stats.com/';
	}

	getGroups() {
		return request.get({
			uri: `${this.apiBase}groups`,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	getPending(group_id) {
		return request.get({
			uri: `${this.apiBase}groups/${group_id}/pending`,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	getGroupProgress(group_id, type) {
		let uri = `${this.apiBase}groups/${group_id}`;
		if (type){
			uri = `${uri}/${type}`;
		}
		return request.get({
			uri: uri,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	getShares() {
		return request.get({
			uri: `${this.apiBase}share`,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	getShare(username, startdate) {
		let uri = `${this.apiBase}share/${username}`;
		if (startdate && startdate instanceof Date) {
			uri = `${uri}/${moment(startdate).format('YYYY-MM-DD')}`;
		}
		return request.get({
			uri: uri,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	getMedals() {
		return request.get({
			uri: `${this.apiBase}medals`,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	getProgress(startdate) {
		let uri = `${this.apiBase}progress`;
		if (startdate && startdate instanceof Date) {
			uri = `${uri}/${moment(startdate).format('YYYY-MM-DD')}`;
		}
		return request.get({
			uri: uri,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}

	requestGroupRefresh(group_id) {
		return request.post({
			uri: `${this.apiBase}groups/${group_id}/refresh`,
			headers: {
				'AS-Key': this.apiKey
			},
			json: true
		});
	}
}

module.exports = AgentStats;