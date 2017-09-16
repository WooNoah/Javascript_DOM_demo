		function showPic(whichpic) {
			if (!document.getElementById) return false;
			if (!document.getElementById("placeholder")) return false;
			if (!document.getElementById("description")) return false;


			var source = whichpic.getAttribute("href");
			var placeholder = document.getElementById("placeholder");
			placeholder.setAttribute("src", source);

			if (whichpic.getAttribute("title")) {
				var text = whichpic.getAttribute("title");
			}else {
				var text = "";
			}

			var description = document.getElementById('description');
			// description.innerHTML = title;
			if (description.firstChild.nodeType == 3) {
				description.firstChild.nodeValue = text;
			}
			return false;
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

		/**
		 *	动态创建预览图片和文字
		 *	html中注释掉的<img>和<p>
		 */
		function preparePlaceholder() {
			var placeholder = document.createElement('img');
			placeholder.setAttribute("id","placeholder");
			placeholder.setAttribute("src", "#");
			placeholder.setAttribute("alt", "My image Gallery");
			var description = document.createElement('p');
			description.setAttribute("id", "description");

			var desctext = document.createTextNode("Choose an image");
			description.appendChild(desctext);

			//添加到body中<append方法默认会添加到最后边>
			document.getElementsByTagName("body")[0].appendChild(placeholder);
			document.getElementsByTagName("body")[0].appendChild(description);


			//也可以添加到前边 insertBefore
			var ulElement = document.getElementById("imagegallery");
			ulElement.parentNode.insertBefore(placeholder, ulElement);
			ulElement.parentNode.insertBefore(description, ulElement);
		}

		//有insertBefore方法，理论上就应该有insertAfter,但是，DOM中没有提供此方法，jQuery中有的。
		//这里自己实现一个insertAfter函数
		function insertAfter(newElement, targetElement) {
			var parent = targetElement.parentNode;
			if (parent.lastChild == targetElement) {
				 parent.append(newElement);
			}else {
				 parent.insertBefore(newElement, targetElement.nextSubling);
			}
		}

		/**
		 *	使用上面的insertAfter来动态创建预览图片和文字
		 */
		function useInsertAfterToPreparePlaceholder() {
			//前边创建DOM一样
			var placeholder = document.createElement('img');
			placeholder.setAttribute("id","placeholder");
			placeholder.setAttribute("src", "#");
			placeholder.setAttribute("alt", "My image Gallery");
			var description = document.createElement('p');
			description.setAttribute("id", "description");
			var desctext = document.createTextNode("Choose an image");
			description.appendChild(desctext);


			var ul = document.getElementById("imagegallery");
			insertAfter(placeholder, ul);
			insertAfter(description, placeholder);
		}


		function prepareGallery() {
			if (!document.getElementById) return false;
			if (!document.getElementsByTagName) return false;
			if (!document.getElementById("imagegallery")) return false;

			var gallery = document.getElementById('imagegallery');
			var links = gallery.getElementsByTagName("a");
			for (var i = 0; i < links.length; i++) {
				links[i].onclick = function() {
					return showPic(this);
				}
				links[i].onkeypress = links[i].inclick;
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

		//使用上面的insertAfter来动态创建预览图片和文字
		// addLoadEvent(useInsertAfterToPreparePlaceholder);

		//展示图片和描述在上
		addLoadEvent(preparePlaceholder);
		//初始化a标签点击事件
		addLoadEvent(prepareGallery);


		// window.onload = countBodyChildren;
