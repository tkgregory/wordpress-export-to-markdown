function getFilenameFromUrl(url) {

	if (url.includes('lucid.app')) {
	 	return url.replace(/https:\/\/lucid.app\/publicSegments\/view\/(.*)?\/([^/"]+\.(?:gif|jpe?g|png))/gi, '$1-$2')
	}

	return decodeURIComponent(url.split('/').slice(-1)[0]);
}

exports.getFilenameFromUrl = getFilenameFromUrl;
