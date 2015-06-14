var GithubNames = (function () {
    function GithubNames() {
    }
    GithubNames.prototype.getUsersSync = function () {
        //return ['john', 'dan', 'ward'];
        return [
            { login: 'john', avatar_url: 'sumtin' },
            { login: 'dan', avatar_url: 'sumtin' },
            { login: 'ward', avatar_url: 'sumtin' }
        ];
    };
    return GithubNames;
})();
exports.GithubNames = GithubNames;
//# sourceMappingURL=github.service.js.map