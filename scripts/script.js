$('#embedpages').on('load', function(){
	var prnt = $('#embedpages', window.parent.document).html();
	var link = $('.outbound', $('#embedpages').get(0).contentWindow.document);	
	link.on('click', function(){
	   var u = $(this).get(0).href;
	   var k = $('#exampleModalCenter', prnt);
	   var p = $('.btn-primary', k);
	   p.off('click').on('click', function(event){
		 event.preventDefault();
		 event.stopPropagation();
		 window.open(u, '_blank');
		 k.modal('hide');
	   });
	   k.modal('show');
	});	
});