/*Global ajax service calls for javascript.*/
    function serviceCall(type, service, data, timeout) {
        var defaults = {
            type: "POST",
            async: true,
            url: 'php/connectiontest.php',
            dataType: "json",
            timeout: 20000
        };
        var options = $.extend(defaults, options);
        //type
        if (type) {
            options.type = type;
        }
        //service and endpoint
        if (service) {
            options.url = 'php/' + service + '.php';
        }
        //data
        if (data) {
            options.data = data;
        }

        //timeout
        if (timeout) {
            options.timeout = timeout;
        }

        return $.ajax(options);
    }
