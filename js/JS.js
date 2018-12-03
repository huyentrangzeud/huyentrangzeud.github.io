var ten_danh_muc_sp = ['NIKE', 'ADIDAS', 'VANS', 'CONVERSE', 'ACCESSORIES', 'DRIVER'];
//=======================================================
window.addEventListener('load', click_add_to_cart);


function index() {
	showSlides();
	fixedElement();
	scroll_to_top();
	create_left_menu();
	create_box();
	phan_tich_url();	
}
function giohang() {
	load_gio_hang();
	click_delete_cart();
	tinh_tong_sp();
	tinh_tong_tien();
	fixedElement();gub 
	scroll_to_top();	
}
function thongtin_sp(){
	url_chi_tiet_sp();
	fixedElement();
	scroll_to_top();		
}

function fixedElement() {
    	var html = document.documentElement;
    	var nav = document.getElementsByClassName('menuheader')[0];
    	window.onscroll = function () {
        	if (html.scrollTop > 250) {
           		nav.className = 'fixed_menuheader';
        	} else {
            	nav.className = 'menuheader';
        		}
   		 }
	}
function scroll_to_top() {

    var btn = document.getElementsByClassName('scroll_to_top')[0];
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 130) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
});


    btn.onclick = function() {
        document.documentElement.scrollTop = 0;
    };
}
//======================
var slideIndex = 0;
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
function san_pham(masp, matl,tensp, gia ,hinh, hinh1, hinh2, hinh3){
	this.masp=masp;
	this.matl=matl;
	this.tensp=tensp;
	this.gia=gia;
	this.hinh=hinh;
	this.hinh1=hinh1;
	this.hinh2=hinh2;
	this.hinh3=hinh3;
}
//=================================== khoi tao mang san pham 
var nike = new Array();

nike[0] = new san_pham("nike0", 0, "name 1", 1,"./images/NIKE/NIKE_1.jpg");
nike[1] = new san_pham("nike1", 0, "name 2", 2,"./images/NIKE/NIKE_2.jpg");
nike[2] = new san_pham("nike2", 0, "name 3", 3,"./images/NIKE/NIKE_3.jpg");
nike[3] = new san_pham("nike3", 0, "name 4", 40,"./images/NIKE/NIKE_4.jpg");
nike[4] = new san_pham("nike4", 0, "name 5", 5,"./images/NIKE/NIKE_5.jpg");
nike[5] = new san_pham("nike5", 0, "name 6", 6,"./images/NIKE/NIKE_6.jpg");
nike[6] = new san_pham("nike6", 0, "name 7", 7,"./images/NIKE/NIKE_7.jpg");
nike[7] = new san_pham("nike7", 0, "name 8", 8,"./images/NIKE/NIKE_8.jpg");
nike[8] = new san_pham("nike8", 0, "name 9", 9,"./images/NIKE/NIKE_9.jpg");
nike[9] = new san_pham("nike9", 0, "name 10", 10,"./images/NIKE/NIKE_10.jpg");
nike[10] = new san_pham("nike10", 0, "name 11", 11,"./images/NIKE/NIKE_11.jpg");
nike[11] = new san_pham("nike11", 0, "name 12", 12,"./images/NIKE/NIKE_12.jpg");
nike[12] = new san_pham("nike12", 0, "name 13", 13,"./images/NIKE/NIKE_13.jpg");
nike[13] = new san_pham("nike13", 0, "name 14", 14,"./images/NIKE/NIKE_14.jpg");
nike[14] = new san_pham("nike14", 0, "name 15", 15,"./images/NIKE/NIKE_15.jpg");
nike[15] = new san_pham("nike15", 0, "name 16", 16,"./images/NIKE/NIKE_16.jpg");
nike[16] = new san_pham("nike16", 0, "name 17", 17,"./images/NIKE/NIKE_17.jpg");
nike[17] = new san_pham("nike17", 0, "name 18", 18,"./images/NIKE/NIKE_18.jpg");
nike[18] = new san_pham("nike18", 0, "name 19", 19,"./images/NIKE/NIKE_19.jpg");
nike[19] = new san_pham("nike19", 0, "name 20", 20,"./images/NIKE/NIKE_20.jpg");
nike[20] = new san_pham("nike20", 0, "name 21", 21,"./images/NIKE/NIKE_21.jpg");
/*=====================================================================*/
var adidas = new Array();

