/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const collapseToggle = () => {
		$('[collapse-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[collapse-parent-js]'),
				elBody = elParent.find('[collapse-body-js]');

			if(el.hasClass('is-active')) {
				el.removeClass('is-active');
				elBody.slideUp(300);
			} else {
				$('[collapse-toggle-js]').removeClass('is-active');
				$('[collapse-body-js]').slideUp(300);

				el.addClass('is-active');
				elBody.slideDown(300);
			}
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		collapseToggle();
		// ==========================================
	};
	initNative();
})();
