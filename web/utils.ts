/* Constants */
const VSCODE_API = acquireVsCodeApi();

const SVG_ICONS = {
	// The SVG icons below (alert, branch, check, commit, copy, download, eyeOpen, eyeClosed, gear, info, openFile, package, pencil, search, stash, tag, terminal, loading & refresh) were generated by the MIT licensed Software described in the file ./licenses/LICENSE_OCTICONS. The Software itself is not used in this project, only several icons generated by it are used (in the lines directly below this comment).
	alert: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>',
	branch: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>',
	check: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>',
	commit: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"/></svg>',
	copy: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"/></svg>',
	download: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 -0.5 16 16.5"><path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/></svg>',
	eyeOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>',
	eyeClosed: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 -1 16 16"><path fill-rule="evenodd" d="M14.822.854a.5.5 0 1 0-.707-.708l-2.11 2.11C10.89 1.483 9.565.926 8.06.926c-5.06 0-8.06 6-8.06 6s1.162 2.323 3.258 4.078l-2.064 2.065a.5.5 0 1 0 .707.707L14.822.854zM4.86 9.403L6.292 7.97A1.999 1.999 0 0 1 6 6.925c0-1.11.89-2 2-2 .384 0 .741.106 1.045.292l1.433-1.433A3.98 3.98 0 0 0 8 2.925c-2.2 0-4 1.8-4 4 0 .938.321 1.798.859 2.478zm7.005-3.514l1.993-1.992A14.873 14.873 0 0 1 16 6.925s-3 6-7.94 6a6.609 6.609 0 0 1-2.661-.57l1.565-1.566c.33.089.678.136 1.036.136 2.22 0 4-1.78 4-4 0-.358-.047-.705-.136-1.036zM9.338 8.415l.152-.151a1.996 1.996 0 0 1-.152.151z"/></svg>',
	gear: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-1 -1 18 18"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>',
	info: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"/></svg>',
	openFile: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3-4 3v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73.73-.84 1.69-1.27 2.88-1.27v-2H6z"/></svg>',
	package: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 4.27v7.47c0 .45.3.84.75.97l6.5 1.73c.16.05.34.05.5 0l6.5-1.73c.45-.13.75-.52.75-.97V4.27c0-.45-.3-.84-.75-.97l-6.5-1.74a1.4 1.4 0 0 0-.5 0L1.75 3.3c-.45.13-.75.52-.75.97zm7 9.09l-6-1.59V5l6 1.61v6.75zM2 4l2.5-.67L11 5.06l-2.5.67L2 4zm13 7.77l-6 1.59V6.61l2-.55V8.5l2-.53V5.53L15 5v6.77zm-2-7.24L6.5 2.8l2-.53L15 4l-2 .53z"/></svg>',
	pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>',
	search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-0.5 -2 18 18"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>',
	stash: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M14 9l-1.13-7.14c-.08-.48-.5-.86-1-.86H2.13c-.5 0-.92.38-1 .86L0 9v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V9zm-3.28.55l-.44.89c-.17.34-.52.56-.91.56H4.61c-.38 0-.72-.22-.89-.55l-.44-.91c-.17-.33-.52-.55-.89-.55H1l1-7h10l1 7h-1.38c-.39 0-.73.22-.91.55l.01.01z"/></svg>',
	tag: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16"><path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"/></svg>',
	terminal: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M7 10h4v1H7v-1zm-3 1l3-3-3-3-.75.75L5.5 8l-2.25 2.25L4 11zm10-8v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v10h12V3z"/></svg>',
	loading: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z"/></svg>',
	refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M 8.244,15.672 C 11.441,15.558 14.868,13.024 14.828,8.55 14.773,6.644 13.911,4.852 12.456,3.619 l -1.648,1.198 c 1.265,0.861 2.037,2.279 2.074,3.809 0.016,2.25 -1.808,5.025 -4.707,5.077 -2.898,0.052 -4.933,-2.08 -5.047,-4.671 C 3.07,6.705 4.635,4.651 6.893,4.088 l 0.041,1.866 3.853,-3.126 -3.978,-2.772 0.032,2.077 c -3.294,0.616 -5.755,3.541 -5.667,6.982 -3.88e-4,4.233 3.873,6.670 7.07,6.557 z"/></svg>',

	// The SVG icons below (openFolder, closedFolder & file) are from https://icons8.com/icon/pack/free-icons/ios11, and are used under the licence on https://icons8.com/license, which is under https://creativecommons.org/licenses/by-nd/3.0/
	openFolder: '<svg xmlns="http://www.w3.org/2000/svg" class="openFolderIcon" viewBox="0 0 30 30"><path d="M 5 4 C 3.895 4 3 4.895 3 6 L 3 9 L 3 11 L 22 11 L 27 11 L 27 8 C 27 6.895 26.105 6 25 6 L 12.199219 6 L 11.582031 4.9707031 C 11.221031 4.3687031 10.570187 4 9.8671875 4 L 5 4 z M 2.5019531 13 C 1.4929531 13 0.77040625 13.977406 1.0664062 14.941406 L 4.0351562 24.587891 C 4.2941563 25.426891 5.0692656 26 5.9472656 26 L 15 26 L 24.052734 26 C 24.930734 26 25.705844 25.426891 25.964844 24.587891 L 28.933594 14.941406 C 29.229594 13.977406 28.507047 13 27.498047 13 L 15 13 L 2.5019531 13 z"/></svg>',
	closedFolder: '<svg xmlns="http://www.w3.org/2000/svg" class="closedFolderIcon" viewBox="0 0 30 30"><path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 13 8 L 28 8 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 3 10 C 2.448 10 2 10.448 2 11 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 11 C 28 10.448 27.552 10 27 10 L 3 10 z"/></svg>',
	file: '<svg xmlns="http://www.w3.org/2000/svg" class="fileIcon" viewBox="0 0 30 30"><path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"/></svg>',

	// The SVG icons below are custom made
	arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M6,1L6,10.1L2.7,6.8L1.3,8.2L7,13.9L12.7,8.2L11.3,6.8L8,10.1L8,1L6,1z"/></svg>',
	arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M6,13L6,3.9L2.7,7.2L1.3,5.8L7,0.1L12.7,5.8L11.3,7.2L8,3.9L8,13L6,13z"/></svg>',
	cdv: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0,2V3.5H2V2ZM3.5,2V3.5H14V2ZM0,5v7H14V5Zm1,1.5h5.5v4H1Zm6.5,0H13v4H7.5Z"/></svg>',
	close: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M3.8,2.4L2.4,3.8L5.7,7L2.4,10.2L3.8,11.6L7,8.3L10.2,11.6L11.6,10.2L8.3,7L11.6,3.8L10.2,2.4L7,5.7L3.8,2.4z"/></svg>',
	failed: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path fill-rule="evenodd" d="M 6.5,0 A 6.5,6.5 0 0 0 0,6.5 6.5,6.5 0 0 0 6.5,13 6.5,6.5 0 0 0 13,6.5 6.5,6.5 0 0 0 6.5,0 Z M 4.1,2.54 6.5,4.95 8.9,2.54 10.46,4.1 8.05,6.5 10.46,8.9 8.9,10.46 6.5,8.05 4.1,10.46 2.54,8.9 4.95,6.5 2.54,4.1 Z"/></svg>',
	fileList: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M 2,3 V 4.5 H 4 V 3 Z M 5.5,3 V 4.5 H 18 V 3 Z M 2,7 V 8.5 H 4 V 7 Z M 5.5,7 V 8.5 H 18 V 7 Z M 2,11 v 1.5 H 4 V 11 Z m 3.5,0 v 1.5 H 18 V 11 Z M 2,15 v 1.5 H 4 V 15 Z m 3.5,0 v 1.5 H 18 V 15 Z"/></svg>',
	fileTree: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M 2,3 V 4.5 H 4 V 3 Z M 5.5,3 V 4.5 H 14 V 3 Z M 4,7 V 8.5 H 6 V 7 Z M 7.5,7 V 8.5 H 16 V 7 Z M 6,11 v 1.5 H 8 V 11 Z m 3.5,0 v 1.5 H 18 V 11 Z M 4,15 v 1.5 H 6 V 15 Z m 3.5,0 v 1.5 H 16 V 15 Z"/></svg>',
	inconclusive: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path fill-rule="evenodd" d="M 6.5,0 C 2.91,0 0,2.91 0,6.5 0,10.09 2.91,13 6.5,13 10.09,13 13,10.09 13,6.5 13,2.91 10.09,0 6.5,0 Z m 0.03,2.35 v 0 c 0.47,0 0.88,0.05 1.24,0.14 0.36,0.1 0.67,0.23 0.93,0.41 0.24,0.18 0.43,0.4 0.58,0.67 0.14,0.27 0.2,0.58 0.2,0.93 0,0.23 0,0.45 -0.09,0.63 C 9.3,5.31 9.14,5.49 9.05,5.62 8.91,5.79 8.9,5.82 8.7,6.02 8.53,6.2 8.35,6.36 8.15,6.5 8.03,6.6 7.94,6.7 7.85,6.79 7.77,6.88 7.7,6.97 7.65,7.08 7.6,7.18 7.56,7.29 7.53,7.4 7.5,7.52 7.5,7.54 7.5,7.67 H 5.75 c 0,-0.23 0,-0.33 0.03,-0.51 C 5.81,6.96 5.86,6.78 5.93,6.61 5.99,6.46 6.08,6.31 6.2,6.16 6.32,6.02 6.44,5.89 6.64,5.76 6.93,5.56 7.02,5.44 7.15,5.21 7.28,4.98 7.36,4.81 7.36,4.58 7.36,4.29 7.3,4.1 7.15,3.96 7.01,3.82 6.82,3.76 6.53,3.76 6.43,3.76 6.33,3.78 6.21,3.81 6.09,3.84 6.03,3.9 5.94,3.98 5.86,4.05 5.79,4.1 5.73,4.19 5.66,4.27 5.63,4.38 5.64,4.49 H 3.52 C 3.52,4.09 3.66,3.9 3.81,3.61 3.96,3.32 4.18,3.07 4.44,2.89 4.71,2.71 5.02,2.58 5.38,2.49 5.75,2.4 6.14,2.35 6.53,2.35 Z M 6.14,8.72 H 7.2 c 0.3,0 0.53,0.24 0.53,0.53 v 1.07 0 c 0,0.3 -0.23,0.53 -0.53,0.53 H 6.14 c -0.29,0 -0.53,-0.24 -0.53,-0.53 V 9.25 c 0,-0.3 0.25,-0.53 0.53,-0.53 z"/></svg>',
	linkExternal: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3,3L3,17L17,17L17,13L15.5,13L15.5,15.5L4.5,15.5L4.5,4.5L7,4.5L7,3L3,3z M10,3L10,4.5L14.4,4.5L9.3,9.7L10.3,10.7L15.5,5.6L15.5,10L17,10L17,3L10,3z"/></svg>',
	passed: '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path fill-rule="evenodd" d="M 6.5,0 A 6.5,6.5 0 0 0 0,6.5 6.5,6.5 0 0 0 6.5,13 6.5,6.5 0 0 0 13,6.5 6.5,6.5 0 0 0 6.5,0 Z M 9.64,2.95 11.2,4.5 5.02,10.68 C 3.92,9.57 2.81,8.46 1.7,7.35 L 3.26,5.8 5.02,7.57 Z"/></svg>',
	plus: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M6,2V6H2v2h4v4H8V8h4V6H8V2Z"/></svg>',
	review: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="m4,4.7 -4,7.3 4,7.3 2.5,0 -4,-7.3 4,-7.3zM11.5,6C9,5.5 6.6,7.1 6.1,9.6c-0.5,2.6 1.1,5 3.6,5.5 1,0.2 1.8,0.1 2.7,-0.3l2.5,3.3c0.1,0.1 0.3,0.2 0.5,0.3 0.2,0 0.4,0 0.6,-0.1 0.3,-0.2 0.4,-0.4 0.4,-0.6 0,-0.2 0,-0.4 -0.1,-0.6 0,-0.2 -2.4,-3.3 -2.4,-3.3 0.7,-0.6 1,-1.5 1.3,-2.4C15.7,8.9 14,6.5 11.5,6zm8.5,-1.3 -2.5,0 4,7.3 -4.2,7.3 2.5,0L24,12zm-8.8,3c1.6,0.3 2.6,1.8 2.3,3.4 -0.3,1.6 -1.8,2.6 -3.4,2.3C8.5,13 7.4,11.6 7.8,10 8,8.4 9.6,7.3 11.2,7.7z"/></svg>'
};

