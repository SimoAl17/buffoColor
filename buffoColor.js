/**
 * Set the opacity of a hex color
 * @param hexColor - the hex color code without the alpha value.
 * @param opacity - The opacity of the color. This is a value between 0 and 1.
 * @returns The hex color with the alpha value applied.
 */
export function setOpacity(hexColor, opacity) {
    const alphaOpacity = Math.round(opacity * 255);
    const hexOpacity = alphaOpacity.toString(16).toUpperCase();
    return hexColor + hexOpacity;
}

/**
 * Convert a color string to an RGBA string
 * @param colorString - The color string to convert to RGBA.
 * @returns The RGBA values of the color.
 */
export function fromColorStringToRGBA(colorString) {
    let r = colorString.substring(1, 3);
    let g = colorString.substring(3, 5);
    let b = colorString.substring(5, 7);
    let a = colorString.substring(7, 9);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    a = parseInt(a, 16);
    return r + ',' + g + ',' + b + ',' + a;
}


/**
 * Given a hex color, return the color that would be the opposite of that color
 * @param hexColor - The hex color code to convert to a contrasting color.
 * @returns a hex color code with the opposite color.
 */
export function getContrastingColor(hexColor) {
    let r = hexColor.substring(1, 3);
    let g = hexColor.substring(3, 5);
    let b = hexColor.substring(5, 7);
    let a = hexColor.substring(7, 9);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    a = parseInt(a, 16);
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    a = 255 - a;
    r = r.toString(16).toUpperCase();
    g = g.toString(16).toUpperCase();
    b = b.toString(16).toUpperCase();
    a = a.toString(16).toUpperCase();
    if (r.toString().length === 1) {
        r = '0' + r;
    }
    if (g.toString().length === 1) {
        g = '0' + g;
    }
    if (b.toString().length === 1) {
        b = '0' + b;
    }
    if (a.toString().length === 1) {
        a = '0' + a;
    }
    return '#' + r + g + b + a;
}