// Visualize: Refresh and cancel refreshing dashboard and particular dashboard component

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
        error: function(e) {
            alert(e);
        }
    });

    $("#refreshAll").on("click", function() {
        $("#cancelAll").show();
        $("#refreshAll").hide();

        dashboard.refresh()
            .always(function() {
                $("#cancelAll").hide();
                $("#refreshAll").show();
            });
    });

    $("#cancelAll").on("click", function() {
        $("#cancelAll").hide();

        dashboard.cancel()
            .always(function() {
                $("#refreshAll").show();
            });
    });

    $("#refreshComponent").on("click", function() {
        $("#cancelComponent").show();
        $("#refreshComponent").hide();
// 'ffff'` is resource ID for Sales Trend
        dashboard.refresh("ffff")
            .always(function() {
                $("#cancelComponent").hide();
                $("#refreshComponent").show();
            });
    });

    $("#cancelComponent").on("click", function() {
        $("#cancelComponent").hide();

        dashboard.cancel("ffff")
            .always(function() {
                $("#refreshComponent").show();
            });
    });
});
