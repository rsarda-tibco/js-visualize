// Visualize: destroy dashboards

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser"
    }
}, function (v) {
    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/1._Supermart_Dashboard",
        container: "#container",
        error: function(e) {
            alert(e);
        }
    });

    document.querySelector("button").addEventListener("click", function(e) {
        dashboard
            .destroy()
            .fail(function(e) { alert(e); })
            .done(function() { console.log("dashboard destroyed"); });
    });

});