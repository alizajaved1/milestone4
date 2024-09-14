document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeEditSection = document.getElementById('resumeEditSection');
    var resumeEditForm = document.getElementById('resumeEditForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        // Retrieve values from the form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Create resume output HTML
        var resumeHTML = "\n            <h2>Resume</h2>\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n\n            <h3>Work Experience</h3>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n\n            <h3>Description</h3>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n\n            <button id=\"editButton\">Edit</button>\n        ");
        // Display the generated resume
        resumeOutput.innerHTML = resumeHTML;
        resumeEditSection.style.display = 'block';
        // Populate the edit form with existing values
        document.getElementById('editName').value = name;
        document.getElementById('editEmail').value = email;
        document.getElementById('editPhone').value = phone;
        document.getElementById('editEducation').value = education;
        document.getElementById('editExperience').value = experience;
        document.getElementById('editSkills').value = skills;
        document.getElementById('editDescription').value = description;
    });
    resumeOutput.addEventListener('click', function (e) {
        if (e.target.id === 'editButton') {
            resumeEditSection.style.display = 'block';
        }
    });
    resumeEditForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        // Retrieve values from the edit form
        var editName = document.getElementById('editName').value;
        var editEmail = document.getElementById('editEmail').value;
        var editPhone = document.getElementById('editPhone').value;
        var editEducation = document.getElementById('editEducation').value;
        var editExperience = document.getElementById('editExperience').value;
        var editSkills = document.getElementById('editSkills').value;
        var editDescription = document.getElementById('editDescription').value;
        // Create updated resume output HTML
        var updatedResumeHTML = "\n            <h2>Resume</h2>\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(editName, "</p>\n            <p><strong>Email:</strong> ").concat(editEmail, "</p>\n            <p><strong>Phone:</strong> ").concat(editPhone, "</p>\n\n            <h3>Education</h3>\n            <p><strong>Education:</strong> ").concat(editEducation, "</p>\n\n            <h3>Work Experience</h3>\n            <p><strong>Experience:</strong> ").concat(editExperience, "</p>\n\n            <h3>Skills</h3>\n            <p><strong>Skills:</strong> ").concat(editSkills, "</p>\n\n            <h3>Description</h3>\n            <p><strong>Description:</strong> ").concat(editDescription, "</p>\n\n            <button id=\"editButton\">Edit</button>\n        ");
        // Display the updated resume
        resumeOutput.innerHTML = updatedResumeHTML;
    });
});
