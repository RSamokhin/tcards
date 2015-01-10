/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

pageType = 'login';
document.title = 'Translation cards';


// inserted in JSON?
/*
labelDiv = $('<div/>').addClass('label-icon').html('TCards');
birdDiv = $('<div/>').addClass('bird-icon');
mainBlockRow = $('<div/>').addClass('row main-block-row');
mainBlockDiv = $('<div/>').addClass('small-12 columns main-block-div');
loginBlockRow = $('<div/>').addClass('row login-block-row');
loginBlockTopOffset = $('<div/>').addClass('small-8 columns small-offset-2 login-block-top-offset');
loginBlockDiv = $('<div/>').addClass('small-8 columns small-offset-2 login-block-div');
loginBlockInnerRow = $('<div/>').addClass('row login-block-inner-row');
loginBlockLabel = $('<div/>').addClass('small-12 columns login-block-label').text('Login your account');
loginBlockEmail = $('<div/>').addClass('small-8 small-offset-2 columns login-block-email');
loginBlockPwd = $('<div/>').addClass('small-8 small-offset-2 columns login-block-pwd');
loginBlockEmailInput = $('<input/>').addClass('login-input email-input').attr({
    'type':'text',
    'placeholder':'E-mail'
});
loginBlockPwdInput = $('<input/>').addClass('login-input pwd-input').attr({
    'type':'password',
    'placeholder':'Password'
});
loginBlockButtonsRow = $('<div/>').addClass('columns small-8 small-offset-2 login-block-buttons-row');
loginBlockHr = $('<hr/>');
loginButtonDiv = $('<div/>').addClass('small-6 columns login-button-div');
loginButton = $('<a/>').addClass('button login-button expand').attr({
    'href':'#'
}).text('Log In');
registerButtonDiv = $('<div/>').addClass('small-6 columns register-button-div');
registerButton = $('<a/>').addClass('button register-button expand').attr({
    'href':'#'
}).text('Register');
loginBlockBotOffset = $('<div/>').addClass('small-8 columns small-offset-2 end login-block-bot-offset');
loginBlockBotFooter = $('<div/>').addClass('login-block-bot-footer').html('Translation Cards by SRG &copy; '+new Date().getFullYear());

//Inserted in JSON


birdDiv.appendTo($('body'));
labelDiv.appendTo($('body'));
loginBlockBotFooter.appendTo($('body'));

buildLoginInterface();
*/
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






pageStructure = getStructureData('login_forms_structure');
formSructureSet(pageStructure,'defaultFieldSet');
buildLoginInterface();

function getStructureData(url){
    structure = {};
    $.ajax({
        url:('../js/custom/data/'+url+'.json'),
        async:false,
        dataType: 'json'
    }).done(function(data){
        structure=data;
    });
    return structure;
}

function formSructureSet(structure,set){
    structure.fieldSets.forEach(function(e){
        if (e.name===set){
            e.set.forEach(function(el){
               createStructureTree(el);
           });
        }
    });

   function createStructureTree(el,parent){
        parent = parent || '';
        switch(el.type){
            case 'link':
                structure.fieldsArray.forEach(function(e){
                    if(e.id===el.el){
                        newEl = createElement(e);
                        (newEl).appendTo(parent);
                        (el.children)?el.children.forEach(function(r){
                            createStructureTree(r,newEl);
                        }):{};
                    }
                });                
                break;
            case 'selector':
                el.children.forEach(function(e){
                    createStructureTree(e,$(el.el));
                });
                break;
        }
   }
   function createElement(e){
       el = $('<'+e.type+'/>');
       (e.name)?el.attr('name',e.name):{};
       (e.class)?e.class.forEach(function(r){
           el.addClass(r);
       }):{};
       (e.attr)?e.attr.forEach(function(r){
           el.attr(r.name,r.value);
       }):{};
       (e.html)?el.html(e.html):{};
       return el;
   }
}

