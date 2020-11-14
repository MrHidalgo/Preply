

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
		btn.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			document.querySelector('#overlay').classList.toggle('is-show');

			hideScrollContainer.forEach((val, idx) => {
				val.classList.toggle("is-hideScroll");
			});

		});

		document.querySelector('.menu__close').addEventListener('click', () => {
			btn.classList.remove("is-active");
			mobileContainer.classList.remove("is-open");

			document.querySelector('#overlay').classList.remove('is-show');

			hideScrollContainer.forEach((val, idx) => {
				val.classList.remove("is-hideScroll");
			});
		});
	}

};
