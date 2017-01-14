$.afui.useOSThemes=false;
    $.afui.loadDefaultHash=true;
    $.afui.autoLaunch=false;

    //check search
    var search=document.location.search.toLowerCase().replace("?","");
    if(search.length>0)
    {

       $.afui.useOSThemes=true;
        if(search=="win8")
            $.os.ie=true;
        else if(search=="firefox")
            $.os.fennec="true"
        $.afui.ready(function(){
            $(document.body).get(0).className=(search);
        });
    }

    $(document).ready(function(){
        $.afui.launch();
		
		
		//================== Redirect to visit page
		

		
		
		
		
    });

    //if($.os.ios)
        $.afui.animateHeader(true);
	//	getLocation()









var mobile_off_flag=0;


//======================================

function setPicture(){
localStorage.picFlag=0;
//alert (localStorage.picFlag)
}
function cancelPicture(i){
	var imageDiv="myImage"+i
	var imageText="prPhoto"+i
	$("#"+imageDiv).html('');
	$("#"+imageText).val('');
}
function takePicture(){
navigator.camera.getPicture( cameraSuccess, cameraError, {
		quality: 90,
		targetWidth: 400,
       // destinationType: Camera.DestinationType.FILE_URI,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true ,
        correctOrientation: true,
        saveToPhotoAlbum: true
    }); 
	
}

function cameraSuccess(uri){  
	var picNo=parseInt(localStorage.picFlag)+1 
	var imageDiv="myImage"+picNo
	var imageText="prPhoto"+picNo
	localStorage.picFlag=picNo
	var image = document.getElementById(imageDiv);
	image.src = uri;
	imagePath = uri;
	
	//alert (uri)
	takePicture();
	
	
   
    
	$("#"+imageText).val(imagePath);
        
}

function cameraError(message){
    alert("Canceled!"); 
	
}

$('#ThumbnailTest_buttonTakePhotosNow').click(function(){
    takePicture();
});