const GIT_FILE_CHANGE_TYPES = { 'A': 'Added', 'M': 'Modified', 'D': 'Deleted', 'R': 'Renamed', 'U': 'Untracked' };
const GIT_SIGNATURE_STATUS_DESCRIPTIONS = {
	'G': 'Valid Signature',
	'U': 'Good Signature with Unknown Validity',
	'X': 'Good Signature that has Expired',
	'Y': 'Good Signature made by an Expired Key',
	'R': 'Good Signature made by a Revoked Key',
	'E': 'Signature could not be checked',
	'B': 'Bad Signature'
};
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const REF_INVALID_REGEX = /^[-\/].*|[\\" ><~^:?*[]|\.\.|\/\/|\/\.|@{|[.\/]$|\.lock$|^@$/g;

const HTML_ESCAPES: { [key: string]: string } = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#x27;', '/': '&#x2F;' };
const HTML_UNESCAPES: { [key: string]: string } = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#x27;': '\'', '&#x2F;': '/' };
const HTML_ESCAPER_REGEX = /[&<>"'\/]/g;
const HTML_UNESCAPER_REGEX = /&lt;|&gt;|&amp;|&quot;|&#x27;|&#x2F;/g;

const ELLIPSIS = '&#8230;';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const UNCOMMITTED = '*';
const SHOW_ALL_BRANCHES = '';

const COLUMN_HIDDEN = -100;
const COLUMN_AUTO = -101;

const COLUMN_MIN_WIDTH = 40;
const COLUMN_LEFT_RIGHT_PADDING = 24;

const CLASS_ACTIVE = 'active';
const CLASS_BRANCH_LABELS_ALIGNED_TO_GRAPH = 'branchLabelsAlignedToGraph';
const CLASS_COMMIT_DETAILS_OPEN = 'commitDetailsOpen';
const CLASS_DISABLED = 'disabled';
const CLASS_ENABLED = 'enabled';
const CLASS_FETCH_SUPPORTED = 'fetchSupported';
const CLASS_FOCUSSED = 'focussed';
const CLASS_LOADING = 'loading';
const CLASS_PENDING_REVIEW = 'pendingReview';
const CLASS_REFRESHING = 'refreshing';
const CLASS_REF_HEAD = 'head';
const CLASS_REF_REMOTE = 'remote';
const CLASS_REF_STASH = 'stash';
const CLASS_REF_TAG = 'tag';
const CLASS_SELECTED = 'selected';
const CLASS_TAG_LABELS_RIGHT_ALIGNED = 'tagLabelsRightAligned';
const CLASS_TRANSITION = 'transition';

const ID_EVENT_CAPTURE_ELEM = 'eventCaptureElem';

const CSS_PROP_FONT_FAMILY = '--vscode-font-family';
const CSS_PROP_EDITOR_FONT_FAMILY = '--vscode-editor-font-family';
const CSS_PROP_FIND_MATCH_HIGHLIGHT_BACKGROUND = '--vscode-editor-findMatchHighlightBackground';
const CSS_PROP_SELECTION_BACKGROUND = '--vscode-selection-background';
const CSS_PROP_LIMIT_GRAPH_WIDTH = '--limitGraphWidth';

const ATTR_ERROR = 'data-error';


/* General Helpers */

/**
 * Are two arrays equal, such that corresponding elements at each index are equal according to the `equalElements` method.
 * @param a An array.
 * @param b An array.
 * @param equalElements A function used to determine if two elements, each at the same index of `a` & `b`, are equal.
 * @returns TRUE => The arrays are equal, FALSE => The arrays are not equal
 */
function arraysEqual<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>, equalElements: (a: T, b: T) => boolean) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (!equalElements(a[i], b[i])) return false;
	}
	return true;
}

