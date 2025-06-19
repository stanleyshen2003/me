const notion_styles = {
  html: {
    WebkitPrintColorAdjust: 'exact',
  },
  '*': {
    boxSizing: 'border-box',
    WebkitPrintColorAdjust: 'exact',
  },
  'html, body': { // This would typically be applied to a global style or a top-level component
    margin: 0,
    padding: 0,
  },
  '@media only screen': { // Media queries are handled differently, often with libraries like styled-components or emotion
    body: {
      margin: '2em auto',
      maxWidth: '900px',
      color: 'rgb(55, 53, 47)',
    },
  },
  body: {
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
  },
  'a, a.visited': {
    color: 'inherit',
    textDecoration: 'underline',
  },
  '.pdf-relative-link-path': {
    fontSize: '80%',
    color: '#444',
  },
  '.table_of_contents': {

  },
  '.table_of_contents-indent-1': {
    marginLeft: '1.5rem',
  },
  '.table_of_contents-indent-2': {
    marginLeft: '3rem',
  },
  '.table_of_contents-indent-3': {
    marginLeft: '4.5rem',
  },
  '.table_of_contents-item': {
    display: 'block',
    fontSize: '0.875rem',
    lineHeight: 1.3,
    padding: '0.125rem',
    fontWeight: 'bolder',
  },
  'h1, h2, h3': {
    letterSpacing: '-0.01em',
    lineHeight: 1.2,
    fontWeight: 600,
    marginBottom: 0,
    color: '#27272a',
  },
  '.page-title': {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginTop: 0,
    marginBottom: '0.75em',
  },
  h1: {
    fontSize: '2.15rem',
    marginTop: '2.15rem',
  },
  h2: {
    fontSize: '1.875rem',
    marginTop: '1.875rem',
  },
  h3: {
    fontSize: '1.5rem',
    marginTop: '1.5rem',
  },
  '.source': {
    border: '1px solid #ddd',
    borderRadius: '3px',
    padding: '1.5em',
    wordBreak: 'break-all',
  },
  '.callout': {
    borderRadius: '3px',
    padding: '1rem',
  },
  figure: {
    margin: '1.25em 0',
    pageBreakInside: 'avoid',
  },
  figcaption: {
    opacity: 0.5,
    fontSize: '85%',
    marginTop: '0.5em',
  },
  mark: {
    backgroundColor: 'transparent',
  },
  '.indented': {
    paddingLeft: '1.5em',
  },
  hr: {
    background: 'transparent',
    display: 'block',
    width: '100%',
    height: '1px',
    visibility: 'visible',
    border: 'none',
    borderBottom: '1px solid rgba(55, 53, 47, 0.09)',
  },
  img: {
    maxWidth: '100%',
  },
  '@media only print': {
    img: {
      maxHeight: '100vh',
      objectFit: 'contain',
    },
  },
  '@page': { // @page rules are generally not directly supported in React inline styles or typical CSS-in-JS.
    margin: '1in',
  },
  '.collection-content': {
    fontSize: '0.875rem',
  },
  '.column-list': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.column': {
    padding: '0 1em',
  },
  '.column:first-child': {
    paddingLeft: 0,
  },
  '.column:last-child': {
    paddingRight: 0,
  },
  'table, th, td': { // This will apply to all three elements. In React, you'd typically define these separately or use a global style.
    border: '1px solid rgba(55, 53, 47, 0.09)',
    borderCollapse: 'collapse',
  },
  table: {
    borderLeft: 'none',
    borderRight: 'none',
  },
  'th, td': {
    fontWeight: 'normal',
    padding: '0.25em 0.5em',
    lineHeight: 1.5,
    minHeight: '1.5em',
    textAlign: 'left',
  },
  th: {
    color: 'rgba(55, 53, 47, 0.6)',
  },
  'ol, ul': {
    margin: 0,
    marginBlockStart: '0.6em',
    marginBlockEnd: '0.6em',
  },
  'li > ol:first-child, li > ul:first-child': {
    marginBlockStart: '0.6em',
  },
  'ul > li': {
    paddingLeft: "0.1em",
    listStyle: "disc",
  },
  'ul.to-do-list': {
    paddingInlineStart: 0,
  },
  'ul.to-do-list > li': {
    listStyle: 'none',
  },
  '.to-do-children-checked': {
    textDecoration: 'line-through',
    opacity: 0.375,
  },
  'ul.toggle > li': {
    listStyle: 'none',
  },
  ul: {
    paddingInlineStart: '1.7em',
  },
  ol: {
    paddingInlineStart: '1.6em',
  },
  'ol > li': {
    paddingLeft: '0.2em',
  },
  '.mono ol': {
    paddingInlineStart: '2em',
  },
  '.mono ol > li': {
    textIndent: '-0.4em',
  },
  '.toggle': {
    paddingInlineStart: '0em',
    listStyleType: 'none',
  },
  '.toggle > li > details': {
    paddingLeft: '1.7em',
  },
  '.toggle > li > details > summary': {
    marginLeft: '-1.1em',
  },
  '.selected-value': {
    display: 'inline-block',
    padding: '0 0.5em',
    background: 'rgba(206, 205, 202, 0.5)',
    borderRadius: '3px',
    marginRight: '0.5em',
    marginTop: '0.3em',
    marginBottom: '0.3em',
    whiteSpace: 'nowrap',
  },
  '.collection-title': {
    display: 'inline-block',
    marginRight: '1em',
  },
  '.page-description': {
    marginBottom: '2em',
  },
  '.simple-table': {
    marginTop: '1em',
    fontSize: '0.875rem',
    emptyCells: 'show',
  },
  '.simple-table td': {
    height: '29px',
    minWidth: '120px',
  },
  '.simple-table th': {
    height: '29px',
    minWidth: '120px',
  },
  '.simple-table-header-color': {
    background: 'rgb(247, 246, 243)',
    color: 'black',
  },
  '.simple-table-header': {
    fontWeight: 500,
  },
  time: {
    opacity: 0.5,
  },
  '.icon': {
    display: 'inline-block',
    maxWidth: '1.2em',
    maxHeight: '1.2em',
    textDecoration: 'none',
    verticalAlign: 'text-bottom',
    marginRight: '0.5em',
  },
  'img.icon': {
    borderRadius: '3px',
  },
  '.user-icon': {
    width: '1.5em',
    height: '1.5em',
    borderRadius: '100%',
    marginRight: '0.5rem',
  },
  '.user-icon-inner': {
    fontSize: '0.8em',
  },
  '.text-icon': {
    border: '1px solid #000',
    textAlign: 'center',
  },
  '.page-cover-image': {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '30vh',
  },
  '.page-header-icon': {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  '.page-header-icon-with-cover': {
    marginTop: '-0.72em',
    marginLeft: '0.07em',
  },
  '.page-header-icon img': {
    borderRadius: '3px',
  },
  '.link-to-page': {
    margin: '1em 0',
    padding: 0,
    border: 'none',
    fontWeight: 500,
  },
  'p > .user': {
    opacity: 0.5,
  },
  'td > .user, td > time': {
    whiteSpace: 'nowrap',
  },
  'input[type="checkbox"]': {
    transform: 'scale(1.5)',
    marginRight: '0.6em',
    verticalAlign: 'middle',
  },
  p: {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },
  '.image': {
    border: 'none',
    margin: '1.5em 0',
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
  },
  'code, code': { // This will combine, 'code' will override if both exist for specific properties.
    background: 'rgba(135, 131, 120, 0.15)',
    borderRadius: '3px',
    padding: '0.2em 0.4em',
    fontSize: '85%',
    tabSize: 2,
  },
  code: {
    color: '#eb5757',
  },
  '.code': {
    padding: '1.5em 1em',
    fontFamily: '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
  },
  '.code-wrap': {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
  },
  '.code > code': {
    background: 'none',
    padding: 0,
    fontSize: '100%',
    color: 'inherit',
  },
  blockquote: {
    fontSize: '1.25em',
    margin: '1em 0',
    paddingLeft: '1em',
    borderLeft: '3px solid rgb(55, 53, 47)',
  },
  '.bookmark': {
    textDecoration: 'none',
    maxHeight: '8em',
    padding: 0,
    display: 'flex',
    width: '100%',
    alignItems: 'stretch',
  },
  '.bookmark-title': {
    fontSize: '0.85em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '1.75em',
    whiteSpace: 'nowrap',
  },
  '.bookmark-text': {
    display: 'flex',
    flexDirection: 'column',
  },
  '.bookmark-info': {
    flex: '4 1 180px',
    padding: '12px 14px 14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  '.bookmark-image': {
    width: '33%',
    flex: '1 1 180px',
    display: 'block',
    position: 'relative',
    objectFit: 'cover',
    borderRadius: '1px',
  },
  '.bookmark-description': {
    color: 'rgba(55, 53, 47, 0.6)',
    fontSize: '0.75em',
    overflow: 'hidden',
    maxHeight: '4.5em',
    wordBreak: 'break-word',
  },
  '.bookmark-href': {
    fontSize: '0.75em',
    marginTop: '0.25em',
  },
  '.sans': { fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"' },
  '.serif': { fontFamily: 'Lyon-Text, Georgia, ui-serif, serif' },
  '.mono': { fontFamily: 'iawriter-mono, Nitti, Menlo, Courier, monospace' },
  '.pdf .sans': { fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji", "Noto Sans CJK JP"' },
  '.pdf:lang(zh-CN) .sans': { fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji", "Noto Sans CJK SC"' },
  '.pdf:lang(zh-TW) .sans': { fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji", "Noto Sans CJK TC"' },
  '.pdf:lang(ko-KR) .sans': { fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji", "Noto Sans CJK KR"' },
  '.pdf .code': { fontFamily: 'Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK JP"' },
  '.pdf:lang(zh-CN) .code': { fontFamily: 'Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK SC"' },
  '.pdf:lang(zh-TW) .code': { fontFamily: 'Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK TC"' },
  '.pdf:lang(ko-KR) .code': { fontFamily: 'Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK KR"' },
  '.pdf .serif': { fontFamily: 'PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji", "Noto Color Emoji", "Noto Serif CJK JP"' },
  '.pdf:lang(zh-CN) .serif': { fontFamily: 'PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji", "Noto Color Emoji", "Noto Serif CJK SC"' },
  '.pdf:lang(zh-TW) .serif': { fontFamily: 'PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji", "Noto Color Emoji", "Noto Serif CJK TC"' },
  '.pdf:lang(ko-KR) .serif': { fontFamily: 'PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji", "Noto Color Emoji", "Noto Serif CJK KR"' },
  '.pdf .mono': { fontFamily: 'PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK JP"' },
  '.pdf:lang(zh-CN) .mono': { fontFamily: 'PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK SC"' },
  '.pdf:lang(zh-TW) .mono': { fontFamily: 'PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK TC"' },
  '.pdf:lang(ko-KR) .mono': { fontFamily: 'PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK KR"' },
  '.highlight-default': {
    color: 'rgba(50, 48, 44, 1)',
  },
  '.highlight-gray': {
    color: 'rgba(115, 114, 110, 1)',
    fill: 'rgba(115, 114, 110, 1)',
  },
  '.highlight-brown': {
    color: 'rgba(159, 107, 83, 1)',
    fill: 'rgba(159, 107, 83, 1)',
  },
  '.highlight-orange': {
    color: 'rgba(217, 115, 13, 1)',
    fill: 'rgba(217, 115, 13, 1)',
  },
  '.highlight-yellow': {
    color: 'rgba(203, 145, 47, 1)',
    fill: 'rgba(203, 145, 47, 1)',
  },
  '.highlight-teal': {
    color: 'rgba(68, 131, 97, 1)',
    fill: 'rgba(68, 131, 97, 1)',
  },
  '.highlight-blue': {
    color: 'rgba(51, 126, 169, 1)',
    fill: 'rgba(51, 126, 169, 1)',
  },
  '.highlight-purple': {
    color: 'rgba(144, 101, 176, 1)',
    fill: 'rgba(144, 101, 176, 1)',
  },
  '.highlight-pink': {
    color: 'rgba(193, 76, 138, 1)',
    fill: 'rgba(193, 76, 138, 1)',
  },
  '.highlight-red': {
    color: 'rgba(205, 60, 58, 1)',
    fill: 'rgba(205, 60, 58, 1)',
  },
  '.highlight-default_background': {
    color: 'rgba(50, 48, 44, 1)',
  },
  '.highlight-gray_background': {
    background: 'rgba(248, 248, 247, 1)',
  },
  '.highlight-brown_background': {
    background: 'rgba(244, 238, 238, 1)',
  },
  '.highlight-orange_background': {
    background: 'rgba(251, 236, 221, 1)',
  },
  '.highlight-yellow_background': {
    background: 'rgba(251, 243, 219, 1)',
  },
  '.highlight-teal_background': {
    background: 'rgba(237, 243, 236, 1)',
  },
  '.highlight-blue_background': {
    background: 'rgba(231, 243, 248, 1)',
  },
  '.highlight-purple_background': {
    background: 'rgba(248, 243, 252, 1)',
  },
  '.highlight-pink_background': {
    background: 'rgba(252, 241, 246, 1)',
  },
  '.highlight-red_background': {
    background: 'rgba(253, 235, 236, 1)',
  },
  '.block-color-default': {
    color: 'inherit',
    fill: 'inherit',
  },
  '.block-color-gray': {
    color: 'rgba(115, 114, 110, 1)',
    fill: 'rgba(115, 114, 110, 1)',
  },
  '.block-color-brown': {
    color: 'rgba(159, 107, 83, 1)',
    fill: 'rgba(159, 107, 83, 1)',
  },
  '.block-color-orange': {
    color: 'rgba(217, 115, 13, 1)',
    fill: 'rgba(217, 115, 13, 1)',
  },
  '.block-color-yellow': {
    color: 'rgba(203, 145, 47, 1)',
    fill: 'rgba(203, 145, 47, 1)',
  },
  '.block-color-teal': {
    color: 'rgba(68, 131, 97, 1)',
    fill: 'rgba(68, 131, 97, 1)',
  },
  '.block-color-blue': {
    color: 'rgba(51, 126, 169, 1)',
    fill: 'rgba(51, 126, 169, 1)',
  },
  '.block-color-purple': {
    color: 'rgba(144, 101, 176, 1)',
    fill: 'rgba(144, 101, 176, 1)',
  },
  '.block-color-pink': {
    color: 'rgba(193, 76, 138, 1)',
    fill: 'rgba(193, 76, 138, 1)',
  },
  '.block-color-red': {
    color: 'rgba(205, 60, 58, 1)',
    fill: 'rgba(205, 60, 58, 1)',
  },
  '.block-color-default_background': {
    color: 'inherit',
    fill: 'inherit',
  },
  '.block-color-gray_background': {
    background: 'rgba(248, 248, 247, 1)',
  },
  '.block-color-brown_background': {
    background: 'rgba(244, 238, 238, 1)',
  },
  '.block-color-orange_background': {
    background: 'rgba(251, 236, 221, 1)',
  },
  '.block-color-yellow_background': {
    background: 'rgba(251, 243, 219, 1)',
  },
  '.block-color-teal_background': {
    background: 'rgba(237, 243, 236, 1)',
  },
  '.block-color-blue_background': {
    background: 'rgba(231, 243, 248, 1)',
  },
  '.block-color-purple_background': {
    background: 'rgba(248, 243, 252, 1)',
  },
  '.block-color-pink_background': {
    background: 'rgba(252, 241, 246, 1)',
  },
  '.block-color-red_background': {
    background: 'rgba(253, 235, 236, 1)',
  },
  '.select-value-color-uiBlue': { backgroundColor: 'undefined' }, // "undefined" will not apply
  '.select-value-color-pink': { backgroundColor: 'rgba(225, 136, 179, 0.27)' },
  '.select-value-color-purple': { backgroundColor: 'rgba(168, 129, 197, 0.27)' },
  '.select-value-color-green': { backgroundColor: 'rgba(123, 183, 129, 0.27)' },
  '.select-value-color-gray': { backgroundColor: 'rgba(84, 72, 49, 0.15)' },
  '.select-value-color-translucentGray': { backgroundColor: 'undefined' }, // "undefined" will not apply
  '.select-value-color-orange': { backgroundColor: 'rgba(224, 124, 57, 0.27)' },
  '.select-value-color-brown': { backgroundColor: 'rgba(210, 162, 141, 0.35)' },
  '.select-value-color-red': { backgroundColor: 'rgba(244, 171, 159, 0.4)' },
  '.select-value-color-yellow': { backgroundColor: 'rgba(236, 191, 66, 0.39)' },
  '.select-value-color-blue': { backgroundColor: 'rgba(93, 165, 206, 0.27)' },
  '.select-value-color-pageGlass': { backgroundColor: 'undefined' }, // "undefined" will not apply
  '.select-value-color-washGlass': { backgroundColor: 'undefined' }, // "undefined" will not apply

  '.checkbox': {
    display: 'inline-flex',
    verticalAlign: 'text-bottom',
    width: '16px', // Original was just "16", explicitly make it "16px"
    height: '16px', // Original was just "16", explicitly make it "16px"
    backgroundSize: '16px',
    marginLeft: '2px',
    marginRight: '5px',
  },
  '.checkbox-on': {
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E")',
  },
  '.checkbox-off': {
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E")',
  },
};

export default notion_styles;