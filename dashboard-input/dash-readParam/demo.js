function handleError(e) {
    alert(e);
}

// This function is a sample how it is possible to access parameter's ids and values
function fillWithValues(dashboard) {
    var parameters = dashboard.data().parameters,
        text = "";
    for (var i = 0; i < parameters.length; i++) {
        parameters[i].value && (text += (parameters[i].id + " : " + parameters[i].value + "<br>"))
    }

    $("#values").html(text);
}

visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var initialParams = {};

    var dashboard = v.dashboard({
        resource: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
        container: "#container",
        error: handleError,
        success: function () {
            $("button").prop("disabled", false);
            buildParamsInput();
        }
    });

    function buildParamsInput() {
        var params = dashboard.data().parameters;

        for (var i = params.length - 1; i >= 0; i--) {
            if (params[i].id.indexOf("country") >= 0) {
                var $el = $("<div>" + params[i].id + ": <input id=" + params[i].id + " type='text' data-paramId='" + params[i].id + "'/></div>");

                $("body").prepend($el);

                $el.find("input").val(initialParams[params[i].id]);
            }
        }
    }

    $("button").on("click", function () {
        var params = {};

        $("[data-paramId]").each(function () {
            params[$(this).attr("data-paramId")] = $(this).val().indexOf("[") > -1 ? JSON.parse($(this).val()) : [$(this).val()];
        });

        $("button").prop("disabled", true);

        dashboard.params(params).run()
            .fail(handleError)
            .done(function () {
                fillWithValues(dashboard)
            })
            .always(function () {
                $("button").prop("disabled", false);
            });
    });
});