/**
 * Are two arrays equal, such that corresponding elements at each index are strictly equal.
 * @param a An array.
 * @param b An array.
 * @returns TRUE => The arrays are equal, FALSE => The arrays are not equal
 */
function arraysStrictlyEqual<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

/**
 * Are two arrays equal, such that corresponding elements of each array are in strictly equal to an element in the other array (i.e. the order of elements doesn't matter).
 * @param a An array.
 * @param b An array.
 * @returns TRUE => The arrays are equal, FALSE => The arrays are not equal
 */
function arraysStrictlyEqualIgnoringOrder<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (b.indexOf(a[i]) === -1) return false;
	}
	return true;
}

/**
 * Modify the opacity of an RGB/RGBA/HEX colour by multiplying it by a new opacity.
 * @param colour The colour to modify.
 * @param opacity The multiplier for the opacity (between 0 & 1).
 * @returns An equivalent RGBA colour with the applied opacity.
 */
function modifyColourOpacity(colour: string, opacity: number) {
	let fadedCol = 'rgba(0,0,0,0)', match;
	if ((match = colour.match(/rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/)) !== null) {
		fadedCol = 'rgba(' + match[1] + ',' + match[2] + ',' + match[3] + ',' + (parseFloat(match[4]) * opacity).toFixed(2) + ')';
	} else if ((match = colour.match(/#\s*([0-9a-fA-F]+)/)) !== null) {
		let hex = match[1];
		let length = hex.length;
		if (length === 3 || length === 4 || length === 6 || length === 8) {
			let col = length < 5
				? { r: hex[0] + hex[0], g: hex[1] + hex[1], b: hex[2] + hex[2], a: length === 4 ? hex[3] + hex[3] : 'ff' }
				: { r: hex[0] + hex[1], g: hex[2] + hex[3], b: hex[4] + hex[5], a: length === 8 ? hex[6] + hex[7] : 'ff' };
			fadedCol = 'rgba(' + parseInt(col.r, 16) + ',' + parseInt(col.g, 16) + ',' + parseInt(col.b, 16) + ',' + (parseInt(col.a, 16) * opacity / 255).toFixed(2) + ')';
		}
	} else if ((match = colour.match(/rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/)) !== null) {
		fadedCol = 'rgba(' + match[1] + ',' + match[2] + ',' + match[3] + ',' + opacity + ')';
	}
	return fadedCol;
}

/**
 * Pad a number with a leading zero, so it contains at least two digits.
 * @param i The number to pad.
 * @returns The padded number.
 */
function pad2(i: number) {
	return i > 9 ? i : '0' + i;
}

/**
 * Get a short name for a repository.
 * @param path The path of the repository.
 * @returns The short name.
 */
function getRepoName(path: string) {
	const firstSep = path.indexOf('/');
	if (firstSep === path.length - 1 || firstSep === -1) {
		return path; // Path has no slashes, or a single trailing slash ==> use the path
	} else {
		const p = path.endsWith('/') ? path.substring(0, path.length - 1) : path; // Remove trailing slash if it exists
		return p.substring(p.lastIndexOf('/') + 1);
	}
}

/**
 * Get a sorted list of repository paths from a given GitRepoSet.
 * @param repos The set of repositories.
 * @param order The order to sort the repositories.
 * @returns An array of ordered repository paths.
 */
function getSortedRepositoryPaths(repos: GG.GitRepoSet, order: GG.RepoDropdownOrder): ReadonlyArray<string> {
	const repoPaths = Object.keys(repos);
	if (order === GG.RepoDropdownOrder.WorkspaceFullPath) {
		return repoPaths.sort((a, b) => repos[a].workspaceFolderIndex === repos[b].workspaceFolderIndex
			? a.localeCompare(b)
			: repos[a].workspaceFolderIndex === null
				? 1
				: repos[b].workspaceFolderIndex === null
					? -1
					: repos[a].workspaceFolderIndex! - repos[b].workspaceFolderIndex!
		);
	} else if (order === GG.RepoDropdownOrder.FullPath) {
		return repoPaths.sort((a, b) => a.localeCompare(b));
	} else {
		return repoPaths.map((path) => ({ name: repos[path].name || getRepoName(path), path: path }))
			.sort((a, b) => a.name !== b.name ? a.name.localeCompare(b.name) : a.path.localeCompare(b.path))
			.map((x) => x.path);
	}
}


/* HTML Escape / Unescape */

/**
 * Escape HTML in the specified string.
 * @param str The string to escape.
 * @returns The escaped string.
 */
function escapeHtml(str: string) {
	return str.replace(HTML_ESCAPER_REGEX, (match) => HTML_ESCAPES[match]);
}

/**
 * Unescape HTML in the specified string.
 * @param str The string to unescape.
 * @returns The unescaped string.
 */
function unescapeHtml(str: string) {
	return str.replace(HTML_UNESCAPER_REGEX, (match) => HTML_UNESCAPES[match]);
}


/* Formatters */

/**
 * Format an array of strings as a comma separated list.
 * @param items The array of strings.
 * @returns A formatted comma separated string (e.g. "A, B & C").
 */
function formatCommaSeparatedList(items: string[]) {
	let str = '';
	for (let i = 0; i < items.length; i++) {
		str += (i > 0 ? (i < items.length - 1 ? ', ' : ' & ') : '') + items[i];
	}
	return str;
}

/**
 * Format a date (short).
 * @param unixTimestamp The unix timestamp of the date to format.
 * @returns The formatted date.
 */
function formatShortDate(unixTimestamp: number) {
	const date = new Date(unixTimestamp * 1000), format = initialState.config.dateFormat;
	let dateStr = format.iso
		? date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate())
		: date.getDate() + ' ' + MONTHS[date.getMonth()] + ' ' + date.getFullYear();
	let hourMinsStr = pad2(date.getHours()) + ':' + pad2(date.getMinutes());
	let formatted;

	if (format.type === GG.DateFormatType.DateAndTime) {
		formatted = dateStr + ' ' + hourMinsStr;
	} else if (format.type === GG.DateFormatType.DateOnly) {
		formatted = dateStr;
	} else {
		let diff = Math.round((new Date()).getTime() / 1000) - unixTimestamp, unit;
		if (diff < 60) {
			unit = 'second';
		} else if (diff < 3600) {
			unit = 'minute';
			diff /= 60;
		} else if (diff < 86400) {
			unit = 'hour';
			diff /= 3600;
		} else if (diff < 604800) {
			unit = 'day';
			diff /= 86400;
		} else if (diff < 2629800) {
			unit = 'week';
			diff /= 604800;
		} else if (diff < 31557600) {
			unit = 'month';
			diff /= 2629800;
		} else {
			unit = 'year';
			diff /= 31557600;
		}
		diff = Math.round(diff);
		formatted = diff + ' ' + unit + (diff !== 1 ? 's' : '') + ' ago';
	}
	return {
		title: dateStr + ' ' + hourMinsStr + ':' + pad2(date.getSeconds()),
		formatted: formatted
	};
}

/**
 * Format a date (long).
 * @param unixTimestamp The unix timestamp of the date to format.
 * @returns The formatted date.
 */
function formatLongDate(unixTimestamp: number) {
	const date = new Date(unixTimestamp * 1000);
	if (initialState.config.dateFormat.iso) {
		let timezoneOffset = date.getTimezoneOffset();
		let absoluteTimezoneOffset = Math.abs(timezoneOffset);
		let timezone = timezoneOffset === 0 ? 'Z' : ' ' + (timezoneOffset < 0 ? '+' : '-') + pad2(Math.floor(absoluteTimezoneOffset / 60)) + pad2(absoluteTimezoneOffset % 60);
		return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate()) + ' ' + pad2(date.getHours()) + ':' + pad2(date.getMinutes()) + ':' + pad2(date.getSeconds()) + timezone;
	} else {
		return date.toString();
	}
}


