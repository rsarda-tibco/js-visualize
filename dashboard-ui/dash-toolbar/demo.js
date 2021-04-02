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
        error: function(e) {
            alert(e);
        }
    });

    document.querySelector("#hideToolbar").addEventListener("click", function() {
        dashboard.updateComponent("By_Category", { toolbar: false });
    });

    document.querySelector("#showToolbar").addEventListener("click", function() {
        dashboard.updateComponent("By_State", { toolbar: { maximize: true, refresh: true } });
    });
});