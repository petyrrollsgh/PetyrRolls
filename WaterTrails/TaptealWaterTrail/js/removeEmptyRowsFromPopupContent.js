			function removeEmptyRowsFromPopupContent(content, feature) {
			 var tempDiv = document.createElement('div');
			 tempDiv.innerHTML = content;
			 var rows = tempDiv.querySelectorAll('tr');
			 for (var i = 0; i < rows.length; i++) {
				 var td = rows[i].querySelector('td.visible-with-data');
				 var key = td ? td.id : '';
				 if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
					 rows[i].parentNode.removeChild(rows[i]);
				 }
			 }
			 return tempDiv.innerHTML;
			}