/* DOM Helpers */

/**
 * Add an event listener to all elements with a class name.
 * @param className The class name used to identify the elements to add the event listener to.
 * @param event The event to listen for on each element.
 * @param eventListener The event listener to be called when the event occurs.
 */
function addListenerToClass(className: string, event: string, eventListener: EventListener) {
	addListenerToCollectionElems(document.getElementsByClassName(className), event, eventListener);
}

/**
 * Add an event listener to all elements in a collection of elements.
 * @param elems The collection of elements to add the event listener to.
 * @param event The event to listen for on each element.
 * @param eventListener The event listener to be called when the event occurs.
 */
function addListenerToCollectionElems(elems: HTMLCollectionOf<Element>, event: string, eventListener: EventListener) {
	for (let i = 0; i < elems.length; i++) {
		elems[i].addEventListener(event, eventListener);
	}
}

/**
 * Insert an HTML Element directly after a reference HTML Element (as a sibling).
 * @param newNode The HTML Element to insert.
 * @param referenceNode The reference HTML element that `newNode` should be inserted after.
 */
function insertAfter(newNode: HTMLElement, referenceNode: HTMLElement) {
	referenceNode.parentNode!.insertBefore(newNode, referenceNode.nextSibling);
}

/**
 * Insert an HTML Element directly before the first child element with a specified class name.
 * @param newChild The HTML Element to insert.
 * @param parent The parent element that the `newChild` should be inserted into as a child.
 * @param className The class name identifying the child that `newChild` should be inserted before.
 */
