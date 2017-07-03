/**
 * Created by Carolyn on 2017-05-15.
 */

function includeDisaFunc(check){
    if(check) {
        document.getElementById("includeDisa").innerHTML = '<p><a href = "http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_disabilities.pdf">' +
            ' http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_disabilities.pdf </a></p>'
    }
    else{
        document.getElementById("includeDisa").innerHTML = "";
    }
}

function includeRelFunc(check){
    if(check) {
        document.getElementById("includeReli").innerHTML = '<p><a href = "http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf">' +
            'http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_religious.pdf  </a></p>'
    }
    else{
        document.getElementById("includeReli").innerHTML = "";
    }
}

function plagiFunc(check){
    if(check) {
        document.getElementById("plagi").innerHTML = '<p>All required papers may be subject to submission for textual similarity review to the commercial plagiarism detection software under license to the University for the detection of plagiarism. All papers submitted for such checking will be included as source documents in the reference database for the purpose of detecting plagiarism of papers subsequently submitted to the system. Use of the service is subject to the licensing agreement, currently between The University of Western Ontario and Turnitin.com (<a href = "http://www.turnitin.com">http://www.turnitin.com</a> ).</p>'
    }
    else{
        document.getElementById("plagi").innerHTML = "";
    }
}

function mcFunc(check){
    if(check) {
        document.getElementById("mch").innerHTML = '<p> Computer-marked multiple-choice tests and/or exams may be subject to submission for similarity review by software that will check for unusual coincidences in answer patterns that may indicate cheating.</p>'
    }
    else{
        document.getElementById("mch").innerHTML = "";
    }
}

function lssFunc(check){
    if(check) {
        document.getElementById("lss").innerHTML = '<p><a href="http://www.sdc.uwo.ca">http://www.sdc.uwo.ca</a></p>'
    }
    else{
        document.getElementById("lss").innerHTML = "";
    }
}

function acFunc(check){
    if(check) {
        document.getElementById("acc").innerHTML = '<p><a href = "http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_disabilities.pdf">' +
            ' http://www.uwo.ca/univsec/pdf/academic_policies/appeals/accommodation_disabilities.pdf </a></p>'
    }
    else{
        document.getElementById("acc").innerHTML = "<p>Please contact the course instructor if you require material in an alternate format or if you require any other arrangements to make this course more accessible to you. You may also wish to contact Services for Students with Disabilities (SSD) at 661-2111 x 82147 for any specific question regarding an accommodation.</p>";
    }
}

function strFunc(check){
    if(check) {
        document.getElementById("straS").innerHTML = '<p> <textarea id="straSu" form = "syllabus" name="strategy" rows = 10 cols = 100 required>' +
            '</textarea></p>'
    }
    else{
        document.getElementById("straS").innerHTML = "";
    }
}


