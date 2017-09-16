		function showPic(whichpic) {
			var placeholder = document.getElementById("placeholder");
			var picSource = whichpic.getAttribute("href");

			placeholder.setAttribute("src", picSource);

			var title = whichpic.getAttribute("title");
			var description = document.getElementById('description');
			// description.innerHTML = title;	
			description.firstChild.nodeValue = title;	

			// console.log(description.childNodes.nodeValue);
			// console.log(description.firstChild);
			// console.log(description.lastChild);	
		}


		function countBodyChildren() {
			var body_element = document.getElementsByTagName('body')[0];
			// alert(body_element.childNodes.length);
		}

		window.onload = countBodyChildren;