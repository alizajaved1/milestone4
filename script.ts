document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    const resumeEditSection = document.getElementById('resumeEditSection') as HTMLDivElement;
    const resumeEditForm = document.getElementById('resumeEditForm') as HTMLFormElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        // Retrieve values from the form
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        // Create resume output HTML
        const resumeHTML = `
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h3>Education</h3>
            <p><strong>Education:</strong> ${education}</p>

            <h3>Work Experience</h3>
            <p><strong>Experience:</strong> ${experience}</p>

            <h3>Skills</h3>
            <p><strong>Skills:</strong> ${skills}</p>

            <h3>Description</h3>
            <p><strong>Description:</strong> ${description}</p>

            <button id="editButton">Edit</button>
        `;

        // Display the generated resume
        resumeOutput.innerHTML = resumeHTML;
        resumeEditSection.style.display = 'block';

        // Populate the edit form with existing values
        (document.getElementById('editName') as HTMLInputElement).value = name;
        (document.getElementById('editEmail') as HTMLInputElement).value = email;
        (document.getElementById('editPhone') as HTMLInputElement).value = phone;
        (document.getElementById('editEducation') as HTMLInputElement).value = education;
        (document.getElementById('editExperience') as HTMLInputElement).value = experience;
        (document.getElementById('editSkills') as HTMLInputElement).value = skills;
        (document.getElementById('editDescription') as HTMLInputElement).value = description;
    });

    resumeOutput.addEventListener('click', (e) => {
        if ((e.target as HTMLButtonElement).id === 'editButton') {
            resumeEditSection.style.display = 'block';
        }
    });

    resumeEditForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        // Retrieve values from the edit form
        const editName = (document.getElementById('editName') as HTMLInputElement).value;
        const editEmail = (document.getElementById('editEmail') as HTMLInputElement).value;
        const editPhone = (document.getElementById('editPhone') as HTMLInputElement).value;
        const editEducation = (document.getElementById('editEducation') as HTMLInputElement).value;
        const editExperience = (document.getElementById('editExperience') as HTMLInputElement).value;
        const editSkills = (document.getElementById('editSkills') as HTMLInputElement).value;
        const editDescription = (document.getElementById('editDescription') as HTMLInputElement).value;

        // Create updated resume output HTML
        const updatedResumeHTML = `
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${editName}</p>
            <p><strong>Email:</strong> ${editEmail}</p>
            <p><strong>Phone:</strong> ${editPhone}</p>

            <h3>Education</h3>
            <p><strong>Education:</strong> ${editEducation}</p>

            <h3>Work Experience</h3>
            <p><strong>Experience:</strong> ${editExperience}</p>

            <h3>Skills</h3>
            <p><strong>Skills:</strong> ${editSkills}</p>

            <h3>Description</h3>
            <p><strong>Description:</strong> ${editDescription}</p>

            <button id="editButton">Edit</button>
        `;

        // Display the updated resume
        resumeOutput.innerHTML = updatedResumeHTML;
    });
});
