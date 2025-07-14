			function addClassToPopupIfMedia(content, popup) {
				var tempDiv = document.createElement('div');
				tempDiv.innerHTML = content;
				if (tempDiv.querySelector('td img')) {
					popup._contentNode.classList.add('media');
						// Delay to force the redraw
						setTimeout(function() {
							popup.update();
						}, 10);
				} else {
					popup._contentNode.classList.remove('media');
				}
			}