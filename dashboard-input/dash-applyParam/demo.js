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
    var initialParams = {
        Country: ["USA"]
    };

    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/3.2_Inventory_Metrics",
        container: "#container",
        error: handleError,
        params: initialParams,
        success: function() {
            $("button").prop("disabled", false);
            buildParamsInput();
        }
    });

    function buildParamsInput() {
        var params = dashboard.data().parameters;

        for (var i = params.length-1; i >= 0; i--) {
            var $el = $("<div>" + params[i].id + ": <input type='text' data-paramId='" + params[i].id + "'/></div>");

            $("body").prepend($el);

            $el.find("input").val(dashboard.params()[params[i].id]);
        }
    }

    $("button").on("click", function() {
        var params = {};

        $("[data-paramId]").each(function() {
            params[$(this).attr("data-paramId")] = $(this).val().indexOf("[") > -1 ? JSON.parse($(this).val()) : [$(this).val()];
        });

        $("button").prop("disabled", true);

        dashboard.params(params).run()
            .fail(handleError)
            .always(function() { $("button").prop("disabled", false); });
    });
});