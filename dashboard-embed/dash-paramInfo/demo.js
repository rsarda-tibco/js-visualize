function handleError(e) {
    alert(e);
}

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        container: "#container",
        error: handleError,
        success: function(data) {
            console.log("dashboard parameters - ", data.parameters);
        }
    });
});