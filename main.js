
const formFields = [
    {title:"firstname", htmlTag:"input", type:"text", label:"Firstname"},
    {title:"lastname", htmlTag:"input", type:"text", label:"Lastname"},
    {title:"birthdate", htmlTag:"input", type:"date", label:"Birthdate"},
    {title:"country", htmlTag:"input", type:"text", label:"Country"},
    {title:"phoneNumber", htmlTag:"input", type:"tel", label:"Phone number"},
    {title:"emailAddress", htmlTag:"input", type:"email", label:"Email address"},
    {title:"gender", htmlTag:"select", label:"Gender", options: [
        {title:"Male"},
        {title:"Female"}
    ]},
    {title:"fitLevel", htmlTag:"select", label:"How much do you think you fit the job ?", options: [
        {title:"1 - Perfectly"},
        {title:"2 - Moderately confident"},
        {title:"3 - Hopefully"}
    ]},
    {title:"driverLicense", name:"license", htmlTag:"input", type:"checkbox", label:"Do you have your driver's license ?"},
    {title:"flightPermit", name:"license", htmlTag:"input", type:"checkbox", label:"Do you have your flight permit ?"},
    {title:"boatLicense", name:"license", htmlTag:"input", type:"checkbox", label:"Do you have your boat license ?"}
];

formFields.forEach(function(formField) {
    let formFieldDiv = document.createElement("div");
    let formFieldLabel = document.createElement("label");
    formFieldLabel.innerText = formField.label;
    formFieldLabel.htmlFor = formField.title;

    let formFieldEl;

    switch(formField.htmlTag) {
        case "input":
            formFieldEl = document.createElement("input");
            formFieldEl.type = formField.type;
            formFieldEl.id = formField.title;       // for label
            formFieldEl.title = formField.title;    // for tooltip
            
            switch(formField.type) {
                case "checkbox":
                    formFieldEl.value = formField.title;
                    formFieldEl.name = formField.name;     // for submit
                    break;
                default:
                    formFieldEl.name = formField.title;     // for submit
            }
            break;

        case "select":
            formFieldEl = document.createElement("select");
            formFieldEl.id = formField.title;       // for label
            formFieldEl.title = formField.title;    // for tooltip
            formFieldEl.name = formField.title;     // for submit

            formField.options.forEach(function(option) {
                let optionEl = document.createElement("option");
                optionEl.innerText = option.title;
                formFieldEl.append(optionEl);
            });
            break;
    }

    formFieldEl.className = 'formFieldEl';
    formFieldDiv.append(formFieldLabel);
    formFieldDiv.append(formFieldEl);
    document.body.append(formFieldDiv);
});

let submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.innerText = 'Submit';
submitBtn.addEventListener('click', function(e) {
    let formFieldEls = document.querySelectorAll('.formFieldEl');
    let submittedForm = {};
    formFieldEls.forEach(function(formFieldEl) {
        if (formFieldEl.type !== 'checkbox') {
            submittedForm[formFieldEl.name] = formFieldEl.value;
        } else {
            submittedForm[formFieldEl.name + '-' + formFieldEl.value] = formFieldEl.checked;
        }
    })
    console.log(submittedForm);
});
document.body.append(submitBtn);