

function services_changeStringToDateFormat(stringformat: string): Date {
    var parts = stringformat.split(/[\s.:-]+/);
    // Poznámka: V JavaScripte mesiace začínajú od 0, preto mesiac - 1
    return new Date(+parts[2], +parts[1] - 1, +parts[0], +parts[3], +parts[4]);
};

export default services_changeStringToDateFormat;
