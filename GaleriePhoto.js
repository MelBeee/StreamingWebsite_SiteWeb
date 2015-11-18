function MontrerPhoto()
{
  var Icone = document.getElementById('GalerieIcone') ;
  var Link = Icone.getElementsByTagName('a') ;
  var Photo = document.getElementById('GrosseImage') ;
  var Nom = document.getElementById('Image').getElementsByTagName('dt')[0] ;

  for (var i = 0 ; i < Link.length ; ++i) 
  {
    Link[i].onclick = function() 
	{
      Photo.src = this.href; 
      Photo.alt = this.title; 
      Nom.firstChild.nodeValue = this.title; 
      return false; 
    };
  }
}

window.onload = MontrerPhoto;