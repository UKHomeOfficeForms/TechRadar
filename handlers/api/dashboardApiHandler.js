var cache = require('../../dao/cache');
var projects = require('../../dao/projects');
var votes = require('../../dao/vote');
var technologies = require('../../dao/technology');

var DashboardApiHandler = function () {
};

/**
 * Get all
 */
DashboardApiHandler.getTechnologyForProject = function (req, res) {
    var projectId = req.params.project;

    projects.getTechForProject(function (projectId, result) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result));
    });
};

DashboardApiHandler.getVotesForAllTechnologies = function (req, res) {
    votes.getVotesForAllTechnologies(function (result) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result));
    })
}

DashboardApiHandler.getVotesDifferentFromStatus = function (req, res) {
    votes.getVotesInLastMonthDifferentFromStatus(function (result) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result));
    });
};

DashboardApiHandler.getMostUsedTechnologies = function (req,res) {
    technologies.getMostUsedTechnologies(function (result) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result));
    });
};


module.exports = DashboardApiHandler;