function insertBeforeFirstChildWithClass(newChild: HTMLElement, parent: HTMLElement, className: string) {
	let referenceNode: Node | null = null;
	for (let i = 0; i < parent.children.length; i++) {
		if (parent.children[i].classList.contains(className)) {
			referenceNode = parent.children[i];
			break;
		}
	}
	parent.insertBefore(newChild, referenceNode);
}

/**
 * Alter an HTML Element such that it contains, or doesn't contain the specified class name.
 * @param elem The HTML Element to alter.
 * @param className The class name.
 * @param state TRUE => Ensure the HTML Element has the class name, FALSE => Ensure the HTML Element doesn't have the class name
 * @returns TRUE => The HTML Element was altered, FALSE => No change was required.
 */
function alterClass(elem: HTMLElement, className: string, state: boolean) {
	if (elem.classList.contains(className) !== state) {
		if (state) {
			elem.classList.add(className);
		} else {
			elem.classList.remove(className);
		}
		return true;
	}
	return false;
}

/**
 * Alter each HTML Element in a collection of HTML Elements, such that it contains, or doesn't contain the specified class name.
 * @param elems The collection of HTML Elements.
 * @param className The class name.
 * @param state TRUE => Ensure all HTML Elements have the class name, FALSE => Ensure no HTML Elements have the class name
 */
