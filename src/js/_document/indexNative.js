/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const dropdownToggle = () => {
		$('body').on('click', function (e) {
			const className = "[dropdown-parent-js]";

			if (!$(e.target).closest(className).length) {
				$('[dropdown-js]').removeClass('is-open');
			}
		});

		$('[dropdown-lang-js]').on('change', (ev) => {
			const el = $(ev.currentTarget),
				selectedVal = el.find('option:selected').text();

			$('[dropdown-toggle-js]').find('span i').text(selectedVal);
		});

		$('[dropdown-currency-js]').on('change', (ev) => {
			const el = $(ev.currentTarget),
				selectedVal = el.find('option:selected').text();

			$('[dropdown-toggle-js]').find('span u').text(selectedVal);
		});

		$('[dropdown-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[dropdown-parent-js]'),
				elBody = elParent.find('[dropdown-js]');

			elBody.toggleClass('is-open');
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
		initPopups();
		// ==========================================

		// callback
		dropdownToggle();
		// ==========================================
	};
	initNative();
})();
