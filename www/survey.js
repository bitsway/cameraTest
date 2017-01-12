function takePicture(){

navigator.camera.getPicture( cameraSuccess, cameraError, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        correctOrientation: true,
        saveToPhotoAlbum: true
    }); 

}

function cameraSuccess(uri){   
    //alert(uri);
    takePicture();    
}

function cameraError(message){
    alert("Canceled!"); 
}

$('#ThumbnailTest_buttonTakePhotosNow').click(function(){
    takePicture();
});