function alterClassOfCollection(elems: HTMLCollectionOf<HTMLElement>, className: string, state: boolean) {
	const lockedElems = [];
	for (let i = 0; i < elems.length; i++) {
		lockedElems.push(elems[i]);
	}
	for (let i = 0; i < lockedElems.length; i++) {
		alterClass(lockedElems[i], className, state);
	}
}

/**
 * Recursively get all of the child nodes of a node that have text content.
 * @param elem The node to recursively traverse.
 * @returns An array of all child nodes that have text content.
 */
function getChildNodesWithTextContent(elem: Node) {
	let textChildren: Node[] = [];
	for (let i = 0; i < elem.childNodes.length; i++) {
		if (elem.childNodes[i].childNodes.length > 0) {
			textChildren.push(...getChildNodesWithTextContent(elem.childNodes[i]));
		} else if (elem.childNodes[i].textContent !== null && elem.childNodes[i].textContent !== '') {
			textChildren.push(elem.childNodes[i]);
		}
	}
	return textChildren;
}

/**
 * Recursively get all of the child elements of an element that have the specified class name.
 * @param elem The element to recursively traverse.
 * @param className The class name to find.
 * @returns An array of all child elements that have the specified class name.
 */
function getChildrenWithClassName(elem: Element, className: string) {
	let children: Element[] = [];
	for (let i = 0; i < elem.children.length; i++) {
		if (elem.children[i].children.length > 0) {
			children.push(...getChildrenWithClassName(elem.children[i], className));
		} else if (elem.children[i].className === className) {
			children.push(elem.children[i]);
		}
	}
	return children;
}

