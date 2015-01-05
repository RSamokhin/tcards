/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

pageType = 'login';
document.title = 'Translation cards';


// inserted in JSON
labelDiv = $('<div/>').addClass('label-icon').text('TCards');
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
loginBlockBotFooter = $('<div/>').addClass('small-8 columns small-offset-2 login-block-bot-footer').html('Translation Cards by SRG &copy; '+new Date().getFullYear());

//Inserted in JSON


birdDiv.appendTo($('body'));
labelDiv.appendTo($('body'));
buildLoginInterface();

function buildLoginInterface(){
    pageType='login';
    $('.main-block-row').remove();
    mainBlockRow.appendTo($('body'));
    mainBlockDiv.appendTo(mainBlockRow);
    loginBlockRow.appendTo(mainBlockDiv);
    loginBlockTopOffset.appendTo(loginBlockRow);
    loginBlockDiv.appendTo(loginBlockRow);
    loginBlockBotOffset.appendTo(loginBlockRow);
    loginBlockInnerRow.appendTo(loginBlockDiv);
    loginBlockLabel.appendTo(loginBlockInnerRow);
    loginBlockEmail.appendTo(loginBlockInnerRow);
    loginBlockPwd.appendTo(loginBlockInnerRow);
    loginBlockEmailInput.appendTo(loginBlockEmail);
    loginBlockPwdInput.appendTo(loginBlockPwd);
    loginBlockHr.appendTo(loginBlockInnerRow);
    loginBlockButtonsRow.appendTo(loginBlockInnerRow);
    loginButtonDiv.appendTo(loginBlockButtonsRow);
    registerButtonDiv.appendTo(loginBlockButtonsRow);
    loginButton.appendTo(loginButtonDiv);
    registerButton.appendTo(registerButtonDiv);
    loginBlockBotFooter.appendTo(loginBlockBotOffset);
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