let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");
let submitBtn = document.querySelector("#form button");
let applicantsRow = document.querySelector("#applicants");





let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
submitBtn.addEventListener("click", ()=>{
    if(submitBtn.innerText == "Submit"){
        addApplicant();
    }else{
        updateApplicant();
    }
});



// clear inputs 
function clearInpputs(){
    for(let i = 0; i < inputs.length; i++){
        inputs.values = '';
        
    }
    
    for(let i = 0; i < selects.length; i++) {
        selects[i].value == "choose...";
    }

}


// validation

function validateData(){
    let valid =  true;
    for(let i = 0; i < inputs.length; i++){
        if (inputs[i].value.trim() == "") {
            valid = false;
        }
    }
    for(let i = 0; i < selects.length; i++) {
        if (selects[i].value == "choose..."){
            valid == false;
        }
    }
    return valid;

}


// ceate applicant

function addApplicant(){
    let validation = validateData();
   
   
    
    if(validation){
    const applicant = {
        first_name : inputs[0].value,
        last_name : inputs[1].value,
        age : inputs[2].value,
        phone : inputs[3].value,
        address : inputs[4].value,
        degery : inputs[5].value,
        salalry : inputs[6].value,
        email : inputs[7].value,
        experiance : inputs[8].value,
        Image : inputs[9].value,
        gender : selects[0].value,
        job_title : selects[1].value,
        martial_status : selects[2].value,  
    };
  
     // هنا  قمنا بتعديل الدفع داخل القائمة لكي نستطيع استخدام التحديث بشكل جيد لكي لا يقوم باضافة الكرت المعدل ككرت جديد
    applicants.push(applicant); 
    
   
    // هذا هو الجديد وهنا سوف يساوي الذي  انشاناه  وهو التحديث سوف يحدث الكرت القديم   فقط
    // applicants[applicantIndex] = applicant;
    localStorage.setItem("applicants" , JSON.stringify(applicants));
    clearInpputs();
    printApplicant();
    submitBtn.classList.replace("btn_bg_color2", "btn_bg_color1");
    submitBtn.innerText = "update";
    }else{
        alert("iput are not valid");
    }
    
}


// read applicants
function printApplicant(){
    applicantsRow.innerHTML = "";
    applicants.forEach((applicant, d_index)=>{
        applicantsRow.innerHTML += `
        <div class="col-card" >
                   <div class="cards" >
                         <img src="${applicant.gender == "male"? 'assets/image/user1.png': 'assets/image/user2.png'}">
                       <div class="card-content">
                           <h4  class="card-title">${applicant.first_name} ${applicant.last_name} </h4>
                           <div class="row" >
                               <div class="div-card-text">
                                   <p class="card-text">age : ${applicant.age} </p>
                                  </div>
                                  <div class="div-card-text">
                                   <p class="card-text">martial status :  ${applicant.martial_status}</p>
                                  </div>
                          
                              <div class="div-card-text">
                               <p class="card-text">gender  :  ${applicant.gender}</p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text">Email  : ${applicant.email}</p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text">phone  :  ${applicant.phone}</p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text">address  :  ${applicant.address} </p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text">degree  :  ${applicant.degery}  </p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text">job title  :   ${applicant.job_title}  </p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text"> salary :   ${applicant.salalry}  </p>
                              </div> 
                              <div class="div-card-text">
                               <p class="card-text"> experiance :   ${applicant.experiance}</p>
                              </div> 
                              <div class="card-btn">
                               <button onclick='editApplicant(${d_index})'><i class="fa-solid fa-pen-to-square"></i></button>
                              <span> <button onclick='deletApplicant(${d_index})'><i class="fa-solid fa-trash-can"></i></button></span>
                              </div>
                           
                           </div> 
   
                       </div>
                   </div>
               </div>
       
       
       `
        
    })
   
};




// delet applicants
function deletApplicant(index){
    applicants.splice(index, 1);
    localStorage.setItem("applicants", JSON.stringify(applicants));
    printApplicant();

};



// edit applicantns
let applicantIndex;      
function editApplicant(index) {
    applicantIndex = index;
    const applicant = applicants[index]
    inputs[0].value = applicant.first_name;
    inputs[1].value = applicant.last_name;
    inputs[2].value = applicant.age;
    inputs[3].value = applicant.phone;
    inputs[4].value = applicant.address;
    inputs[5].value = applicant.degrey;
    inputs[6].value = applicant.salalry;
    inputs[7].value = applicant.email;
    inputs[8].value = applicant.experiance;
    inputs[9].value = applicant.Image;
    selects[0].value = applicant.gender;
    selects[1].value = applicant.job_title;
    selects[2].value = applicant.martial_status;

    submitBtn.classList.replace("btn_bg_color1", "btn_bg_color2");
    submitBtn.innerText = "update";

   
}



// update applicants
function updateApplicant(){
    let validation = validateData();
    
    if(validation){
    const applicant = {
        first_name : inputs[0].value,
        last_name : inputs[1].value,
        age : inputs[2].value,
        phone : inputs[3].value,
        address : inputs[4].value,
        degery : inputs[5].value,
        salalry : inputs[6].value,
        email : inputs[7].value,
        experiance : inputs[8].value,
        Image : inputs[9].value,
        gender : selects[0].value,
        job_title : selects[1].value,
        martial_status : selects[2].value,  
    };
  
    // applicants[applicantIndex] = applicant; 
    applicants.splice(applicantIndex, 1, applicant);  // هنا قمت بايقاف الاوي وجعلت هذه تجعل التعديل مثلا اذا اردت التعديل في عنصر واحد فقط وهكذا

    localStorage.setItem("applicants" , JSON.stringify(applicants));
    clearInpputs();
    printApplicant();
    submitBtn.classList.replace("btn_bg_color2", "btn_bg_color1");
    submitBtn.innerText = "Submit";
   
    }else{
        alert("iput are not valid");
    }
    
}


printApplicant();