/**
 * Get the first child of an HTML Element that is a \<ul\>.
 * @param elem The parent HTML Element.
 * @returns The HTML Element, or NULL if no child is a \<ul\>.
 */
function getChildUl(elem: HTMLElement) {
	for (let i = 0; i < elem.children.length; i++) {
		if (elem.children[i].tagName === 'UL') {
			return <HTMLUListElement>elem.children[i];
		}
	}
	return null;
}

/**
 * Initialise scrollTop, and observe scroll events for an HTML Element. Invoke callbacks when the element has been scrolled, and when scrollTop should be saved.
 * @param id The ID identifying the HTML Element.
 * @param initialScrollTop The value used to initialise scrollTop.
 * @param onScroll A callback to be invoked when the element has been scrolled.
 * @param onScrolled A callback to be invoked when scrollTop should be saved.
 */
function observeElemScroll(id: string, initialScrollTop: number, onScroll: (scrollTop: number) => void, onScrolled: () => void) {
	const elem = document.getElementById(id);
	if (elem === null) return;

	let timeout: number | null = null;
	elem.scroll(0, initialScrollTop);
	elem.addEventListener('scroll', () => {
		const elem = document.getElementById(id);
		if (elem === null) return;

		onScroll(elem.scrollTop);

		if (timeout !== null) window.clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			onScrolled();
			timeout = null;
		}, 250);
	});
}

/**
 * Get all of the rendered commit HTML Elements.
 * @returns A collection of all commit HTML Elements.
 */
function getCommitElems() {
	return <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName('commit');
}

/**
 * Register that an event has been handled, to prevent the default behaviour from occurring, and any further handling of the event.
 * @param event The event.
 */
function handledEvent(event: Event) {
	event.preventDefault();
	event.stopPropagation();
}


/* State Helpers */

/**
 * Update a key-value pair in the Global View State.
 * @param key The key identifying the value to update.
 * @param value The new value.
 */
function updateGlobalViewState<K extends keyof GG.GitGraphViewGlobalState>(key: K, value: GG.GitGraphViewGlobalState[K]) {
	(<GG.DeepWriteable<GG.GitGraphViewGlobalState>>globalState)[key] = value;
	sendMessage({ command: 'setGlobalViewState', state: globalState });
}

