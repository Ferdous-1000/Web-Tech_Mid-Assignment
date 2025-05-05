document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let empID = document.getElementById('empID').value;
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;
    let joiningDate = document.getElementById('joiningDate').value;
    let gender = document.querySelector('input[name="gender"]:checked');
let employmentType = document.getElementById('employmentType').checked? 'Full-Time' : 'Part-Time';
    
    if (!/^EMP\d{3}$/.test(empID)) {
    alert("Employee ID must start with 'EMP' followed by 3 digits.");
    return;
    }
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
    alert("Full Name should only contain alphabets and spaces.");
    return;
    }
    if (!email.includes("@")) {
     alert("Invalid email format.");
        return;
    }
    if (!department) {
     alert("Please select a department.");
        return;
    }
    if (!joiningDate) {
     alert("Joining Date cannot be empty.");
        return;
    }
    if (!gender) {
     alert("Please select gender.");
     return;
    }

    let output = `
        <h3>Registered Employee</h3>
        <p><strong>ID:</strong> ${empID}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Joining Date:</strong> ${joiningDate}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Employment Type:</strong> ${employmentType}</p>
    `;

    document.getElementById('output').innerHTML = output;
});

function deleteRow(button) {
    button.parentElement.parentElement.remove();
}
function editRow(button) {
    let row = button.parentElement.parentElement;
document.getElementById("editIndex").value = row.rowIndex;
document.getElementById("editID").value = row.cells[0].innerText; 
document.getElementById("editName").value = row.cells[1].innerText;
document.getElementById("editEmail").value = row.cells[2].innerText;
document.getElementById("editDepartment").value = row.cells[3].innerText;
document.getElementById("editJoiningDate").value = row.cells[4].innerText;
document.getElementById("editGender").value = row.cells[5].innerText;
document.getElementById("editEmploymentType").value = row.cells[6].innerText;
}
function saveChanges() {
    let index = document.getElementById("editIndex").value;
    if (index) {
    let table = document.getElementById("employeeTable").rows[index];
    table.cells[1].innerText = document.getElementById("editName").value;
    table.cells[2].innerText = document.getElementById("editEmail").value;
    table.cells[3].innerText = document.getElementById("editDepartment").value;
    table.cells[4].innerText = document.getElementById("editJoiningDate").value;
    table.cells[5].innerText = document.getElementById("editGender").value;
    table.cells[6].innerText = document.getElementById("editEmploymentType").value;
    }
}
