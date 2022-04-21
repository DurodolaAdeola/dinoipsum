import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DinoIpsum from './dinoIpsum_services';
import './css/styles.css';

$("#form").submit((e)=>{
    e.preventDefault();
    const wordInput = parseInt($("#no-words").val());
    const paraInput = parseInt($("#no-para").val());
    $("#no-words").val("");
    $("#no-para").val("");

    let promise = DinoIpsum.getIpsum(paraInput , wordInput);
    promise
    .then(function(response){
        let htmlElement = "";
        let resp = JSON.parse(response);
        resp.forEach((element) => {
            let para = "<p>";
            element.forEach((e) => { 
                para += `${e} `
            });
            htmlElement += `${para} </p>`
        }) 
        $(".display").html(htmlElement)
    },
    function(reject){
    })
    $(".display").html(reject);
})