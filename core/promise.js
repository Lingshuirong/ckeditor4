/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global Promise, ES6Promise */

( function() {
	'use strict';

	if ( window.Promise ) {
		CKEDITOR.tools.promise = Promise;
	} else {
		var polyfillURL = CKEDITOR.getUrl( 'vendor/promise.js' );

		CKEDITOR.scriptLoader.load( polyfillURL, function( success ) {
			if ( success ) {
				CKEDITOR.tools.promise = ES6Promise;
			} else {
				CKEDITOR.error( 'no-vendor-lib', {
					path: polyfillURL
				} );
			}
		} );
	}

	/**
	 * Alias for [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
	 * object representing asynchronous operation.
	 *
	 * Uses native Promise browser implementation if available. For older browsers with lack of Promise support
	 * [ES6-Promise](https://github.com/stefanpenner/es6-promise) polyfill will be used.
	 * Visit [Promise Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)
	 * to learn more.
	 *
	 * See [MDN Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) guide for
	 * more details how to work with promises.
	 *
	 * @since 4.12.0
	 * @class CKEDITOR.tools.promise
	 */

	/**
	 * Creates a new instance of Promise.
	 *
	 * ```js
	 *	new CKEDITOR.tools.promise( function( resolve, reject ) {
	 *		setTimeout( function() {
	 *			var timestamp;
	 *			try {
	 *				timestamp = ( new Date() ).getTime();
	 *			} catch ( e ) {
	 *				reject( e );
	 *			}
	 *			resolve( timestamp );
	 *		}, 5000 );
	 *	} );
	 * ```
	 *
	 * @param {Function} resolver
	 * @param {Function} resolver.resolve
	 * @param {Function} resolver.reject
	 * @constructor
	 */

} )();
