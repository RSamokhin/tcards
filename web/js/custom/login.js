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

