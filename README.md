agent-stats
===========

Fetch stats from the [agent-stats.com](https://www.agent-stats.com) API.

See [api-docs](https://apidocs.agent-stats.com/) for response details.

**Requires nodejs 8.x**

Usage
-----

Install

	npm i agent-stats

Initialize.

	const AgentStats = require('agent-stats');
	var agentStats = new AgentStats(apikey);

Change api-key or api-base-uri.

	agentStats.apiKey = 'new-key';
	agentStats.apiBase = 'https://example.com/agentstats';

Example: Retrieve groups associated with API-key's user

	agentStats.getGroups().then(function (result) {
		console.log(result);
	}).catch((err) => {
		console.error(err);
	});

Available methods. Each method returns a promise.

Returns | Method | API call
--- | --- | ---
Promise | getGroups() | [#api-Groups-listGroups](https://apidocs.agent-stats.com/#api-Groups-listGroups)
Promise | getPending(group_id) | [#api-Groups-getPendingUsers](https://apidocs.agent-stats.com/#api-Groups-getPendingUsers)
Promise | getGroupProgress(group_id, type?) | [#api-Groups-showGroup](https://apidocs.agent-stats.com/#api-Groups-showGroup)
Promise | getShares() | [#api-Medals-share](https://apidocs.agent-stats.com/#api-Medals-share)
Promise | getShare(username, startdate?) | [#api-Medals-sharedProgress](https://apidocs.agent-stats.com/#api-Medals-sharedProgress)
Promise | requestGroupRefresh(group_id) | [#api-Groups-requestRefresh](https://apidocs.agent-stats.com/#api-Groups-requestRefresh)
Promise | getMedals() | [#api-Medals-medals](https://apidocs.agent-stats.com/#api-Medals-medals)
Promise | getProgress(startdate?) | [#api-Medals-progress](https://apidocs.agent-stats.com/#api-Medals-progress)