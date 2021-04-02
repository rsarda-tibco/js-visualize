visualize({
    auth: {
        name: "jasperadmin",
        password: "jasperadmin",
        organization: "organization_1"
    }
}, function (v) {

    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        container: "#container",
        error: function(e) {
            alert(e);
        }
    });

    document.getElementById("disableInteractivity").addEventListener("click", function() {
        dashboard.data().components.forEach(function(component) {
            dashboard.updateComponent(component.id, { interactive: false });
        });
    });

    document.getElementById("enableInteractivity").addEventListener("click", function() {
        dashboard.data().components.forEach(function(component) {
            dashboard.updateComponent(component.id, { interactive: true });
        });
    });
});