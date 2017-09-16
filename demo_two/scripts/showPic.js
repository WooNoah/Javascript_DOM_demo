		function showPic(whichpic) {
			var picSource = whichpic.getAttribute("href");
			var placeholder = document.getElementById("placeholder");


			placeholder.setAttribute("src", picSource);

			var title = whichpic.getAttribute("title");
			var description = document.getElementById('description');
			// description.innerHTML = title;
			description.firstChild.nodeValue = title;

			// console.log(description.childNodes.nodeValue);
			// console.log(description.firstChild);
			// console.log(description.lastChild);
		}


		/**
		 * 	test
		 */
		function countBodyChildren() {
			var body_element = document.getElementsByTagName('body')[0];
			alert(body_element.childNodes.length);
		}


		function prepareGallery() {
			if (!document.getElementById) return false;
			if (!document.getElementsByTagName) return false;
			if (!document.getElementById("imagegallery")) return false;

			var gallery = document.getElementById('imagegallery');
			var links = gallery.getElementsByTagName("a");
			for (var i = 0; i < links.length; i++) {
				links[i].onclick = function() {
					showPic(this);
					return false;
				}
			}
		}


		function addLoadEvent(func) {
			var oldonload = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = func;
			}else {
				window.onload = function() {
					oldonload();
					func();
				}
			}
		}


		addLoadEvent(prepareGallery);
		// window.onload = countBodyChildren;
