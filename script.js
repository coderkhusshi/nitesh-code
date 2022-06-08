
    function setInputFilter(textbox, inputFilter, errMsg) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {

            textbox.addEventListener(event, function (e) {
                if (inputFilter(this.value)) {

                    if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {

                        this.classList.remove("input-error");

                        this.setCustomValidity("");

                    }
                    this.oldValue = this.value;

                    this.oldSelectionStart = this.selectionStart;

                    this.oldSelectionEnd = this.selectionEnd;

                } else if (this.hasOwnProperty("oldValue")) { // Rejected value restore the previous one

                    this.classList.add("input-error");
                    this.setCustomValidity(errMsg);

                    this.reportValidity();

                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart,
                        this.oldSelectionEnd);
                } else {

                    // Rejected value nothing to restore

                    this.value = "";
                }

            });
        });
    }
    setInputFilter(document.getElementById("ques1"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");

setInputFilter(document.getElementById("ques2"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");
setInputFilter(document.getElementById("ques3"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");
setInputFilter(document.getElementById("ques4"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");
setInputFilter(document.getElementById("ques5"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");
setInputFilter(document.getElementById("ques6"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");
setInputFilter(document.getElementById("ques7"), function (value) {

return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 10);
}, "Must be between 0 and 10");






    
    function createPUTRequest(connToken, jsonObj, dbName, relName) {
        var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
        return putRequest;
    }
    function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
        var url = dbBaseUrl + apiEndPointUrl;
        var jsonObj;
        $.post(url, reqString, function (result) {
            jsonObj = JSON.parse(result);
        }).fail(function (result) {
            var dataJsonObj = result.responseText;
            jsonObj = JSON.parse(dataJsonObj);
        });
        return jsonObj;
    }
    function resetForm() {
        $("#ques1").val("")
        $("#ques2").val("");
        $("#ques3").val("");
        $("#ques4").val("");
        $("#ques5").val("");
        $("#ques6").val("");
        $("#ques7").val("");
        $("#ques1").focus();
    }
    //  Main Function
    function saveEmployee() {
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
            return;
        }
        var putReqStr = createPUTRequest("90939081|-31949283244580161|90946380", jsonStr, "feedbackdb", "t1");
        alert(putReqStr);
        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommand(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
        alert(JSON.stringify(resultObj));
        jQuery.ajaxSetup({ async: true });
        resetForm();
        var url = "t2.html";
        window.location = url;
    }
    function saveEmployee2() {
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
            return;
        }
        var putReqStr = createPUTRequest("90939081|-31949283244580161|90946380", jsonStr, "feedbackdb", "t2");
        alert(putReqStr);
        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommand(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
        alert(JSON.stringify(resultObj));
        jQuery.ajaxSetup({ async: true });
        resetForm();
        var url = "t3.html";
        window.location = url;
    }
    function saveEmployee3() {
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
            return;
        }
        var putReqStr = createPUTRequest("90939081|-31949283244580161|90946380", jsonStr, "feedbackdb", "t3");
        alert(putReqStr);
        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommand(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
        alert(JSON.stringify(resultObj));
        jQuery.ajaxSetup({ async: true });
        resetForm();
        var url = "t4.html";
        window.location = url;
    }
    function saveEmployee4() {
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
            return;
        }
        var putReqStr = createPUTRequest("90939081|-31949283244580161|90946380", jsonStr, "feedbackdb", "t4");
        alert(putReqStr);
        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommand(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
        alert(JSON.stringify(resultObj));
        jQuery.ajaxSetup({ async: true });
        resetForm();
        var url = "t5.html";
        window.location = url;
    }
    function saveEmployee5() {
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
            return;
        }
        var putReqStr = createPUTRequest("90939081|-31949283244580161|90946380", jsonStr, "feedbackdb", "t5");
        alert(putReqStr);
        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommand(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
        alert(JSON.stringify(resultObj));
        jQuery.ajaxSetup({ async: true });
        resetForm();
        var url = "index.html";
        window.location = url;
    }
