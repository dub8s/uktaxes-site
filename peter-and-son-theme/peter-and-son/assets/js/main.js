/* Peter and Son: dismiss the enquiry toast and tidy the URL afterwards. */
(function () {
	var toast = document.querySelector('[data-ps-toast]');
	if (!toast) return;
	function hide() { toast.classList.add('is-hidden'); }
	toast.querySelector('[data-ps-toast-close]').addEventListener('click', hide);
	setTimeout(hide, 6000);
	if (window.history && history.replaceState) {
		var url = new URL(window.location.href);
		url.searchParams.delete('enquiry');
		history.replaceState(null, '', url.pathname + url.search + url.hash);
	}
})();
