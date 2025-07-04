				function getQ(feature) {
					var Q1 = feature.properties['Name'].toLocaleString(), Q1 = (Q1 !== null ? Q1 : '')
					var Q2 = feature.properties['PhotoPath'].toLocaleString(), Q2 = (Q2 !== null ? Q2 : ''), Q2 = '<img src=' + Q2 + '>'
					var Q3 = feature.properties['SOSLink'].toLocaleString(), Q3 = (Q3 !== null ? Q3 : ''), Q3 = '<a href="' + Q3 + '" target="_blank">SOSLink</a>'
					var popupContent = '<table>\
						<tr><td colspan="2">' + Q1 + '</td></tr>\
						<tr><td colspan="2">' + Q2 + '</td></tr>\
						<tr><td colspan="2">' + Q3 + '</td></tr>\
						</table>';
					var content = removeEmptyRowsFromPopupContent(popupContent, feature);
					layer.on('popupopen', function(e) {addClassToPopupIfMedia(content, e.popup);});
					layer.bindPopup(content, { maxHeight: 400 });
				}