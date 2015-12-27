console.log(`<b>${html(process.argv[2])} says</b>: "${html(process.argv[3])}"`);

function html(HTMLString) {
    HTMLString = HTMLString.replace(/&/g, '&amp;');
    HTMLString = HTMLString.replace(/'/g, '&apos;');
    HTMLString = HTMLString.replace(/"/g, '&quot;');
    HTMLString = HTMLString.replace(/</g, '&lt;');
    HTMLString = HTMLString.replace(/>/g, '&gt;');
    return HTMLString;
}

