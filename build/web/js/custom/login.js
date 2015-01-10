/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

pageType = 'login';
document.title = 'Translation cards';
pageStructure = getStructureData('login_forms_structure');
formSructureSet(pageStructure,'defaultFieldSet');
buildLoginInterface();
function buildLoginInterface(){
    pageType='login';
    $('.main-block-row').remove();
    formSructureSet(pageStructure,'loginFieldSet');
}
function buildRegisterInterface(){
    $('.main-block-row').remove();
    pageType='register';
}
$('.login-button').bind('click',function(){
    if(pageType!=='login')
        buildLoginInterface();
});
$('.register-button').bind('click',function(){
    if(pageType!=='register')
        buildRegisterInterface();
});