adidas[0] = new san_pham("adidas0", 1, "adidas1", 1,"./images/ADIDAS/ADIDAS_1.jpg");
adidas[1] = new san_pham("adidas1", 1, "adidas2", 2,"./images/ADIDAS/ADIDAS_2.jpg");
adidas[2] = new san_pham("adidas2", 1, "adidas3", 3,"./images/ADIDAS/ADIDAS_3.jpg");
adidas[3] = new san_pham("adidas3", 1, "adidas4", 4,"./images/ADIDAS/ADIDAS_4.jpg");
adidas[4] = new san_pham("adidas4", 1, "adidas5", 5,"./images/ADIDAS/ADIDAS_5.jpg");
//======================================================================
var vans = new Array();
//======================================================================
var converse = new Array();
//======================================================================
var accessories = new Array();

accessories[0] = new san_pham("accessories0", 4, "name 1", 1,"./images/ACCESSORIES/ACCESSORIES_1.jpg");
accessories[1] = new san_pham("accessories1", 4, "name 2", 2,"./images/ACCESSORIES/ACCESSORIES_2.jpg");
accessories[2] = new san_pham("accessories2", 4, "name 3", 3,"./images/ACCESSORIES/ACCECSSORIES_3.jpg");
accessories[3] = new san_pham("accessories3", 4, "name 4", 4,"./images/ACCESSORIES/ACCESSORIES_4.jpg");
accessories[4] = new san_pham("accessories4", 4, "name 5", 5,"./images/ACCESSORIES/ACCESSORIES_5.jpg");
//======================================================================
var driver = new Array();

driver[0] = new san_pham("driver0", 5, "Build Driver", 1,"images/DRIVER/Build/build_driver_1_400x400.jpg","images/DRIVER/Build/build_driver_2_400x400.jpg","images/DRIVER/Build/build_driver_3_400x400.jpg","images/DRIVER/Build/build_driver_4_400x400.jpg");
//======================================================================
//Khởi tạo mảng chứa các danh mục sản phẩm
var list_danh_muc = [nike, adidas, vans, converse, accessories, driver];

function create_left_menu() {
    var khung = document.getElementsByClassName('list_danh_muc')[0];
    var vt = 0;
    for (var i = 0; i < ten_danh_muc_sp.length; i++) {
        khung.innerHTML += '<a class="use_for_login" href="sanpham.html?' + i + '&' + vt + '">\
      <div class="danh_muc_item">' + ten_danh_muc_sp[i] + '</div>\
    </a>';
    }
};
//======================================================================

    function create_box() {	
    		var list_sp = document.getElementsByClassName('list_sp');
			var list_sp_2 = document.getElementsByClassName('list_sp');
    		for (var i = 0; i < 8; i++) {
 			list_sp[0].innerHTML += '<div class="product-box">\
	<a class="box" href="thong_tin_sp.html?' + i + '&0">\
          	<div class="hinh-sp">\
            <div style="background-image: url(' + nike[i].hinh + ')" class="hinh"></div>\
          </div>\
          <p class="ten-sp">' + nike[i].tensp + '</p>\
          <p class="gia-tien">' + nike[i].gia + '.000.000d</p>\
        </a>\
	<div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn"  value="' + i + '&0" style="button" class="them">Add</button></div>\
      </div>';
		}
		for (var i = 0; i < 2; i++) {
 			list_sp_2[1].innerHTML += '<div class="product-box">\
	<a class="box" href="thong_tin_sp.html?' + i + '&4">\
          	<div class="hinh-sp">\
            <div style="background-image: url(' + accessories[i].hinh + ')" class="hinh"></div>\
          </div>\
          <p class="ten-sp">'+ accessories[i].tensp +'</p>\
          <p class="gia-tien">' + accessories[i].gia + '.000.000d</p>\
        </a>\
	<div class="them-vao-gio-hang"><button title="Thêm sản phẩm này vào giỏ hàng của bạn"  value="' + i + '&4" style="button" class="them">Add</button></div>\
      </div>';
		}
	}	
