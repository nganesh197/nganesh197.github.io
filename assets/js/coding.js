const supplyChain = document.querySelector(".supply-chain");
const supplyChainSection = document.querySelector('.supply-chain-section');
const dataAnalysis = document.querySelector('.data-analysis');
const dataAnalysisSection = document.querySelector('.data-analysis-section');
// const applications = document.querySelector('.applications');
// const applicationsSection = document.querySelector('.applications-section');



supplyChain.addEventListener('click', function(){
    changeTabs("supply");
});
dataAnalysis.addEventListener('click', function(){
    changeTabs("data");
});
// applications.addEventListener('click', function(){
//     changeTabs("app");
// });

function changeTabs(which_one){
    if(which_one=="supply"){
            supplyChain.classList.add('show');
            supplyChainSection.classList.add('show');
            if(dataAnalysis.classList.contains('show')){
                dataAnalysis.classList.remove('show');
                dataAnalysisSection.classList.remove('show');
            }else{
                //applications.classList.remove('show');
                //applicationsSection.classList.remove('show');
            }
    }else if(which_one=="data"){
        if (supplyChain.classList.contains('show')){
            supplyChain.classList.remove('show');
            supplyChainSection.classList.remove('show');
        }else{
            //applications.classList.remove('show');
            //applicationsSection.classList.remove('show');
        }
        dataAnalysis.classList.add('show');
        dataAnalysisSection.classList.add('show');

    }else{
        if (supplyChain.classList.contains('show')){
            supplyChain.classList.remove('show');
            supplyChainSection.classList.remove('show');
        }else{
            dataAnalysis.classList.remove('show');
            dataAnalysisSection.classList.remove('show');
        }
        //applications.classList.add('show');
        //applicationsSection.classList.add('show');
    }

}
const url_sent = window.location.href;
if(url_sent.includes("#data")){
    changeTabs("data");
}