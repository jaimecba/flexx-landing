export function cleanCNPJ(cnpj: string): string {
    return cnpj.replace(/\D/g, '');
}

export function formatCNPJ(cnpj: string): string {
    const cleaned = cleanCNPJ(cnpj);
    return cleaned
        .replace(/^(\d{2})( \d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})( \d)/, '$1.$2.$3')
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})( \d)/, '$1.$2.$3/$4')
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})( \d)/, '$1.$2.$3/$4-$5');
}

export function validateCNPJ(cnpj: string): boolean {
    const digits = cleanCNPJ(cnpj);
    if (digits.length !== 14) {
        return false;
    }
    if (/^(\d)\1{13}$/.test(digits)) {
        return false;
    }

    // Primeiro dígito verificador
    let sum = 0;
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
        sum += parseInt(digits[i], 10) * weights1[i];
    }
    let mod = sum % 11;
    const dv1 = mod < 2 ? 0 : 11 - mod;
    if (parseInt(digits[12], 10) !== dv1) {
        return false;
    }

    // Segundo dígito verificador
    sum = 0;
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
        sum += parseInt(digits[i], 10) * weights2[i];
    }
    mod = sum % 11;
    const dv2 = mod < 2 ? 0 : 11 - mod;
    return parseInt(digits[13], 10) === dv2;
}