//======================================================================
function show_content() {
    var html = document.documentElement;
    html.scrollTop = '685';
}

// phân tích url theo ?{'số thứ tự danh mục'}&{'vị trí bắt đầu load sản phẩm'}
function phan_tich_url() {
    var default_create = 0;
    var code = window.location.href.split('?')[1].split('&');
    //code[0] là thứ tự danh mục
    //code[1] là vị trí bắt đầu load sản phẩm

	var sp = list_danh_muc[code[0]];
	var header = document.getElementsByClassName('khung_sp_header');
	var list_sp = document.getElementsByClassName('list_sp');
    	var chuyen_trang = document.getElementsByClassName('chuyen_trang')[0];
    var so_luong = 0,
        so_trang = 1;

    if (code[0] >= 0) {
        show_content();
    }
	header[0].className += ' hidden';
	list_sp[0].className += ' hidden';
	header[1].className += ' hidden';
	list_sp[1].className += ' hidden';
	header[2].className = 'khung_sp_header';
	var style = document.getElementsByClassName('first_txt')[2];
	style.innerHTML = "";
	style.innerHTML = ten_danh_muc_sp[code[0]];
//	document.getElementsByClassName('first_txt')[2] = 'ten_danh_muc_sp[code[0]]';
//load cac hop san pham
	for(var i = parseFloat(code[1]); i < sp.length && so_luong < 12; i++){
	so_luong++;
        list_sp[2].innerHTML += '<div class="product-box">\
                      <a class="box" href="thong_tin_sp.html?' + i + '&' + code[0] + '">\
                        <div class="hinh-sp">\
                          <img src="' + sp[i].hinh + '" class="hinh"></img>\
                        </div>\
                        <p class="ten-sp">' + sp[i].tensp + '</p>\
                        <p class="gia-tien">' + sp[i].gia + '.000.000đ</p>\
                      </a>\
                      <div class="them-vao-gio-hang"><button value="' + i + '&' + code[0] + '" style="button" class="them">Add </button></div>\
                    </div>';
    }
	so_trang = Math.ceil(sp.length/12);
	var temp = code[1];
	for(var i=1;i<=so_trang; i++){
	code[1] = (i-1) * 12;
	chuyen_trang.innerHTML += '<a href="sanpham.html?' + code[0] + '&' + code[1] + '" class="so_trang">' + i + '</a>'
	}

	//khoa
	var trang_can_block = document.getElementsByClassName('so_trang')[temp / 12];
    trang_can_block.className += ' block_trang';
}
//======================================================================
function reload() {
    location.reload();
}
//======================================================================
//Thêm vào giỏ hàng: mỗi trang có 12 sản phẩm tức 12 nút thêm. mỗi nút them đó đã có id dạng x&y;
//x là mã_sp; y là danh_mục
//dùng hàm split('&') để cắt x và y ra gắn vào đối tượng obj và đưa vào localStorage để lưu trữ;
//Chuyển đổi class để người dùng biết đc đẫ chọn sản phẩm đó!
function click_add_to_cart() {
    var them = document.getElementsByClassName('them');
    for (var i = 0; i < them.length; i++) {
        them[i].addEventListener('click', function() {
            var info = this.value.split('&');
            var obj = {
                danh_muc: info[1],
                ma_sp: info[0]
            };
            localStorage.setItem("box_" + localStorage.length, JSON.stringify(obj));
            this.className = 'them them_change';
        });
    }
}
//======================================================================
//xóa box_i trong localStorage
function clear_box() {
    var temp = localStorage.length;
    for (var i = 0; i < temp; i++) {
        console.log('temp = ' + temp);
        if (localStorage.getItem('box_' + i)) {
            localStorage.removeItem('box_' + i);
        }
        console.log('dele = ' + 'deleted_box_' + i);
        localStorage.removeItem('deleted_box_' + i);

    }
}
//======================================================================
//
//Load từ localStorage vào giỏ hàng
function load_gio_hang() {
    var clear = document.getElementsByClassName('delete_all_bt')[0];
    var lslength = localStorage.length;

    // Ẩn hiện nút "Xóa tất cả sản phẩm"

    //Xóa dữ liệu trong localSt(trừ tài khoản) và load lại trang
    clear.onclick = function() {
		if (confirm('Xác nhận xóa tất cả sản phẩm trong giỏ hàng !!!')) {
        clear_box();
        location.reload();
		}
    }

    //Bắt đầu load nếu nó không rỗng
    for (var i = 0; i < lslength; i++) {

        //Tìm và lấy giá trị dạng box_i
        var box_index = "box_" + i;
        if (localStorage.getItem(box_index)) {
            var box = JSON.parse(localStorage.getItem(box_index));
            var sp = list_danh_muc[box.danh_muc];
            var key_for_url = box.ma_sp + '&' + box.danh_muc;
            var list_sp = document.getElementsByClassName('list_sp')[0];
            var masp = parseInt(box.ma_sp);
            list_sp.innerHTML += '\
            <div class="cart-items" id="' + box_index + '">\
		    <div class="list_sp_1">\
			<div class="cart-imgs"><a href="thong_tin_sp.html?' + key_for_url + '"><img src="' + sp[masp].hinh + '" alt="cart-imgs" height="100px" width="100px"></a></div>\
			<div class="cart-names"><a href="thong_tin_sp.html?' + key_for_url + '">' + sp[masp].tensp + '</a></div>\
					<div class="cart-don-gia">\
  						<div class="cart-gia">\
							<div class="gia-tien">' + sp[masp].gia + '.000.000vnđ</div>\
						</div>\
					</div>\
					<div class="cart-soluong">\
						<form action="">\
							<input value="-" id="subtract" type="button" class="bt">\
                        	<input value="1" type="text" name="cart_item" id="numbers_of_cart_item" size="1" class="sl">\
                            <input value="+" id="add" type="button" class="bt">\
						<form>\
					</div>\
					<div class="cart-sum">' + sp[masp].gia + '.000.000vnđ</div>\
					<div class="cart-button">\
						<span title="Mua sản phẩm này" class="buy_bt"></span>\
						<span title="Xóa sản phẩm khỏi giỏ hàng" data-delete="' + box_index + '" class="delete_bt" id=""></span>\
                        <span title="Thích sản phẩm này" class="like_bt"></span>\
					</div>\
					</div>\
</div>\
</div>'
		}
	}
}
/*Có thể thêm onclick="location.reload()" trong thẻ span <xóa> để cập nhật số lượng sản phẩm trong giỏ hàng ngay sau khi click X
nhưng sẽ k còn hiệu ứng transition 0.5s < định nghĩa trong giohang.css --> .cart-items >nữa <khá là xấu>*/
//======================================================================
function click_delete_cart() {
    var delete_cart = document.getElementsByClassName('delete_bt');
    for (var i = 0; i < delete_cart.length; i++) {
        delete_cart[i].addEventListener('click', function() {
            if (confirm('Xác nhận xóa')) {
                var key = this.getAttribute('data-delete');
                var cart = document.getElementById(key);
                localStorage.removeItem(key);
                localStorage.setItem('deleted_' + (key), '');
                cart.className = 'cart-items cart-item-hide';
                document.getElementsByClassName('refresh_cart_bt')[0].style.display = 'inline';
                //setTimeout(reload, 160);
            }
        });
    }
}
//======================================================================
//thêm bớt sản phảm ở giỏ hàng
/*function tru(){
	var div = document.getElementById('change');
	var a = document.getElementById("numbers_of_cart_item").value;
	a--;
	var s = '<input value="'+a+'" type="text" name="cart_item" id="numbers_of_cart_item" size="1" class="sl">'
	div.innerHTML = s;
} 
function cong(){
	var div = document.getElementById('change');
	var a = document.getElementById("numbers_of_cart_item").value;
	a++;
	var s = '<input value="'+a+'" type="text" name="cart_item" id="numbers_of_cart_item" size="1" class="sl">'
	div.innerHTML = s;
}*/
//======================================================================
function tinh_tong_sp() {
/*	var lslength = localStorage.length;*/
	var cartlength = -1;
	var j = 0;
	do{
		var temp = document.getElementsByClassName("cart-items")[j];
		j++;
		cartlength++;
	}while(typeof temp != 'undefined');
	var s = 0;
	var a = 0;
	for(var i=0; i<cartlength; i++){
		a = document.getElementById("numbers_of_cart_item").value; 
		s = s+parseInt(a);
	}
	var c = document.getElementById("total_sp");
	c.innerHTML = s;
}
//======================================================================
function tinh_tong_tien() {	
	var s = 0;
	var gia_tien = 0;
	var c = document.getElementById("total_pay");
	var gia_tien = document.getElementsByClassName("cart-sum");
	var cartlength = -1;
	var j = 0;
	do{
		var temp = document.getElementsByClassName("cart-items")[j];
		j++;
		cartlength++;
	}while(typeof temp != 'undefined');
	if(cartlength==0)
	{	
		c.innerHTML = s +"vnđ";
	}
	else{
	for(var i=0; i<cartlength; i++){
		s += parseInt(gia_tien[i].innerHTML);		
	}
	c.innerHTML = s + ".000.000vnđ";
	}
}
//======================================================================
function url_chi_tiet_sp() {
    var key = window.location.toString().split('?')[1];  
	//vidu: file:///C:/Users/ASUS/Desktop/ver_1_7/thong_tin_sp.html?5&0 thì [1] là 5&0
    var code = key.split('&');
	// code = {5 , 0}
    var sp = list_danh_muc[code[1]];
	var matl = parseInt(code[1]); // matl == 5
    var masp = parseInt(code[0]); // masp == 0 
	var test = sp[masp].hinh;
/*	var test1 = sp[masp].hinh1;
	var test2 = sp[masp].hinh2;
	var test3 = sp[masp].hinh3; Biến kiểm tra có lấy được ảnh hay không? Xem chi tiết tại Debug*/
	var hinh = document.getElementsByClassName('hinh_ttsp')[0];	
	hinh.innerHTML = "";
	hinh.innerHTML += '\
		<img class="main_pic" src="' + sp[masp].hinh + '">\
		<img class="extra_pic" src="' + sp[masp].hinh1 + '">\
		<img class="extra_pic" src="' + sp[masp].hinh2 + '">\
		<img class="extra_pic" src="' + sp[masp].hinh3 + '">'
	
	var tensp = document.getElementsByClassName('ten_ttsp')[0];
/*	var test4 = sp[masp].tensp;*/
	tensp.innerHTML = "";
	tensp.innerHTML +=' ' + sp[masp].tensp + ' '
	var giasp = document.getElementsByClassName('gia_tien_ttsp')[0];
/*	var test5 = sp[masp].gia;*/
	giasp.innerHTML = "";
	giasp.innerHTML +=' ' + sp[masp].gia + '.000.000vnđ'
	
	var bt = document.getElementsByClassName('button_ttsp')[0];

	bt.innerHTML +='\
	<button id="add_ttsp" class="them" title="Thêm sản phẩm này vào giỏ hàng của bạn" value="' + key + '">Add to cart</button>\
	<button id="buy_ttsp" title="Mua sản phẩm này">Buy Now</button>'
	var desc = document.getElementsByClassName('describe_sp')[0];
	if(matl==5)
	{
		desc.innerHTML +='\
		<b><i>DRIVER</i></b><br>\
        <b><i>Driver</i></b> is a term not too familiar to our fans. But if you are still vague about it, then it is possible to understand that <b><i>Transformation Gear</i></b> is a device that has the power to transcend humanity gives users incredible capabilities in terms of power, speed, ability special, etc. Its user will be named <b><i>Kamen Rider</i></b> and along with his story in the series of the same name.'
	}
	else
	{
		desc.innerHTML = "";	
	}
}


