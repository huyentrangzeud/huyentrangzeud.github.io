var slideIndex = 0;
showSlides();
	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("myslide");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
			slideIndex++;
			if (slideIndex > slides.length) {slideIndex = 1}    
			slides[slideIndex-1].style.display = "block";  
			setTimeout(showSlides, 2500); 
	}
/*=====================================================================*/
window.addEventListener('load',function(){create_left_menu();});
	function create_left_menu() {
    	var danh_muc = ['NIKE', 'ADIDAS', 'VANS', 'CONVERSE', 'ACCESSORIES'];
    	var khung = document.getElementsByClassName('list_danh_muc')[0];
    	var vt = 0;
    	for (var i = 0; i < danh_muc.length; i++) {
        	khung.innerHTML += '<a class="use_for_login" href="sanpham.html?' + i + '&' + vt + '">\
      		<div class="list_item">' + danh_muc[i] + '</div>\
    		</a>';
   			}
	}
/*=====================================================================*/
create_box();
    function create_box() {
		var danh_muc = ['NIKE', 'ADIDAS', 'VANS', 'CONVERSE'];	
    	var list_sp = document.getElementsByClassName('list_sp')[0];
		var list_sp_2 = document.getElementsByClassName('list_sp')[1];
    	for (var i = 0; i < danh_muc.length; i++) {
 			list_sp.innerHTML += '<div class="product-box">\
        <a class="box" href="thong-tin-sp.html">\
          	<div class="hinh-sp">\
            <div style="background-image: url(./images/hot/Hot_' + (i + 1) + '.jpg)" class="hinh"></div>\
          </div>\
          <p class="ten-sp">' + danh_muc[i] + " Style " +  i + 3  +'</p>\
          <p class="gia-tien">111đ<span class="gia-cu">222đ</span></p>\
        </a>\
	<div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
		}
		for (var i = 0; i < 2; i++) {
 			list_sp_2.innerHTML += '<div class="product-box">\
        <a class="box" href="thong-tin-sp.html">\
          	<div class="hinh-sp">\
            <div style="background-image: url(./images/BESTSELER/' + (i + 1) + '.jpg)" class="hinh"></div>\
          </div>\
          <p class="ten-sp">'+  (i + 1)  +'</p>\
          <p class="gia-tien">10.000đ<span class="gia-cu">5.000đ</span></p>\
        </a>\
	<div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
		}
	}
	