/**
 * Update a key-value pair in the Workspace View State.
 * @param key The key identifying the value to update.
 * @param value The new value.
 */
function updateWorkspaceViewState<K extends keyof GG.GitGraphViewWorkspaceState>(key: K, value: GG.GitGraphViewWorkspaceState[K]) {
	(<GG.DeepWriteable<GG.GitGraphViewWorkspaceState>>workspaceState)[key] = value;
	sendMessage({ command: 'setWorkspaceViewState', state: workspaceState });
}


/* VSCode Helpers */

/**
 * Send a message to the extension's back-end (typically to request data, or perform an action).
 * @param msg The message to send.
 */
function sendMessage(msg: GG.RequestMessage) {
	VSCODE_API.postMessage(msg);
}

/**
 * Show a Visual Studio Code Error Message.
 * @param message The message to display.
 */
function showErrorMessage(message: string) {
	sendMessage({ command: 'showErrorMessage', message: message });
}

/**
 * Get the value of a Visual Studio Code style variable.
 * @param name The name of the style variable.
 * @returns The value of the style variable.
 */
function getVSCodeStyle(name: string) {
	return document.documentElement.style.getPropertyValue(name);
}


/**
 * Resizes images for the view (e.g. commit author avatars).
 */
class ImageResizer {
	private canvas: HTMLCanvasElement | null = null;
	private context: CanvasRenderingContext2D | null = null;

	/**
	 * Resize an image to have an effective resolution of 18px x 18px. The actual resolution varies depending of the user's screen pixel ratio.
	 * @param dataUri The data URI containing the image data.
	 * @param callback A callback to be invoked once the image has been resized, with the resized image.
	 */
	public resize(dataUri: string, callback: (dataUri: string) => void) {
		if (this.canvas === null) this.canvas = document.createElement('canvas');
		if (this.context === null) this.context = this.canvas.getContext('2d');
		if (this.context === null) {
			callback(dataUri);
			return;
		}

		let image = new Image();
		image.onload = () => {
			let outputDataUri = '';
			if (this.canvas === null || this.context === null) {
				outputDataUri = dataUri;
			} else {
				let size = Math.ceil(18 * window.devicePixelRatio);
				if (this.canvas.width !== size) this.canvas.width = size;
				if (this.canvas.height !== size) this.canvas.height = size;
				this.context.clearRect(0, 0, size, size);
				this.context.drawImage(image, 0, 0, size, size);
				outputDataUri = this.canvas.toDataURL();
			}
			callback(outputDataUri);
		};
		image.src = dataUri;
	}
}


/**
 * Implements an Event Overlay, which is used for blocking and/or capturing mouse events in the view.
 */
class EventOverlay {
	private move: EventListener | null = null;
	private stop: EventListener | null = null;

	/**
	 * Create an event overlay.
	 * @param className The class name to be used for the event overlay.
	 * @param move A callback to be invoked if the user moves the mouse over the event overlay.
	 * @param stop A callback to be invoked if the user moves the mouse off the event overlay.
	 */
	public create(className: string, move: EventListener | null, stop: EventListener | null) {
		if (document.getElementById(ID_EVENT_CAPTURE_ELEM) !== null) this.remove();

		const eventOverlayElem = document.createElement('div');
		eventOverlayElem.id = ID_EVENT_CAPTURE_ELEM;
		eventOverlayElem.className = className;

		this.move = move;
		this.stop = stop;
		if (this.move !== null) {
			eventOverlayElem.addEventListener('mousemove', this.move);
		}
		if (this.stop !== null) {
			eventOverlayElem.addEventListener('mouseup', this.stop);
			eventOverlayElem.addEventListener('mouseleave', this.stop);
		}

		if (contextMenu.isOpen()) {
			contextMenu.close();
		}

		document.body.appendChild(eventOverlayElem);
	}

	/**
	 * Remove the event overlay that is currently active in the view.
	 */
	public remove() {
		let eventOverlayElem = document.getElementById(ID_EVENT_CAPTURE_ELEM);
		if (eventOverlayElem === null) return;

		if (this.move !== null) {
			eventOverlayElem.removeEventListener('mousemove', this.move);
			this.move = null;
		}
		if (this.stop !== null) {
			eventOverlayElem.removeEventListener('mouseup', this.stop);
			eventOverlayElem.removeEventListener('mouseleave', this.stop);
			this.stop = null;
		}

		document.body.removeChild(eventOverlayElem);
	}
}
