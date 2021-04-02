visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/1._Supermart_Dashboard",
        container: "#container",
        //only report type dashlet will be loaded without loader
        report: {
            chart: {},
            loadingOverlay: false
        },
        error: function(e) {
            alert(e);
        }
    });
});