/*=====================================================================*/
function show_content() {
	console.log('run');
    var html = document.documentElement;
    html.scrollTop = 685;
    //document.getElementsByClassName('khung_sp')[0].scrollIntoView(true);
}
(function(){phan_tich_url();})(); // window.onload
// phân tích url theo ?{'số thứ tự danh mục'}&{'vị trí bắt đầu load sản phẩm'}
function phan_tich_url() {
    var default_create = 0;
    var code = window.location.href.split('?')[1].split('&');
    //code[0] là thứ tự danh mục
    //code[1] là vị trí bắt đầu load sản phẩm

    var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_luong = 0,
        so_trang = 1;


	console.log(code[1]);
    if (code[1] >= 0) {
        show_content();
    }
	
    switch (code[0]) {
        case '0':

            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[0].className += ' hidden';
            list_sp[0].className += ' hidden';			
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
			var style = document.getElementsByClassName('first_txt')[2];
			style.innerHTML = "";
			style.innerHTML = 'NIKE'; 
            for (var i = parseFloat(code[1]); i < 21 && so_luong < 12; i++) {
                so_luong++;
                list_sp[2].innerHTML += '<div class="product-box">\
          <a class="box" href="thong-tin-sp.html">\
            <div class="hinh-sp">\
              <div style="background-image: url(./images/NIKE/NIKE_' + (i + 1) + '.jpg)" class="hinh"></div>\
            </div>\
            <p class="ten-sp">ADIDAS - ' + (i + 1) + '</p>\
            <p class="gia-tien">1đ<span class="gia-cu">1đ</span></p>\
          </a>\
          <div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
            }
            so_trang = Math.ceil(21 / 12);
            break;
        case '1':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[0].className += ' hidden';
            list_sp[0].className += ' hidden';			
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            var style = document.getElementsByClassName('first_txt')[2];
			style.innerHTML = "";
			style.innerHTML = 'ADISDAS';
            for (var i = parseFloat(code[1]); i < 28 && so_luong < 12; i++) {
                so_luong++;
                list_sp[2].innerHTML += '<div class="product-box">\
              <a class="box" href="thong-tin-sp.html">\
                <div class="hinh-sp">\
                  <div style="background-image: url(./images/ADIDAS/ADIDAS_' + (i +
                        1) + '.jpg)" class="hinh"></div>\
                </div>\
                <p class="ten-sp">ADIDAS - ' + (i + 1) +
                    '</p>\
                <p class="gia-tien">7.000đ<span class="gia-cu">5.000đ</span></p>\
              </a>\
              <div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
            }
            so_trang = Math.ceil(28 / 12);
            break;
        case '2':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[0].className += ' hidden';
            list_sp[0].className += ' hidden';			
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            var style = document.getElementsByClassName('first_txt')[2];
			style.innerHTML = "";
			style.innerHTML = 'VANS';
            for (var i = parseFloat(code[1]); i < 16 && so_luong < 12; i++) {
                so_luong++;
                list_sp[2].innerHTML +=
                    '<div class="product-box">\
                  <a class="box" href="thong-tin-sp.html">\
                    <div class="hinh-sp">\
                      <div style="background-image: url(./images/VANS/VANS_' + (i + 1) +
                    '.jpg)" class="hinh"></div>\
                    </div>\
                    <p class="ten-sp">VANS - ' + (i + 1) +
                    '</p>\
                    <p class="gia-tien">20.000đ<span class="gia-cu">10.000đ</span></p>\
                  </a>\
                  <div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
            }
            so_trang = Math.ceil(16 / 12);
            break;
        case '3':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[0].className += ' hidden';
            list_sp[0].className += ' hidden';			
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            var style = document.getElementsByClassName('first_txt')[2];
			style.innerHTML = "";
			style.innerHTML = 'CONVERSE';
            for (var i = parseFloat(code[1]); i < 2 && so_luong < 12; i++) {
                so_luong++;
                list_sp[2].innerHTML +=
                    '<div class="product-box">\
                      <a class="box" href="thong-tin-sp.html">\
                        <div class="hinh-sp">\
                          <div style="background-image: url(./images/CONVERSE/CONVERSE_' + (i +
                        1) + '.jpg)" class="hinh"></div>\
                        </div>\
                        <p class="ten-sp">CONVERSE - ' + (i + 1) +
                    '</p>\
                        <p class="gia-tien">10.000.000đ<span class="gia-cu"></span></p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
            }
            so_trang = Math.ceil(2 / 12);
            break;
        case '4':
            var header = document.getElementsByClassName('khung_sp_header');
            var list_sp = document.getElementsByClassName('list_sp');
            header[0].className += ' hidden';
            list_sp[0].className += ' hidden';			
            header[1].className += ' hidden';
            list_sp[1].className += ' hidden';
            var style = document.getElementsByClassName('first_txt')[2];
			style.innerHTML = "";
			style.innerHTML = 'ACCESSORIES';			
            for (var i = parseFloat(code[1]); i < 3 && so_luong < 12; i++) {
                so_luong++;
                list_sp[2].innerHTML +=
                    '<div class="product-box">\
                          <a class="box" href="thong-tin-sp.html">\
                            <div class="hinh-sp">\
                              <div style="background-image: url(./images/ACCESSORIES/ACCESSORIES_' +
                    (i + 1) + '.jpg)" class="hinh"></div>\
                            </div>\
                            <p class="ten-sp">ACCESSORIES - ' + (i + 1) +
                    '</p>\
                            <p class="gia-tien">20.000đ<span class="gia-cu">5.000đ</span></p>\
                          </a>\
                          <div class="them-vao-gio-hang"><button value="' + i + '&1" type="button" class="thich">LIKE </button>\<button value="' + i + '&1" type="button" class="chitiet">DETAIL </button>\<button value="' + i + '&1" type="button" class="them">Add  </button> <\div>\
	</div>';
            }
            so_trang = Math.ceil(3 / 12);
            break;
        default:
            break;
    }
    var temp = code[1];
    for (var i = 1; i <= so_trang; i++) {
        code[1] = (i - 1) * 12;
        chuyen_trang.innerHTML +=
            '<a href="sanpham.html?' + code[0] + '&' + code[1] + '" class="so_trang">' + i + '</a>';
    }
    var trang_can_block = document.getElementsByClassName('so_trang')[temp / 12];
    trang_can_block.className += ' block_trang';
}