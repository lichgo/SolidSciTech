(function(doc, data) {

var len = data.length,
	cache = {},
	nav = doc.querySelector('#navigator'),
	content = doc.querySelector('#content'),
	entries = {}
;

init();

function init() {
	var i = 0,
		li,
		navContent = ''
	;

	for (; i < len; ++i) {
		li = doc.createElement('li');
		li.id = data[i].id;
		li.innerHTML = '<a href="#' + data[i].subject + '">' + data[i].subject + '</a>';
		nav.appendChild(li);
		li.addEventListener('click', function(e) {
			console.log(this.id);
			content.innerHTML = getContent(this.id);
		}, true);

		entries[data[i].id] = data[i];
	}

}

function getContent(id) {
	var c = cache[id],
		html = '',
		entry,
		i
	;

	if (c) return c;

	entry = entries[id];
	html += '<h1>' + entry.subject + '</h1>';
	for (i = 0; i < entry.cat.length; ++i) {
		html += '<h2><span class="cn">' + entry.cat[i].cn + '</span><span class="en">' + entry.cat[i].en + '</span></h2>';
	}
	cache[id] = html;
	return html;
}

})(document, data);