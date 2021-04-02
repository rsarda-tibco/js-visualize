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
        success: function(data) {
            data.components.forEach(function(component) {
                if (component.maximized !== null) {
                    var id = component.id,
                        $button = $("<button data-button-componentid='" + id + "'>Maximize " + id + "</button>");

                    $button.on("click", function() {
                        dashboard.updateComponent(id, { maximized: !getComponentById(id).maximized })
                            .done(updateButtons)
                            .fail(function(e) { console.log(e); });
                    });

                    $("body").prepend($button);
                }
            });
        },
        error: function(e) {
            alert(e);
        }
    });

    function updateButtons() {
        dashboard.data().components.forEach(function(component) {
            var $button = $("button[data-button-componentid='" + component.id + "']");
            $button && $button.text((component.maximized === false ? "Maximize " : "Minimize ") + component.id);
        })
    }

    function getComponentById(id) {
        return dashboard.data().components.filter(function(component) { return component.id === id })[0];
    }
});
