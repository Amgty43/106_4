function saveTask() {
    console.log("saveTask");
    
    // Get the values
    const Title = $("#txtTitle").val();
    const Description = $("#txtDescription").val();
    const Color = $("#selColor").val();
    const Date = $("#txtselDate").val();
    const Status = $("#selStatus").val();
    const Budget = $("#txtBudget").val();
    console.log(Title, Description, Color, Date, Status, Budget);

    // Build an object (assuming you have a 'task' constructor)
    let taskToSave = new task(Title, Description, Color, Date, Status, Budget);
    console.log(taskToSave);

    // Save to the server
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function (res) {
            console.log(res);
            // Display the task if needed
        },
        error: function (error) {
            console.log("Error:", error);
        }
    });
}

function testRequest() {
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
        success: function (response) {
            const data = JSON.parse(response);
            console.log(data);
        },
        error: function (error) {
            console.log("Error:", error);
        }
    });
}

function init() {
    // Load the data (if needed)

    // Hook the events
    $("#btnAdd").click(saveTask);
}

// Ensure DOM is fully loaded before executing the initialization code
$(document).ready(function () {
    init();
});
